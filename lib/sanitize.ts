import sanitizeHtml from 'sanitize-html';

/**
 * Sanitizes Blogger HTML content while:
 * - Restoring the original Black, Maroon/Brown-Red (#570026), and White color scheme
 * - Removing empty list items and unwanted blank spacing
 * - Adjusting 'Who Is IUI Recommended for?' grid so 'count)' stays on the same line
 * - Arranging 'Success Rate of IUI' on the LEFT side and 'Tips to Improve IUI Success' on the RIGHT side
 * - Removing the bottom second image completely
 * - Ensuring responsive grid layouts on mobile, tablet, and desktop
 */
export function sanitizeBloggerHtml(htmlContent: string = ''): string {
  if (!htmlContent) return '';

  let cleaned = htmlContent;

  // 1. Remove empty list items with <br>, &nbsp;, or empty spans that cause unwanted spacing
  cleaned = cleaned.replace(/<li[^>]*>\s*(?:<span[^>]*>)?\s*(?:<br\s*\/?>|&nbsp;|\s)*\s*(?:<\/span>)?\s*<\/li>/gi, '');

  // 2. Remove empty paragraphs and excessive breaks
  cleaned = cleaned
    .replace(/<p>\s*(?:&nbsp;|\s|<br\s*\/?>)*\s*<\/p>/gi, '')
    .replace(/(?:<br\s*\/?>\s*){3,}/gi, '<br /><br />');

  // 3. Strip rogue inline styles that inject cyan / lab(...) colors
  cleaned = cleaned.replace(/\s*style="[^"]*"/gi, '');

  // 4. Transform any teal / cyan classes to ASCAS original Black & Maroon (#570026) palette
  cleaned = cleaned
    .replace(/\btext-cyan-700\b/g, 'text-[#570026]')
    .replace(/\btext-teal-700\b/g, 'text-[#570026]')
    .replace(/\btext-teal-600\b/g, 'text-[#570026]')
    .replace(/\bbg-teal-100\b/g, 'bg-[#fcf0f5]')
    .replace(/\bbg-teal-50\b/g, 'bg-[#fdf2f8]')
    .replace(/\bborder-teal-100\b/g, 'border-pink-100')
    .replace(/\bborder-teal-200\b/g, 'border-pink-200')
    .replace(/\bborder-teal-500\b/g, 'border-[#570026]')
    .replace(/\bfrom-teal-50 to-cyan-50\b/g, 'from-pink-50/80 to-purple-50/40')
    .replace(/\btext-pink-800\b/g, 'text-[#570026]');

  // 5. Move the right side 3 points in 'Who Is IUI Recommended for?' slightly left so 'count)' fits on the same line
  cleaned = cleaned.replace(
    /grid grid-cols-1 md:grid-cols-2 gap-3/g,
    'grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-x-6 gap-y-3'
  );

  // 6. Make Treatment Process grid responsive for mobile, tablet, and desktop
  cleaned = cleaned.replace(
    /grid grid-cols-1 md:grid-cols-3 gap-4/g,
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
  );

  // 7. Remove the bottom separator building image completely
  const separatorRegex = /<div class="separator"[^>]*>([\s\S]*?)<\/div>/i;
  cleaned = cleaned.replace(separatorRegex, '');

  // 8. Ensure Left Side = Success Rate of IUI, Right Side = Tips to Improve IUI Success
  // Align both headings to start on the exact same horizontal baseline, and space out the 5 tips to align with the 2nd bullet point
  const bottomGridRegex = /<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">\s*(<div><h2>Success Rate of IUI[\s\S]*?<\/div>)\s*(<div><h3[^>]*>Tips to Improve IUI Success[\s\S]*?<\/div>\s*<\/div>)\s*<\/div>/i;
  const bottomMatch = cleaned.match(bottomGridRegex);

  if (bottomMatch) {
    let successRateHtml = bottomMatch[1];
    let tipsHtml = bottomMatch[2];

    // Remove rogue br in Success Rate heading and align margin-top
    successRateHtml = successRateHtml.replace(/<br\s*\/?>/gi, '').replace(/<h2>/gi, '<h2 class="!mt-0 !mb-4">');

    // Make Tips heading match the exact same h2 level and margin-top so both are on the exact same line
    tipsHtml = tipsHtml
      .replace(/<h3[^>]*>/gi, '<h2 class="!mt-0 !mb-4 text-xl sm:text-2xl font-bold text-[#570026]">')
      .replace(/<\/h3>/gi, '</h2>');

    // Give spacing for each point in Tips to Improve IUI Success so the 5th point aligns straight to the 2nd point of Success Rate
    tipsHtml = tipsHtml
      .replace(/class="space-y-3"/g, 'class="space-y-4 sm:space-y-5"')
      .replace(/class="bg-white border border-pink-100 rounded-xl p-5"/g, 'class="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm"');

    const reconstructed = `
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          ${successRateHtml}
        </div>
        <div>
          ${tipsHtml}
        </div>
      </div>
    `;

    cleaned = cleaned.replace(bottomMatch[0], reconstructed);
  }

  return sanitizeHtml(cleaned, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre', 'code',
      'ul', 'ol', 'li', 'b', 'i', 'strong', 'em', 'strike', 'sub', 'sup',
      'hr', 'br', 'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'a', 'img', 'iframe', 'figure', 'figcaption', 'svg', 'path'
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel', 'class', 'title', 'imageanchor'],
      img: ['src', 'alt', 'title', 'width', 'height', 'class', 'loading', 'border', 'data-original-height', 'data-original-width'],
      iframe: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen', 'class', 'title'],
      td: ['colspan', 'rowspan', 'class'],
      th: ['colspan', 'rowspan', 'class'],
      svg: ['class', 'fill', 'viewbox', 'viewBox', 'xmlns', 'width', 'height'],
      path: ['d', 'fill', 'fill-rule', 'clip-rule'],
      '*': ['class', 'id']
    },
    allowedIframeHostnames: ['www.youtube.com', 'youtube.com', 'player.vimeo.com'],
    transformTags: {
      a: (tagName, attribs) => {
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
        if (src.includes('bp.blogspot.com') || src.includes('googleusercontent.com')) {
          src = src.replace(/\/s\d+(-c)?\//, '/s1600/').replace(/\/w\d+-h\d+[^/]*\//, '/s1600/');
        }
        return {
          tagName,
          attribs: {
            ...attribs,
            src,
            loading: 'lazy',
            class: `${attribs.class || ''} w-full h-auto rounded-2xl border border-pink-100 shadow-md block mx-auto object-cover`.trim()
          }
        };
      }
    }
  });
}
