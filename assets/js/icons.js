/* ToolNova Real SVG Icon Replacer */
window.addEventListener('DOMContentLoaded', function () {
  
  // Professional SVG Icons Library
  const svgIcons = {
    'pdf': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    
    'image': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
    
    'ai': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`,
    
    'text': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`,
    
    'developer': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    
    'calculator': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>`,
    
    'security': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    
    'seo': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  };

  // Map emojis to new SVG categories
  const emojiToSvg = {
    '📄': svgIcons.pdf, '🔗': svgIcons.pdf, '✂️': svgIcons.pdf, '🗜️': svgIcons.pdf, '🔄': svgIcons.pdf, '🖼️': svgIcons.image, '📸': svgIcons.image, '📑': svgIcons.pdf, '🗑️': svgIcons.pdf,
    '📐': svgIcons.image, '⭐': svgIcons.image, '🎨': svgIcons.image, '🔤': svgIcons.text,
    '🔢': svgIcons.text, 'Aa': svgIcons.text, '🧹': svgIcons.text, '📝': svgIcons.text, '🔁': svgIcons.text, '⚖️': svgIcons.text,
    '{ }': svgIcons.developer, '✅': svgIcons.developer, '🔐': svgIcons.developer, '🔓': svgIcons.developer, '🆔': svgIcons.developer, '🌐': svgIcons.developer,
    '%': svgIcons.calculator, '🎂': svgIcons.calculator, '💰': svgIcons.calculator, '🏷️': svgIcons.calculator, '📏': svgIcons.calculator, '🏦': svgIcons.calculator,
    '🔑': svgIcons.security, '🎲': svgIcons.security, '#️⃣': svgIcons.security, '🪙': svgIcons.security, '📱': svgIcons.security,
    '📄 (AI)': svgIcons.ai, '✉️': svgIcons.ai, '💡': svgIcons.ai, '💻': svgIcons.ai
  };

  // Apply to all tool icons and category icons
  const allIcons = document.querySelectorAll('.tool-icon, .category-icon');
  
  allIcons.forEach(function(iconDiv) {
    const currentText = iconDiv.textContent.trim();
    
    // Check if we have an SVG for this emoji
    if (emojiToSvg[currentText]) {
      iconDiv.innerHTML = emojiToSvg[currentText];
      // Style adjustments for SVG
      iconDiv.style.color = 'var(--color-primary)';
      iconDiv.style.display = 'grid';
      iconDiv.style.placeItems = 'center';
      iconDiv.style.background = 'var(--color-primary-light)';
    } else {
      // Fallback: If it's a text/emoji not in our list, replace based on category class if possible
      // Or just keep it clean
      iconDiv.innerHTML = svgIcons.developer; // Default fallback icon
      iconDiv.style.color = 'var(--color-primary)';
      iconDiv.style.display = 'grid';
      iconDiv.style.placeItems = 'center';
      iconDiv.style.background = 'var(--color-primary-light)';
    }
  });
});
