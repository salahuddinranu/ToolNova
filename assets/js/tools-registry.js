/* ToolNova Tool Registry
 * Each tool entry:
 * - id: unique slug (also route)
 * - name: display name
 * - category: category id
 * - description: short description
 * - icon: emoji or icon name
 * - route: URL path
 * - tags: search synonyms
 * - type: 'client' | 'server' | 'ai'
 * - status: 'ready' | 'coming-soon'
 */

const CATEGORIES = [
  { id: 'pdf', name: 'PDF Tools', icon: '📄', color: '#ef4444' },
  { id: 'image', name: 'Image Tools', icon: '🖼️', color: '#8b5cf6' },
  { id: 'ai', name: 'AI & Text Tools', icon: '✨', color: '#06b6d4' },
  { id: 'text', name: 'Text Tools', icon: '📝', color: '#10b981' },
  { id: 'developer', name: 'Developer Tools', icon: '💻', color: '#f59e0b' },
  { id: 'calculator', name: 'Calculators & Converters', icon: '🧮', color: '#3b82f6' },
  { id: 'file', name: 'File & Data Tools', icon: '📁', color: '#ec4899' },
  { id: 'security', name: 'Security & Generators', icon: '🔐', color: '#6366f1' },
  { id: 'seo', name: 'Web & SEO Tools', icon: '🌐', color: '#14b8a6' },
  { id: 'design', name: 'Design & Productivity', icon: '🎨', color: '#f97316' }
];

