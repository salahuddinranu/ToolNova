/* ==========================================
   ToolNova Main Application Logic
   ========================================== */

// 1. Core App Logic (Menu, Search, Active Links)
(function () {
  window.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        const open = mobileMenu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    const searchInput = document.getElementById('global-search');
    const searchBox = document.getElementById('global-search-form');
    if (searchBox && searchInput) {
      searchBox.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = searchInput.value.trim();
        if (q) {
          window.location.href = '/all-tools.html?q=' + encodeURIComponent(q);
        } else {
          window.location.href = '/all-tools.html';
        }
      });
    }

    const path = window.location.pathname.replace(/\.html$/, '');
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      const href = a.getAttribute('href').replace(/\.html$/, '');
      if (href === path || (href === '/' && path === '/index')) {
        a.classList.add('active');
      }
    });
  });
})();

// 3. Universal Tool Page Layout (Transitions & Related Tools)
window.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  
  // Agar yeh tool page hai (e.g., /tools/image/image-cropper.html)
  if (path.includes('/tools/')) {
    const parts = path.split('/');
    const toolId = parts[parts.length - 1].replace('.html', '');
    const categoryId = parts[parts.length - 2];

    // Registry se tool aur category ka data nikaalein
    if (window.ToolNova) {
      const tool = window.ToolNova.getToolById(toolId);
      const category = window.ToolNova.getCategoryById(categoryId);
      
      if (tool && category) {
        // 1. Breadcrumb Add Karein (Top of Main)
        const main = document.querySelector('main');
        if (main) {
          const breadcrumb = document.createElement('nav');
          breadcrumb.style.cssText = 'font-size:0.85rem; color:var(--color-text-muted); margin-bottom:1.5rem; display:flex; gap:0.5rem; align-items:center;';
          breadcrumb.innerHTML = `
            <a href="/" style="color:inherit;">Home</a> <span>›</span>
            <a href="/all-tools.html?category=${categoryId}" style="color:inherit;">${category.name}</a> <span>›</span>
            <span style="color:var(--color-primary); font-weight:600;">${tool.name}</span>
          `;
          main.insertBefore(breadcrumb, main.firstChild);
        }

        // 2. Related Tools Section (Bottom of Main)
        const relatedTools = window.ToolNova.getToolsByCategory(categoryId).filter(t => t.id !== toolId && t.status === 'ready').slice(0, 4);
        
        if (relatedTools.length > 0) {
          const relatedSection = document.createElement('div');
          relatedSection.style.cssText = 'margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border);';
          relatedSection.innerHTML = `<h2 style="font-size:1.5rem; margin-bottom:1.5rem;">Related Tools</h2>`;
          
          const grid = document.createElement('div');
          grid.className = 'tool-grid';
          grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
          
          relatedTools.forEach(t => {
            const card = document.createElement('a');
            card.className = 'tool-card';
            card.href = '/tools/' + t.category + '/' + t.id + '.html';
            card.innerHTML = `
              <div class="tool-icon">${t.icon}</div>
              <h3>${t.name}</h3>
              <p>${t.description}</p>
            `;
            grid.appendChild(card);
          });
          
          relatedSection.appendChild(grid);
          document.querySelector('main').appendChild(relatedSection);
        }
      }
    }
  }
});
