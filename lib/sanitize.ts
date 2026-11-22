import sanitizeHtml from 'sanitize-html';
import { upgradeBloggerImageUrl } from './blogger';

/**
 * Cleans Blogger's empty spacing and sanitizes post HTML while preserving
 * the layout styles authored with each post.
 */
export function sanitizeBloggerHtml(htmlContent: string = ''): string {
  if (!htmlContent) return '';

  let cleaned = htmlContent;

  // Normalize Blogger's non-breaking spaces before removing empty blocks and list markers.
  cleaned = cleaned.replace(/&nbsp;|&#0*160;|&#x0*a0;|\u00a0/gi, ' ');

  cleaned = cleaned.replace(
    /(<li\b[^>]*>\s*)(?:<span\b[^>]*>\s*)?(?:[•·▪◦‣⁃]|&bull;|&#0*8226;|&#x0*2022;)\s*(?:<\/span>\s*)?/gi,
    '$1'
  );

  // 1. Remove empty list items with <br> or empty spans that cause unwanted spacing
  cleaned = cleaned.replace(/<li[^>]*>\s*(?:<span[^>]*>)?\s*(?:<br\s*\/?>|&nbsp;|\s)*\s*(?:<\/span>)?\s*<\/li>/gi, '');

  // 2. Remove empty paragraphs and excessive breaks
  cleaned = cleaned
    .replace(/<p\b[^>]*>\s*(?:\s|<br\s*\/?>)*\s*<\/p>/gi, '')
    .replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br />');

  return sanitizeHtml(cleaned, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre', 'code',
      'ul', 'ol', 'li', 'b', 'i', 'strong', 'em', 'strike', 'sub', 'sup',
      'hr', 'br', 'div', 'span', 'section', 'header', 'footer', 'button', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'a', 'img', 'iframe', 'figure', 'figcaption', 'svg', 'path'
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel', 'class', 'title', 'imageanchor'],
      img: ['src', 'alt', 'title', 'width', 'height', 'class', 'loading', 'border', 'data-original-height', 'data-original-width'],
      iframe: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen', 'class', 'title'],
      button: ['type', 'title', 'class', 'aria-label', 'aria-expanded', 'aria-controls', 'disabled'],
      td: ['colspan', 'rowspan', 'class'],
      th: ['colspan', 'rowspan', 'class'],
      svg: ['class', 'fill', 'viewbox', 'viewBox', 'xmlns', 'width', 'height'],
      path: ['d', 'fill', 'fill-rule', 'clip-rule'],
      '*': ['class', 'id', 'style', 'role', 'aria-label', 'aria-hidden']
    },
    allowedStyles: {
      '*': {
        'align-items': [/^(?:start|end|center|stretch|baseline|flex-start|flex-end)$/i],
        'align-self': [/^(?:start|end|center|stretch|baseline|flex-start|flex-end|auto)$/i],
        'background-color': [/^(?:#[\da-f]{3,8}|(?:rgba?|hsla?|oklab|oklch|lab|lch)\([\d\s.,%+/-]+\)|[a-z]+)$/i],
        'background-image': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        'border': [/^[\w\s#(),.%/-]+$/i],
        'border-bottom': [/^[\w\s#(),.%/-]+$/i],
        'border-color': [/^(?:#[\da-f]{3,8}|(?:rgba?|hsla?|oklab|oklch|lab|lch)\([\d\s.,%+/-]+\)|[a-z]+)$/i],
        'border-collapse': [/^(?:collapse|separate)$/i],
        'border-left': [/^[\w\s#(),.%/-]+$/i],
        'border-image': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        'border-radius': [/^[\w\s.%/+-]+$/i],
        'border-right': [/^[\w\s#(),.%/-]+$/i],
        'border-style': [/^(?:none|solid|dashed|dotted|double)$/i],
        'border-top': [/^[\w\s#(),.%/-]+$/i],
        'border-width': [/^[\w\s.%]+$/i],
        'box-sizing': [/^(?:border-box|content-box)$/i],
        'box-shadow': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        'clear': [/^(?:both|left|right|none)$/i],
        'color': [/^(?:#[\da-f]{3,8}|(?:rgba?|hsla?|oklab|oklch|lab|lch)\([\d\s.,%+/-]+\)|[a-z]+)$/i],
        'column-gap': [/^[\w.%+-]+$/i],
        'display': [/^(?:block|inline|inline-block|flex|inline-flex|grid|inline-grid|none)$/i],
        'flex': [/^[\w.%+-]+(?:\s+[\w.%+-]+){0,2}$/i],
        'flex-direction': [/^(?:row|row-reverse|column|column-reverse)$/i],
        'flex-shrink': [/^(?:0|1|[\d.]+)$/i],
        'flex-wrap': [/^(?:nowrap|wrap|wrap-reverse)$/i],
        'float': [/^(?:left|right|none)$/i],
        'font-family': [/^[\w\s,'"()-]+$/i],
        'font-feature-settings': [/^[\w\s"',.-]+$/i],
        'font-kerning': [/^(?:auto|normal|none)$/i],
        'font-language-override': [/^(?:normal|none|\"[\w-]+\")$/i],
        'font-optical-sizing': [/^(?:auto|none)$/i],
        'font-size': [/^(?:xx-small|x-small|small|medium|large|x-large|xx-large|smaller|larger|[\d.]+(?:px|rem|em|%|vw|vh))$/i],
        'font-size-adjust': [/^(?:none|[\d.]+)$/i],
        'font-stretch': [/^(?:ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|[\d.]+%)$/i],
        'font-style': [/^(?:normal|italic|oblique)$/i],
        'font-variant': [/^[\w\s-]+$/i],
        'font-variation-settings': [/^[\w\s"',.-]+$/i],
        'font-weight': [/^(?:normal|bold|bolder|lighter|[1-9]00)$/i],
        'gap': [/^[\w.%+-]+(?:\s+[\w.%+-]+)?$/i],
        'grid-column': [/^[\w\s/-]+$/i],
        'grid-template-columns': [/^[\w\s(),.%/-]+$/i],
        'height': [/^(?:auto|[\d.]+(?:px|rem|em|%|vh|vw))$/i],
        'justify-content': [/^(?:start|end|center|stretch|space-between|space-around|space-evenly|flex-start|flex-end)$/i],
        'justify-items': [/^(?:start|end|center|stretch)$/i],
        'letter-spacing': [/^(?:normal|[\d.]+(?:px|rem|em))$/i],
        'line-height': [/^(?:normal|[\d.]+(?:px|rem|em|%)?)$/i],
        'list-style': [/^[\w\s-]+$/i],
        'list-style-type': [/^[\w-]+$/i],
        'margin': [/^[\w.%+-]+(?:\s+[\w.%+-]+){0,3}$/i],
        'margin-block': [/^[\w.%+-]+(?:\s+[\w.%+-]+)?$/i],
        'margin-inline': [/^[\w.%+-]+(?:\s+[\w.%+-]+)?$/i],
        'margin-bottom': [/^[\w.%+-]+$/i],
        'margin-left': [/^[\w.%+-]+$/i],
        'margin-right': [/^[\w.%+-]+$/i],
        'margin-top': [/^[\w.%+-]+$/i],
        'max-width': [/^(?:none|[\d.]+(?:px|rem|em|%|vw))$/i],
        'min-width': [/^(?:auto|[\d.]+(?:px|rem|em|%|vw))$/i],
        'object-fit': [/^(?:contain|cover|fill|none|scale-down)$/i],
        'opacity': [/^(?:0|1|0?\.\d+|100%|[1-9]?\d%)$/i],
        'overflow': [/^(?:auto|hidden|scroll|visible)$/i],
        'overflow-x': [/^(?:auto|hidden|scroll|visible)$/i],
        'appearance': [/^(?:none|auto)$/i],
        'padding': [/^[\w.%+-]+(?:\s+[\w.%+-]+){0,3}$/i],
        'padding-block': [/^[\w.%+-]+(?:\s+[\w.%+-]+)?$/i],
        'padding-inline': [/^[\w.%+-]+(?:\s+[\w.%+-]+)?$/i],
        'padding-bottom': [/^[\w.%+-]+$/i],
        'padding-left': [/^[\w.%+-]+$/i],
        'padding-right': [/^[\w.%+-]+$/i],
        'padding-top': [/^[\w.%+-]+$/i],
        'row-gap': [/^[\w.%+-]+$/i],
        'text-align': [/^(?:left|right|center|justify|start|end)$/i],
        'text-decoration': [/^[\w\s-]+$/i],
        'text-indent': [/^[\w.%+-]+$/i],
        'transition-duration': [/^[\d.,\s]+(?:ms|s)$/i],
        'transition-property': [/^[\w\s,-]+$/i],
        'transition-timing-function': [/^(?:ease|ease-in|ease-out|ease-in-out|linear|cubic-bezier\([\d.,\s-]+\))$/i],
        'vertical-align': [/^(?:baseline|top|middle|bottom|sub|super)$/i],
        'white-space': [/^(?:normal|nowrap|pre|pre-wrap|pre-line|break-spaces)$/i],
        'width': [/^(?:auto|[\d.]+(?:px|rem|em|%|vw))$/i],
        '--tw-font-weight': [/^(?:normal|bold|[1-9]00)$/i],
        '--tw-gradient-from': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        '--tw-gradient-position': [/^[\w\s(),.%+-]+$/i],
        '--tw-gradient-stops': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        '--tw-gradient-to': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        '--tw-leading': [/^[\w.%+-]+$/i],
        '--tw-shadow': [/^(?!.*url\s*\()[\w\s#(),.%/+*-]+$/i],
        '--tw-space-y-reverse': [/^[01]$/]
      }
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
        return {
          tagName,
          attribs: {
            ...attribs,
            src: upgradeBloggerImageUrl(attribs.src || ''),
            loading: 'lazy'
          }
        };
      }
    }
  });
}