const TOOLS = [
  // PDF
  { id: 'merge-pdf', name: 'Merge PDF', category: 'pdf', description: 'Combine multiple PDF files into one document.', icon: '🔗', tags: ['combine', 'join', 'pdf'], type: 'client', status: 'coming-soon' },
  { id: 'split-pdf', name: 'Split PDF', category: 'pdf', description: 'Split a PDF into multiple files by page ranges.', icon: '✂️', tags: ['divide', 'pdf'], type: 'client', status: 'coming-soon' },
  { id: 'compress-pdf', name: 'Compress PDF', category: 'pdf', description: 'Reduce PDF file size while preserving quality.', icon: '🗜️', tags: ['shrink', 'size', 'pdf'], type: 'client', status: 'coming-soon' },
  { id: 'images-to-pdf', name: 'Images to PDF', category: 'pdf', description: 'Convert images to a single PDF document.', icon: '🖼️', tags: ['jpg', 'png', 'pdf'], type: 'client', status: 'coming-soon' },
  { id: 'pdf-to-images', name: 'PDF to Images', category: 'pdf', description: 'Extract pages from PDF as images.', icon: '📸', tags: ['convert', 'png', 'jpg'], type: 'client', status: 'coming-soon' },

  // Image
  { id: 'image-compressor', name: 'Image Compressor', category: 'image', description: 'Compress images without losing visible quality.', icon: '🗜️', tags: ['compress', 'shrink', 'optimize'], type: 'client', status: 'coming-soon' },
  { id: 'image-resizer', name: 'Image Resizer', category: 'image', description: 'Resize images to exact dimensions.', icon: '📐', tags: ['resize', 'dimensions', 'scale'], type: 'client', status: 'coming-soon' },
  { id: 'image-cropper', name: 'Image Cropper', category: 'image', description: 'Crop images to any area you choose.', icon: '✂️', tags: ['crop', 'trim'], type: 'client', status: 'coming-soon' },
  { id: 'image-format-converter', name: 'Image Format Converter', category: 'image', description: 'Convert images between JPG, PNG, WebP, AVIF.', icon: '🔄', tags: ['convert', 'format', 'jpg', 'png', 'webp'], type: 'client', status: 'coming-soon' },
  { id: 'favicon-generator', name: 'Favicon Generator', category: 'image', description: 'Generate favicons in all standard sizes.', icon: '⭐', tags: ['favicon', 'icon'], type: 'client', status: 'coming-soon' },

  // Text
  { id: 'word-counter', name: 'Word Counter', category: 'text', description: 'Count words, characters, sentences and paragraphs.', icon: '🔢', tags: ['count', 'words', 'characters'], type: 'client', status: 'ready' },
  { id: 'case-converter', name: 'Case Converter', category: 'text', description: 'Convert text between UPPER, lower, Title and Sentence case.', icon: 'Aa', tags: ['uppercase', 'lowercase', 'title'], type: 'client', status: 'ready' },
  { id: 'remove-extra-spaces', name: 'Remove Extra Spaces', category: 'text', description: 'Clean up extra whitespace from text.', icon: '🧹', tags: ['trim', 'clean', 'whitespace'], type: 'client', status: 'ready' },
  { id: 'text-diff-checker', name: 'Text Diff Checker', category: 'text', description: 'Compare two texts and highlight differences.', icon: '⚖️', tags: ['diff', 'compare'], type: 'client', status: 'coming-soon' },
  { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator', category: 'text', description: 'Generate placeholder text for designs.', icon: '📝', tags: ['lorem', 'placeholder'], type: 'client', status: 'ready' },

  // Developer
  { id: 'json-formatter', name: 'JSON Formatter', category: 'developer', description: 'Format and validate JSON with proper indentation.', icon: '{ }', tags: ['json', 'format', 'validate'], type: 'client', status: 'ready' },
  { id: 'json-validator', name: 'JSON Validator', category: 'developer', description: 'Validate JSON syntax and structure.', icon: '✅', tags: ['json', 'validate'], type: 'client', status: 'ready' },
  { id: 'base64-encoder', name: 'Base64 Encoder', category: 'developer', description: 'Encode text to Base64.', icon: '🔐', tags: ['base64', 'encode'], type: 'client', status: 'ready' },
  { id: 'base64-decoder', name: 'Base64 Decoder', category: 'developer', description: 'Decode Base64 to text.', icon: '🔓', tags: ['base64', 'decode'], type: 'client', status: 'ready' },
  { id: 'uuid-generator', name: 'UUID Generator', category: 'developer', description: 'Generate random UUID v4 values.', icon: '🆔', tags: ['uuid', 'guid', 'id'], type: 'client', status: 'ready' },

  // Calculator
  { id: 'percentage-calculator', name: 'Percentage Calculator', category: 'calculator', description: 'Calculate percentages easily.', icon: '%', tags: ['percent', 'percentage'], type: 'client', status: 'ready' },
  { id: 'age-calculator', name: 'Age Calculator', category: 'calculator', description: 'Calculate exact age from birth date.', icon: '🎂', tags: ['age', 'birthday'], type: 'client', status: 'ready' },
  { id: 'unit-converter', name: 'Unit Converter', category: 'calculator', description: 'Convert between units of length, weight, temperature.', icon: '📏', tags: ['unit', 'convert', 'length', 'weight'], type: 'client', status: 'coming-soon' },
  { id: 'tip-calculator', name: 'Tip Calculator', category: 'calculator', description: 'Calculate tip and split the bill.', icon: '💰', tags: ['tip', 'bill'], type: 'client', status: 'ready' },
  { id: 'discount-calculator', name: 'Discount Calculator', category: 'calculator', description: 'Calculate discounted price and savings.', icon: '🏷️', tags: ['discount', 'sale'], type: 'client', status: 'ready' },

  // Security
  { id: 'password-generator', name: 'Password Generator', category: 'security', description: 'Generate strong, random passwords.', icon: '🔑', tags: ['password', 'random', 'secure'], type: 'client', status: 'ready' },
  { id: 'random-number-generator', name: 'Random Number Generator', category: 'security', description: 'Generate random numbers within a range.', icon: '🎲', tags: ['random', 'number'], type: 'client', status: 'ready' },
  { id: 'qr-code-generator', name: 'QR Code Generator', category: 'security', description: 'Generate QR codes for URLs, text and more.', icon: '📱', tags: ['qr', 'code'], type: 'client', status: 'coming-soon' },
  { id: 'hash-generator', name: 'Hash Generator', category: 'security', description: 'Generate SHA-1, SHA-256, SHA-512 hashes.', icon: '#️⃣', tags: ['hash', 'sha256'], type: 'client', status: 'ready' },
  { id: 'coin-flip', name: 'Coin Flip Simulator', category: 'security', description: 'Flip a virtual coin.', icon: '🪙', tags: ['coin', 'flip', 'random'], type: 'client', status: 'ready' },

  // AI (placeholders, will use Supabase)
  { id: 'ai-summarizer', name: 'AI Text Summarizer', category: 'ai', description: 'Summarize long text into key points using AI.', icon: '📄', tags: ['ai', 'summary', 'summarize'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-email-writer', name: 'AI Email Writer', category: 'ai', description: 'Draft professional emails with AI.', icon: '✉️', tags: ['ai', 'email', 'write'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-rewriter', name: 'AI Paragraph Rewriter', category: 'ai', description: 'Rewrite paragraphs in different tones.', icon: '🔄', tags: ['ai', 'rewrite', 'paraphrase'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-title-generator', name: 'AI Title Generator', category: 'ai', description: 'Generate catchy titles with AI.', icon: '💡', tags: ['ai', 'title', 'headline'], type: 'ai', status: 'coming-soon' },
  { id: 'ai-caption-generator', name: 'AI Social Caption Generator', category: 'ai', description: 'Create social media captions with AI.', icon: '📸', tags: ['ai', 'caption', 'social'], type: 'ai', status: 'coming-soon' }
];

// Utility: get tools by category
function getToolsByCategory(categoryId) {
  return TOOLS.filter(t => t.category === categoryId);
}

// Utility: get tool by id
function getToolById(id) {
  return TOOLS.find(t => t.id === id);
}

// Utility: get category by id
function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}

// Utility: search tools
function searchTools(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return TOOLS.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.id.includes(q) ||
    t.tags.some(tag => tag.toLowerCase().includes(q)) ||
    t.category.includes(q)
  );
}

// Utility: count tools per category
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
  searchTools,
  getCategoryCounts
};
