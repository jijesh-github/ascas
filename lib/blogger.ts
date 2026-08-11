import { BloggerApiItem, BloggerApiResponse, BloggerPost } from './types/blogger';

/**
 * Extracts the first image URL from Blogger content HTML or Blogger images metadata.
 * Upgrades thumbnail URLs (e.g. /s72-c/, /w72-h72/) to high-resolution variants.
 */
export function extractFeaturedImage(content: string = '', images?: Array<{ url: string }>): string | null {
  let imgUrl: string | null = null;

  // Check Blogger's provided images array first
  if (images && images.length > 0 && images[0].url) {
    imgUrl = images[0].url;
  } else {
    // Regex match for first <img ... src="..." /> inside content HTML
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = content.match(imgRegex);
    if (match && match[1]) {
      imgUrl = match[1];
    }
  }

  if (!imgUrl) return null;

  // Handle protocol-relative URLs
  if (imgUrl.startsWith('//')) {
    imgUrl = `https:${imgUrl}`;
  }

  // Upgrade Google/Blogger image thumbnail parameters for high quality hero/card rendering
  // Replace patterns like /s72-c/, /s320/, /s640/, /w72-h72-p-k-no-nu/ with /s1600/ or /w1200-h630/
  if (imgUrl.includes('bp.blogspot.com') || imgUrl.includes('googleusercontent.com')) {
    imgUrl = imgUrl.replace(/\/s\d+(-c)?\//, '/s1600/').replace(/\/w\d+-h\d+[^/]*\//, '/s1600/');
  }

  return imgUrl;
}

/**
 * Strips HTML tags and decodes common HTML entities to construct a clean text excerpt.
 */
export function extractExcerpt(content: string = '', maxLength: number = 160): string {
  if (!content) return '';

  // Remove HTML elements and style/script tags
  const clean = content
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&rsquo;/gi, "'")
    .replace(/&lsquo;/gi, "'")
    .replace(/&ldquo;/gi, '"')
    .replace(/&rdquo;/gi, '"')
    .replace(/&hellip;/gi, '...')
    .replace(/\s+/g, ' ')
    .trim();

  if (clean.length <= maxLength) return clean;

  // Truncate cleanly at a word boundary
  const truncated = clean.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Derives a clean, SEO-friendly URL slug from Blogger post URL or title.
 */
export function slugify(title: string = '', postUrl?: string): string {
  if (postUrl) {
    try {
      const urlObj = new URL(postUrl);
      const pathname = urlObj.pathname;
      const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
      const rawSlug = filename.replace(/\.html$/i, '');
      if (rawSlug && rawSlug.length > 2) {
        return rawSlug.toLowerCase();
      }
    } catch {
      // Fallback to title slugification if URL parsing fails
    }
  }

  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return slug || 'article';
}

/**
 * Transforms raw Blogger API item into formatted BloggerPost
 */
export function transformBloggerItem(item: BloggerApiItem): BloggerPost {
  const content = item.content || '';
  const title = item.title || 'Untitled Post';
  const slug = slugify(title, item.url);
  const featuredImage = extractFeaturedImage(content, item.images);
  const excerpt = extractExcerpt(content, 180);

  return {
    id: item.id,
    blogId: item.blog?.id,
    published: item.published || new Date().toISOString(),
    updated: item.updated || item.published || new Date().toISOString(),
    url: item.url || '',
    title,
    content,
    excerpt,
    featuredImage,
    author: {
      id: item.author?.id,
      displayName: item.author?.displayName || 'ASCAS Care Team',
      url: item.author?.url,
      image: item.author?.image?.url ? { url: item.author.image.url } : undefined
    },
    labels: item.labels && item.labels.length > 0 ? item.labels : ['General Health'],
    slug
  };
}

export interface AtomEntry {
  id?: { $t?: string };
  published?: { $t?: string };
  updated?: { $t?: string };
  title?: { $t?: string };
  content?: { $t?: string };
  category?: Array<{ term?: string }>;
  link?: Array<{ rel?: string; href?: string }>;
  author?: Array<{ name?: { $t?: string }; gd$image?: { src?: string } }>;
  media$thumbnail?: { url?: string };
}

/**
 * Transforms Blogger public Atom JSON entry into formatted BloggerPost
 */
export function transformAtomEntry(entry: AtomEntry): BloggerPost {
  const title = entry.title?.$t || 'Untitled Post';
  const content = entry.content?.$t || '';
  const alternateLink = entry.link?.find(l => l.rel === 'alternate')?.href;
  const slug = slugify(title, alternateLink);

  const labels = entry.category?.map(c => c.term).filter((t): t is string => Boolean(t)) || ['General Health'];
  const authorName = entry.author?.[0]?.name?.$t || 'ASCAS Care Team';

  const thumbnail = entry.media$thumbnail?.url;
  const imagesObj = thumbnail ? [{ url: thumbnail }] : undefined;
  const featuredImage = extractFeaturedImage(content, imagesObj);
  const excerpt = extractExcerpt(content, 180);

  const idStr = entry.id?.$t || '';
  const postMatch = idStr.match(/post-(\d+)/);
  const id = postMatch ? postMatch[1] : idStr;

  return {
    id,
    published: entry.published?.$t || new Date().toISOString(),
    updated: entry.updated?.$t || entry.published?.$t || new Date().toISOString(),
    url: alternateLink || '',
    title,
    content,
    excerpt,
    featuredImage,
    author: {
      displayName: authorName
    },
    labels: labels.length > 0 ? labels : ['General Health'],
    slug
  };
}

export interface FetchBlogPostsResult {
  posts: BloggerPost[];
  isConfigured: boolean;
  error?: string;
}

/**
 * Fetches current published posts from Blogger without caching (no-store).
 * Uses API Key if present, otherwise falls back to public Blogger Atom JSON feed.
 * Default Blog ID set to 989370313265735822 (ASCAS Fertility and Women's Center).
 */
export async function getBlogPosts(): Promise<FetchBlogPostsResult> {
  const apiKey = process.env.BLOGGER_API_KEY?.trim();
  const blogId = process.env.BLOGGER_BLOG_ID?.trim() || '989370313265735822';

  // 1. Try Blogger API v3 if API key is provided
  if (apiKey) {
    try {
      let allItems: BloggerApiItem[] = [];
      let pageToken: string | undefined = undefined;
      let pageCount = 0;
      const maxPages = 10;

      do {
        let endpoint = `https://www.googleapis.com/blogger/v3/blogs/${encodeURIComponent(
          blogId
        )}/posts?key=${encodeURIComponent(apiKey)}&fetchBodies=true&fetchImages=true&status=LIVE&maxResults=50`;

        if (pageToken) {
          endpoint += `&pageToken=${encodeURIComponent(pageToken)}`;
        }

        const res = await fetch(endpoint, { cache: 'no-store' });
        if (!res.ok) break;

        const data: BloggerApiResponse = await res.json();
        if (data.items && Array.isArray(data.items)) {
          allItems = allItems.concat(data.items);
        }
        pageToken = data.nextPageToken;
        pageCount++;
      } while (pageToken && pageCount < maxPages);

      if (allItems.length > 0) {
        const posts = allItems.map(transformBloggerItem);
        posts.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
        return { posts, isConfigured: true };
      }
    } catch (e) {
      console.error('[Blogger API v3 error, falling back to Atom feed]:', e);
    }
  }

  // 2. Fetch live posts via Blogger public Atom JSON feed (No API Key Required!)
  try {
    const feedUrl = `https://www.blogger.com/feeds/${encodeURIComponent(
      blogId
    )}/posts/default?alt=json&max-results=500`;

    const res = await fetch(feedUrl, { cache: 'no-store' });

    if (!res.ok) {
      return {
        posts: [],
        isConfigured: true,
        error: `Failed to retrieve blog feed (Status: ${res.status})`
      };
    }

    const data = await res.json();
    const entries: AtomEntry[] = data.feed?.entry || [];
    const posts = entries.map(transformAtomEntry);

    // Sort strictly Newest -> Oldest by published date
    posts.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

    return {
      posts,
      isConfigured: true
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch Blogger posts.';
    console.error('[Blogger Feed Fetch Exception]:', err);
    return {
      posts: [],
      isConfigured: true,
      error: message
    };
  }
}

/**
 * Look up a single blog post by its derived slug or post ID.
 */
export async function getBlogPostBySlug(slug: string): Promise<BloggerPost | null> {
  const { posts } = await getBlogPosts();
  if (!posts || posts.length === 0) return null;

  // Direct match by slug
  const matched = posts.find(
    p => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug
  );

  if (matched) return matched;

  // Loose match ignoring hyphens
  const normalizedSearch = slug.toLowerCase().replace(/-/g, '');
  return (
    posts.find(p => p.slug.toLowerCase().replace(/-/g, '') === normalizedSearch) || null
  );
}
