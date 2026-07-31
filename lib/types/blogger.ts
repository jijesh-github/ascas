export interface BloggerPost {
  id: string;
  blogId?: string;
  published: string;
  updated: string;
  url: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string | null;
  author: {
    id?: string;
    displayName: string;
    url?: string;
    image?: {
      url: string;
    };
  };
  labels: string[];
  slug: string;
}

export interface BloggerApiItem {
  id: string;
  blog?: { id: string };
  published: string;
  updated: string;
  url: string;
  selfLink?: string;
  title: string;
  content?: string;
  images?: Array<{ url: string }>;
  author?: {
    id?: string;
    displayName?: string;
    url?: string;
    image?: { url?: string };
  };
  labels?: string[];
}

export interface BloggerApiResponse {
  kind?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  items?: BloggerApiItem[];
  error?: {
    code: number;
    message: string;
    errors?: Array<{ message: string; domain: string; reason: string }>;
  };
}
