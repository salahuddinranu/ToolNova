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
  { id: 'rotate-pdf', name: 'Rotate PDF', category: 'pdf', description: 'Rotate PDF pages.', icon: '🔄', tags: ['turn'], type: 'client', status: 'coming-soon' },
  { id: 'images-to-pdf', name: 'Images to PDF', category: 'pdf', description: 'Convert images to PDF.', icon: '🖼️', tags: ['jpg', 'png'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'pdf-to-images', name: 'PDF to Images', category: 'pdf', description: 'Extract PDF pages as images.', icon: '📸', tags: ['convert'], type: 'client', status: 'coming-soon' },
  
  // ================= IMAGE TOOLS =================
  { id: 'image-compressor', name: 'Image Compressor', category: 'image', description: 'Compress images without losing quality.', icon: '🗜️', tags: ['shrink'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'image-resizer', name: 'Image Resizer', category: 'image', description: 'Resize images to exact dimensions.', icon: '📐', tags: ['scale'], type: 'client', status: 'ready' },
  { id: 'image-cropper', name: 'Image Cropper', category: 'image', description: 'Crop images easily.', icon: '✂️', tags: ['trim'], type: 'client', status: 'coming-soon' },
  { id: 'image-format-converter', name: 'Image Converter', category: 'image', description: 'Convert JPG, PNG, WebP.', icon: '🔄', tags: ['jpg', 'png'], type: 'client', status: 'coming-soon' },
  { id: 'favicon-generator', name: 'Favicon Generator', category: 'image', description: 'Generate favicons for websites.', icon: '⭐', tags: ['icon'], type: 'client', status: 'coming-soon' },

  // ================= TEXT TOOLS =================
  { id: 'word-counter', name: 'Word Counter', category: 'text', description: 'Count words, characters and sentences.', icon: '🔢', tags: ['count'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'case-converter', name: 'Case Converter', category: 'text', description: 'Convert text to UPPER, lower, Title.', icon: 'Aa', tags: ['uppercase'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'remove-extra-spaces', name: 'Remove Extra Spaces', category: 'text', description: 'Clean extra whitespace.', icon: '🧹', tags: ['clean'], type: 'client', status: 'coming-soon' },
  { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum', category: 'text', description: 'Generate placeholder text.', icon: '📝', tags: ['dummy'], type: 'client', status: 'coming-soon' },

  // ================= DEVELOPER TOOLS =================
  { id: 'json-formatter', name: 'JSON Formatter', category: 'developer', description: 'Format and beautify JSON.', icon: '{ }', tags: ['json'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'json-validator', name: 'JSON Validator', category: 'developer', description: 'Validate JSON syntax.', icon: '✅', tags: ['json'], type: 'client', status: 'coming-soon' },
  { id: 'base64-encoder', name: 'Base64 Encoder/Decoder', category: 'developer', description: 'Encode or decode Base64.', icon: '🔐', tags: ['encode', 'decode'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'uuid-generator', name: 'UUID Generator', category: 'developer', description: 'Generate random UUIDs.', icon: '🆔', tags: ['guid'], type: 'client', status: 'coming-soon' },

  // ================= CALCULATORS =================
  { id: 'percentage-calculator', name: 'Percentage Calculator', category: 'calculator', description: 'Calculate percentages.', icon: '%', tags: ['percent'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'age-calculator', name: 'Age Calculator', category: 'calculator', description: 'Calculate exact age.', icon: '🎂', tags: ['birthday'], type: 'client', status: 'ready' },
  { id: 'tip-calculator', name: 'Tip Calculator', category: 'calculator', description: 'Calculate tip and split bill.', icon: '💰', tags: ['bill'], type: 'client', status: 'coming-soon' },

  // ================= SECURITY =================
  { id: 'password-generator', name: 'Password Generator', category: 'security', description: 'Generate strong passwords.', icon: '🔑', tags: ['secure'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'qr-code-generator', name: 'QR Code Generator', category: 'security', description: 'Generate QR codes.', icon: '📱', tags: ['qr'], type: 'client', status: 'ready' }, // ✅ Ready
  { id: 'random-number-generator', name: 'Random Number', category: 'security', description: 'Generate random numbers.', icon: '🎲', tags: ['random'], type: 'client', status: 'coming-soon' },
  { id: 'hash-generator', name: 'Hash Generator', category: 'security', description: 'Generate SHA hashes.', icon: '#️⃣', tags: ['sha256'], type: 'client', status: 'coming-soon' },

  // ================= AI TOOLS =================
  { id: 'summarizer', name: 'AI Summarizer', category: 'ai', description: 'Summarize long text.', icon: '📄', tags: ['ai'], type: 'ai', status: 'ready' },
  { id: 'ai-email-writer', name: 'AI Email Writer', category: 'ai', description: 'Draft emails with AI.', icon: '✉️', tags: ['ai'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-rewriter', name: 'AI Rewriter', category: 'ai', description: 'Rewrite paragraphs.', icon: '🔄', tags: ['ai'], type: 'ai', status: 'coming-soon' }
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
