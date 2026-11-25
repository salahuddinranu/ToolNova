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
  // ================= PDF TOOLS =================
  { id: 'merge-pdf', name: 'Merge PDF', category: 'pdf', description: 'Combine multiple PDF files into one.', icon: '🔗', tags: ['combine'], type: 'client', status: 'ready' },
  { id: 'split-pdf', name: 'Split PDF', category: 'pdf', description: 'Split a PDF into multiple files.', icon: '✂️', tags: ['divide'], type: 'client', status: 'ready' },
  { id: 'compress-pdf', name: 'Compress PDF', category: 'pdf', description: 'Reduce PDF file size.', icon: '🗜️', tags: ['shrink'], type: 'client', status: 'coming-soon' },
  { id: 'images-to-pdf', name: 'Images to PDF', category: 'pdf', description: 'Convert images to PDF.', icon: '🖼️', tags: ['jpg', 'png'], type: 'client', status: 'ready' },
  { id: 'pdf-to-images', name: 'PDF to Images', category: 'pdf', description: 'Extract PDF pages as images.', icon: '📸', tags: ['convert'], type: 'client', status: 'ready' },
  { id: 'extract-pdf-images', name: 'Extract PDF Images', category: 'pdf', description: 'Extract images from inside a PDF.', icon: '🖼️', tags: ['extract'], type: 'client', status: 'ready' },
  { id: 'pdf-page-counter', name: 'PDF Page Counter', category: 'pdf', description: 'Count pages in a PDF.', icon: '🔢', tags: ['pages'], type: 'client', status: 'ready' },

  // ================= IMAGE TOOLS =================
  { id: 'image-compressor', name: 'Image Compressor', category: 'image', description: 'Compress images to any size.', icon: '🗜️', tags: ['shrink'], type: 'client', status: 'ready' },
  { id: 'image-resizer', name: 'Image Resizer', category: 'image', description: 'Resize images to exact dimensions.', icon: '📐', tags: ['scale'], type: 'client', status: 'ready' },
  { id: 'image-cropper', name: 'Image Cropper', category: 'image', description: 'Crop images easily.', icon: '✂️', tags: ['trim'], type: 'client', status: 'coming-soon' },
  { id: 'bg-remover', name: 'Background Remover', category: 'image', description: 'Remove background using AI.', icon: '✂️', tags: ['bg', 'remove'], type: 'client', status: 'ready' },
  { id: 'image-flipper', name: 'Image Flipper', category: 'image', description: 'Flip images horizontally or vertically.', icon: '🔄', tags: ['flip', 'mirror'], type: 'client', status: 'ready' },
  { id: 'grayscale-converter', name: 'Grayscale Converter', category: 'image', description: 'Convert image to black and white.', icon: '⬛', tags: ['b&w', 'grayscale'], type: 'client', status: 'ready' },
  // ================= TEXT TOOLS =================
  { id: 'word-counter', name: 'Word Counter', category: 'text', description: 'Count words, characters and sentences.', icon: '🔢', tags: ['count'], type: 'client', status: 'ready' },
  { id: 'case-converter', name: 'Case Converter', category: 'text', description: 'Convert text to UPPER, lower, Title.', icon: 'Aa', tags: ['uppercase'], type: 'client', status: 'ready' },
  { id: 'remove-extra-spaces', name: 'Remove Extra Spaces', category: 'text', description: 'Clean extra whitespace.', icon: '🧹', tags: ['clean'], type: 'client', status: 'ready' },
  { id: 'reverse-text', name: 'Reverse Text', category: 'text', description: 'Reverse any text string.', icon: '🔁', tags: ['backwards'], type: 'client', status: 'ready' },
  { id: 'text-to-slug', name: 'Text to Slug', category: 'text', description: 'Convert text to URL slug.', icon: '🔗', tags: ['url', 'slug'], type: 'client', status: 'ready' },
  { id: 'text-diff-checker', name: 'Text Diff Checker', category: 'text', description: 'Compare two texts.', icon: '⚖️', tags: ['diff'], type: 'client', status: 'ready' },
  { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum', category: 'text', description: 'Generate placeholder text.', icon: '📝', tags: ['dummy'], type: 'client', status: 'ready' },
  { id: 'text-repeater', name: 'Text Repeater', category: 'text', description: 'Repeat any text multiple times.', icon: '🔁', tags: ['repeat'], type: 'client', status: 'ready' },
{ id: 'text-to-morse', name: 'Text to Morse', category: 'text', description: 'Convert text to Morse code.', icon: '📡', tags: ['morse'], type: 'client', status: 'ready' },
{ id: 'binary-to-text', name: 'Binary to Text', category: 'text', description: 'Convert binary to readable text.', icon: '🔤', tags: ['binary'], type: 'client', status: 'ready' },
  { id: 'html-entity-converter', name: 'HTML Entity Converter', category: 'text', description: 'Encode/decode HTML entities.', icon: '🏷️', tags: ['html'], type: 'client', status: 'ready' },
  // ================= DEVELOPER TOOLS =================
  { id: 'json-formatter', name: 'JSON Formatter', category: 'developer', description: 'Format and beautify JSON.', icon: '{ }', tags: ['json'], type: 'client', status: 'ready' },
  { id: 'base64-encoder', name: 'Base64 Encoder', category: 'developer', description: 'Encode text to Base64.', icon: '🔐', tags: ['encode'], type: 'client', status: 'ready' },
  { id: 'base64-decoder', name: 'Base64 Decoder', category: 'developer', description: 'Decode Base64 to text.', icon: '🔓', tags: ['decode'], type: 'client', status: 'ready' },
  { id: 'url-encoder', name: 'URL Encoder', category: 'developer', description: 'Encode URLs safely.', icon: '🔗', tags: ['url'], type: 'client', status: 'ready' },
  { id: 'uuid-generator', name: 'UUID Generator', category: 'developer', description: 'Generate random UUIDs.', icon: '🆔', tags: ['guid'], type: 'client', status: 'ready' },
  { id: 'gradient-generator', name: 'Gradient Generator', category: 'developer', description: 'Create CSS gradients.', icon: '🎨', tags: ['css'], type: 'client', status: 'ready' },
 { id: 'color-converter', name: 'Color Converter', category: 'developer', description: 'Convert HEX, RGB, HSL colors.', icon: '🎨', tags: ['color'], type: 'client', status: 'ready' },
{ id: 'box-shadow-generator', name: 'Box Shadow Generator', category: 'developer', description: 'Create CSS box shadows.', icon: '🎨', tags: ['css', 'shadow'], type: 'client', status: 'ready' },
  { id: 'random-color-generator', name: 'Random Color Generator', category: 'security', description: 'Generate random colors.', icon: '🌈', tags: ['random', 'color'], type: 'client', status: 'ready' },
 { id: 'random-string-generator', name: 'Random String Generator', category: 'security', description: 'Generate random strings.', icon: '🔤', tags: ['random'], type: 'client', status: 'ready' },
  { id: 'html-formatter', name: 'HTML Formatter', category: 'developer', description: 'Beautify HTML code.', icon: '🌐', tags: ['html'], type: 'client', status: 'ready' },
{ id: 'meta-tag-generator', name: 'Meta Tag Generator', category: 'developer', description: 'Generate SEO meta tags.', icon: '🏷️', tags: ['seo', 'meta'], type: 'client', status: 'ready' },
  { id: 'file-size-converter', name: 'File Size Converter', category: 'developer', description: 'Convert file sizes (KB, MB, GB).', icon: '📦', tags: ['size', 'kb', 'mb'], type: 'client', status: 'ready' },
 { id: 'timestamp-converter', name: 'Timestamp Converter', category: 'developer', description: 'Convert Unix timestamps.', icon: '⏱️', tags: ['time', 'unix'], type: 'client', status: 'ready' },
  { id: 'word-density-analyzer', name: 'Word Density Analyzer', category: 'developer', description: 'Check keyword density.', icon: '📊', tags: ['seo'], type: 'client', status: 'ready' },
  { id: 'data-uri-generator', name: 'Data URI Generator', category: 'developer', description: 'Convert files to Base64 links.', icon: '🔗', tags: ['base64', 'uri'], type: 'client', status: 'ready' },
  { id: 'csv-to-json', name: 'CSV to JSON', category: 'developer', description: 'Convert CSV to JSON.', icon: '{ }', tags: ['csv', 'json'], type: 'client', status: 'ready' },
  { id: 'json-to-csv', name: 'JSON to CSV', category: 'developer', description: 'Convert JSON to CSV.', icon: '📊', tags: ['csv', 'json'], type: 'client', status: 'ready' },
  // ================= CALCULATORS =================
  { id: 'percentage-calculator', name: 'Percentage Calculator', category: 'calculator', description: 'Calculate percentages.', icon: '%', tags: ['percent'], type: 'client', status: 'ready' },
 { id: 'average-calculator', name: 'Average Calculator', category: 'calculator', description: 'Calculate the mean of numbers.', icon: '📊', tags: ['average', 'mean'], type: 'client', status: 'ready' },
  { id: 'decimal-to-binary', name: 'Decimal to Binary', category: 'calculator', description: 'Convert decimal to binary.', icon: '💻', tags: ['binary', 'decimal'], type: 'client', status: 'ready' },
  { id: 'age-calculator', name: 'Age Calculator', category: 'calculator', description: 'Calculate exact age.', icon: '🎂', tags: ['birthday'], type: 'client', status: 'ready' },
  { id: 'discount-calculator', name: 'Discount Calculator', category: 'calculator', description: 'Calculate discounts.', icon: '🏷️', tags: ['sale'], type: 'client', status: 'ready' },
  { id: 'tip-calculator', name: 'Tip Calculator', category: 'calculator', description: 'Calculate tip and split bill.', icon: '💰', tags: ['bill'], type: 'client', status: 'ready' },
  { id: 'time-duration-calculator', name: 'Time Duration Calculator', category: 'calculator', description: 'Calculate time difference.', icon: '⏳', tags: ['time'], type: 'client', status: 'ready' },
  { id: 'cgpa-calculator', name: 'CGPA Calculator', category: 'calculator', description: 'Calculate your GPA/CGPA.', icon: '🎓', tags: ['gpa'], type: 'client', status: 'ready' },
{ id: 'compound-interest-calculator', name: 'Compound Interest', category: 'calculator', description: 'Calculate compound interest.', icon: '📈', tags: ['finance'], type: 'client', status: 'ready' },
  { id: 'loan-calculator', name: 'Loan Payment Estimator', category: 'calculator', description: 'Calculate loan payments.', icon: '🏦', tags: ['loan'], type: 'client', status: 'ready' },
  // ================= SECURITY =================
  { id: 'password-generator', name: 'Password Generator', category: 'security', description: 'Generate strong passwords.', icon: '🔑', tags: ['secure'], type: 'client', status: 'ready' },
 { id: 'hash-generator', name: 'Hash Generator', category: 'security', description: 'Generate SHA hashes.', icon: '#️⃣', tags: ['sha256'], type: 'client', status: 'ready' },
{ id: 'random-name-generator', name: 'Random Name Generator', category: 'security', description: 'Generate random names.', icon: '👤', tags: ['name'], type: 'client', status: 'ready' },
  { id: 'random-number-generator', name: 'Random Number', category: 'security', description: 'Generate random numbers.', icon: '🎲', tags: ['random'], type: 'client', status: 'ready' },
  { id: 'qr-code-generator', name: 'QR Code Generator', category: 'security', description: 'Generate QR codes.', icon: '📱', tags: ['qr'], type: 'client', status: 'ready' },
{ id: 'dice-roller', name: 'Dice Roller', category: 'security', description: 'Roll virtual dice.', icon: '🎲', tags: ['dice', 'game'], type: 'client', status: 'ready' },
  // ================= AI TOOLS =================
  { id: 'ai-summarizer', name: 'AI Summarizer', category: 'ai', description: 'Summarize long text.', icon: '📄', tags: ['ai'], type: 'ai', status: 'ready' }
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

window.ToolNova = { CATEGORIES, TOOLS, getToolsByCategory, getToolById, getCategoryById, getCategoryCounts };
