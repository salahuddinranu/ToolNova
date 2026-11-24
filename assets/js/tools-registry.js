const CATEGORIES = [
  { id: 'pdf', name: 'PDF Tools', icon: '📄' },
  { id: 'image', name: 'Image Tools', icon: '🖼️' },
  { id: 'ai', name: 'AI Tools', icon: '✨' },
  { id: 'text', name: 'Text Tools', icon: '📝' },
  { id: 'developer', name: 'Developer Tools', icon: '💻' },
  { id: 'calculator', name: 'Calculators', icon: '🧮' },
  { id: 'security', name: 'Security Tools', icon: '🔐' }
];

const TOOLS = [
  // PDF TOOLS
  { id: 'merge-pdf', name: 'Merge PDF', category: 'pdf', description: 'Combine multiple PDF files into one.', icon: '🔗', tags: ['combine', 'join'], type: 'client', status: 'coming-soon' },
  { id: 'split-pdf', name: 'Split PDF', category: 'pdf', description: 'Split a PDF into multiple files.', icon: '✂️', tags: ['divide'], type: 'client', status: 'coming-soon' },
  { id: 'compress-pdf', name: 'Compress PDF', category: 'pdf', description: 'Reduce PDF file size.', icon: '🗜️', tags: ['shrink'], type: 'client', status: 'coming-soon' },
  { id: 'rotate-pdf', name: 'Rotate PDF', category: 'pdf', description: 'Rotate PDF pages.', icon: '🔄', tags: ['turn'], type: 'client', status: 'coming-soon' },
  { id: 'images-to-pdf', name: 'Images to PDF', category: 'pdf', description: 'Convert images to PDF.', icon: '🖼️', tags: ['jpg', 'png'], type: 'client', status: 'coming-soon' },
  { id: 'pdf-to-images', name: 'PDF to Images', category: 'pdf', description: 'Extract PDF pages as images.', icon: '📸', tags: ['convert'], type: 'client', status: 'coming-soon' },
  { id: 'extract-pdf-pages', name: 'Extract PDF Pages', category: 'pdf', description: 'Extract specific pages from PDF.', icon: '📑', tags: ['pages'], type: 'client', status: 'coming-soon' },
  { id: 'delete-pdf-pages', name: 'Delete PDF Pages', category: 'pdf', description: 'Remove pages from a PDF.', icon: '🗑️', tags: ['remove'], type: 'client', status: 'coming-soon' },
  
  // IMAGE TOOLS
  { id: 'image-compressor', name: 'Image Compressor', category: 'image', description: 'Compress images without losing quality.', icon: '🗜️', tags: ['shrink', 'optimize'], type: 'client', status: 'ready' },
  { id: 'image-resizer', name: 'Image Resizer', category: 'image', description: 'Resize images to exact dimensions.', icon: '📐', tags: ['scale', 'dimensions'], type: 'client', status: 'coming-soon' },
  { id: 'image-cropper', name: 'Image Cropper', category: 'image', description: 'Crop images easily.', icon: '✂️', tags: ['trim'], type: 'client', status: 'coming-soon' },
  { id: 'image-format-converter', name: 'Image Converter', category: 'image', description: 'Convert JPG, PNG, WebP.', icon: '🔄', tags: ['jpg', 'png', 'webp'], type: 'client', status: 'coming-soon' },
  { id: 'image-to-base64', name: 'Image to Base64', category: 'image', description: 'Convert image to Base64 string.', icon: '🔤', tags: ['encode'], type: 'client', status: 'coming-soon' },
  { id: 'base64-to-image', name: 'Base64 to Image', category: 'image', description: 'Convert Base64 to image.', icon: '🖼️', tags: ['decode'], type: 'client', status: 'coming-soon' },
  { id: 'favicon-generator', name: 'Favicon Generator', category: 'image', description: 'Generate favicons for websites.', icon: '⭐', tags: ['icon'], type: 'client', status: 'coming-soon' },
  { id: 'image-color-picker', name: 'Color Picker', category: 'image', description: 'Pick colors from images.', icon: '🎨', tags: ['color'], type: 'client', status: 'coming-soon' },

  // TEXT TOOLS
  { id: 'word-counter', name: 'Word Counter', category: 'text', description: 'Count words, characters and sentences.', icon: '🔢', tags: ['count'], type: 'client', status: 'ready' },
  { id: 'case-converter', name: 'Case Converter', category: 'text', description: 'Convert text to UPPER, lower, Title.', icon: 'Aa', tags: ['uppercase'], type: 'client', status: 'ready' },
  { id: 'remove-extra-spaces', name: 'Remove Extra Spaces', category: 'text', description: 'Clean extra whitespace.', icon: '🧹', tags: ['clean', 'trim'], type: 'client', status: 'ready' },
  { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum', category: 'text', description: 'Generate placeholder text.', icon: '📝', tags: ['dummy'], type: 'client', status: 'ready' },
  { id: 'reverse-text', name: 'Reverse Text', category: 'text', description: 'Reverse any text string.', icon: '🔁', tags: ['backwards'], type: 'client', status: 'coming-soon' },
  { id: 'text-to-slug', name: 'Text to Slug', category: 'text', description: 'Convert text to URL slug.', icon: '🔗', tags: ['url'], type: 'client', status: 'coming-soon' },
  { id: 'text-diff-checker', name: 'Diff Checker', category: 'text', description: 'Compare two texts.', icon: '⚖️', tags: ['compare'], type: 'client', status: 'coming-soon' },

  // DEVELOPER TOOLS
  { id: 'json-formatter', name: 'JSON Formatter', category: 'developer', description: 'Format and beautify JSON.', icon: '{ }', tags: ['json', 'format'], type: 'client', status: 'ready' },
  { id: 'json-validator', name: 'JSON Validator', category: 'developer', description: 'Validate JSON syntax.', icon: '✅', tags: ['json'], type: 'client', status: 'ready' },
  { id: 'base64-encoder', name: 'Base64 Encoder', category: 'developer', description: 'Encode text to Base64.', icon: '🔐', tags: ['encode'], type: 'client', status: 'ready' },
  { id: 'base64-decoder', name: 'Base64 Decoder', category: 'developer', description: 'Decode Base64 text.', icon: '🔓', tags: ['decode'], type: 'client', status: 'ready' },
  { id: 'uuid-generator', name: 'UUID Generator', category: 'developer', description: 'Generate random UUIDs.', icon: '🆔', tags: ['guid', 'id'], type: 'client', status: 'ready' },
  { id: 'url-encoder', name: 'URL Encoder', category: 'developer', description: 'Encode URLs safely.', icon: '🔗', tags: ['url'], type: 'client', status: 'coming-soon' },
  { id: 'url-decoder', name: 'URL Decoder', category: 'developer', description: 'Decode URL strings.', icon: '🔗', tags: ['url'], type: 'client', status: 'coming-soon' },
  { id: 'html-formatter', name: 'HTML Formatter', category: 'developer', description: 'Beautify HTML code.', icon: '🌐', tags: ['html'], type: 'client', status: 'coming-soon' },
  { id: 'css-formatter', name: 'CSS Formatter', category: 'developer', description: 'Beautify CSS code.', icon: '🎨', tags: ['css'], type: 'client', status: 'coming-soon' },

  // CALCULATORS
  { id: 'percentage-calculator', name: 'Percentage Calculator', category: 'calculator', description: 'Calculate percentages.', icon: '%', tags: ['percent'], type: 'client', status: 'ready' },
  { id: 'age-calculator', name: 'Age Calculator', category: 'calculator', description: 'Calculate exact age.', icon: '🎂', tags: ['birthday'], type: 'client', status: 'ready' },
  { id: 'tip-calculator', name: 'Tip Calculator', category: 'calculator', description: 'Calculate tip and split bill.', icon: '💰', tags: ['bill'], type: 'client', status: 'ready' },
  { id: 'discount-calculator', name: 'Discount Calculator', category: 'calculator', description: 'Calculate discounts.', icon: '🏷️', tags: ['sale'], type: 'client', status: 'ready' },
  { id: 'unit-converter', name: 'Unit Converter', category: 'calculator', description: 'Convert length, weight, temp.', icon: '📏', tags: ['convert'], type: 'client', status: 'coming-soon' },
  { id: 'loan-calculator', name: 'Loan Calculator', category: 'calculator', description: 'Calculate loan payments.', icon: '🏦', tags: ['loan'], type: 'client', status: 'coming-soon' },

  // SECURITY
  { id: 'password-generator', name: 'Password Generator', category: 'security', description: 'Generate strong passwords.', icon: '🔑', tags: ['secure'], type: 'client', status: 'ready' },
  { id: 'random-number-generator', name: 'Random Number', category: 'security', description: 'Generate random numbers.', icon: '🎲', tags: ['random'], type: 'client', status: 'ready' },
  { id: 'hash-generator', name: 'Hash Generator', category: 'security', description: 'Generate SHA hashes.', icon: '#️⃣', tags: ['sha256'], type: 'client', status: 'ready' },
  { id: 'coin-flip', name: 'Coin Flip', category: 'security', description: 'Flip a virtual coin.', icon: '🪙', tags: ['random'], type: 'client', status: 'ready' },
  { id: 'qr-code-generator', name: 'QR Code Generator', category: 'security', description: 'Generate QR codes.', icon: '📱', tags: ['qr'], type: 'client', status: 'coming-soon' },
  { id: 'random-string-generator', name: 'Random String', category: 'security', description: 'Generate random strings.', icon: '🔤', tags: ['random'], type: 'client', status: 'coming-soon' },

  // AI TOOLS
  { id: 'ai-summarizer', name: 'AI Summarizer', category: 'ai', description: 'Summarize long text.', icon: '📄', tags: ['ai'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-email-writer', name: 'AI Email Writer', category: 'ai', description: 'Draft emails with AI.', icon: '✉️', tags: ['ai'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-rewriter', name: 'AI Rewriter', category: 'ai', description: 'Rewrite paragraphs.', icon: '🔄', tags: ['ai'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-title-generator', name: 'AI Title Generator', category: 'ai', description: 'Generate catchy titles.', icon: '💡', tags: ['ai'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-caption-generator', name: 'AI Caption Generator', category: 'ai', description: 'Social media captions.', icon: '📸', tags: ['ai'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-code-explainer', name: 'AI Code Explainer', category: 'ai', description: 'Explain code snippets.', icon: '💻', tags: ['ai'], type: 'ai', status: 'coming-soon' }
];

function getToolsByCategory(categoryId) { return TOOLS.filter(t => t.category === categoryId); }
function getToolById(id) { return TOOLS.find(t => t.id === id); }
function getCategoryById(id) { return CATEGORIES.find(c => c.id === id); }
function getCategoryCounts() {
  const counts = {};
  CATEGORIES.forEach(c => counts[c.id] = 0);
  TOOLS.forEach(t => { if (counts[t.category] !== undefined) counts[t.category]++; });
  return counts;
}

window.ToolNova = {
  CATEGORIES,
  TOOLS,
  getToolsByCategory,
  getToolById,
  getCategoryById,
  getCategoryCounts
};
