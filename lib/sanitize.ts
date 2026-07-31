import sanitizeHtml from 'sanitize-html';

/**
 * Sanitizes Blogger HTML content to prevent XSS while allowing rich blog formatting,
 * embedded YouTube videos/iframes, responsive images, and styled typography elements.
 */
export function sanitizeBloggerHtml(htmlContent: string = ''): string {
  if (!htmlContent) return '';

  return sanitizeHtml(htmlContent, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre', 'code',
      'ul', 'ol', 'li', 'b', 'i', 'strong', 'em', 'strike', 'sub', 'sup',
      'hr', 'br', 'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'a', 'img', 'iframe', 'figure', 'figcaption'
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel', 'class', 'title'],
      img: ['src', 'alt', 'title', 'width', 'height', 'class', 'loading', 'style'],
      iframe: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen', 'class', 'title'],
      td: ['colspan', 'rowspan', 'style', 'class'],
      th: ['colspan', 'rowspan', 'style', 'class'],
      '*': ['class', 'id', 'style']
    },
    allowedIframeHostnames: ['www.youtube.com', 'youtube.com', 'player.vimeo.com'],
    transformTags: {
      a: (tagName, attribs) => {
        // Open external links in new tab securely
        const isExternal = attribs.href && (attribs.href.startsWith('http://') || attribs.href.startsWith('https://'));
        return {
          tagName,
          attribs: {
            ...attribs,
            ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})
          }
        };
      },
      img: (tagName, attribs) => {
        let src = attribs.src || '';
        if (src.startsWith('//')) {
          src = `https:${src}`;
        }
        return {
          tagName,
          attribs: {
            ...attribs,
            src,
            loading: 'lazy',
            class: `${attribs.class || ''} max-w-full h-auto rounded-2xl my-6 border border-pink-100 shadow-sm`.trim()
          }
        };
      }
    }
  });
}
