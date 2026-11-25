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
// ================= LIVE SEARCH DROPDOWN =================
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('global-search');
  const searchBox = document.getElementById('global-search-form');
  
  if (!searchInput || !searchBox) return;

  // Create dropdown element
  const dropdown = document.createElement('div');
  dropdown.style.cssText = 'position:absolute; top:100%; left:0; right:0; background:var(--color-card); border:1px solid var(--color-border); border-radius:var(--radius-md); box-shadow:var(--shadow-lg); margin-top:0.5rem; max-height:300px; overflow-y:auto; z-index:100; display:none;';
  searchBox.style.position = 'relative'; // Ensure relative positioning
  searchBox.appendChild(dropdown);

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (!query || !window.ToolNova) {
      dropdown.style.display = 'none';
      return;
    }

    // Filter tools
    const results = window.ToolNova.TOOLS.filter(t => 
      t.name.toLowerCase().includes(query) || 
      t.tags.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 5); // Max 5 results

    if (results.length === 0) {
      dropdown.innerHTML = '<div style="padding:1rem; color:var(--color-text-muted); text-align:center;">No tools found</div>';
    } else {
      dropdown.innerHTML = results.map(t => `
        <a href="/tools/${t.category}/${t.id}.html" style="display:flex; align-items:center; gap:1rem; padding:0.8rem 1rem; border-bottom:1px solid var(--color-border); color:var(--color-text); text-decoration:none;">
          <span style="font-size:1.2rem;">${t.icon}</span>
          <div>
            <div style="font-weight:600; font-size:0.95rem;">${t.name}</div>
            <div style="font-size:0.8rem; color:var(--color-text-muted);">${t.category.toUpperCase()}</div>
          </div>
        </a>
      `).join('');
    }
    dropdown.style.display = 'block';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchBox.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
});
// ================= TRACK RECENT TOOLS =================
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  if (path.includes('/tools/')) {
    const parts = path.split('/');
    const toolId = parts[parts.length - 1].replace('.html', '');
    
    if (toolId) {
      let recent = JSON.parse(localStorage.getItem('toolnova_recent') || '[]');
      // Remove if already exists
      recent = recent.filter(id => id !== toolId);
      // Add to front
      recent.unshift(toolId);
      // Keep only top 4
      recent = recent.slice(0, 4);
      
      localStorage.setItem('toolnova_recent', JSON.stringify(recent));
    }
  }
});
// ================= DYNAMIC SEO FOR TOOL PAGES =================
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  
  if (path.includes('/tools/') && window.ToolNova) {
    const parts = path.split('/');
    const toolId = parts[parts.length - 1].replace('.html', '');
    const categoryId = parts[parts.length - 2];
    const tool = window.ToolNova.getToolById(toolId);
    const category = window.ToolNova.getCategoryById(categoryId);

    if (tool && category) {
      // 1. Set Page Title
      document.title = `${tool.name} — Free Online Tool | ToolNova`;
      
      // 2. Set Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = `${tool.description} Free, fast, and 100% private. Try the best ${tool.name} online at ToolNova.`;
      
      // 3. Set Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = window.location.origin + path;
    }
  }
});
// ================= ADSENSE PLACEHOLDER ON TOOL PAGES =================
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  
  // Agar yeh tool page hai
  if (path.includes('/tools/')) {
    const main = document.querySelector('main');
    if (main) {
      const adContainer = document.createElement('div');
      adContainer.style.cssText = 'margin: 3rem auto; max-width: 800px; min-height: 90px; background: var(--color-bg-tertiary); border: 1px dashed var(--color-border); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-text-muted); font-size: 0.8rem;';
      adContainer.textContent = 'Advertisement Space (Google AdSense)';
      
      // Main ke aakhir mein add karein (Related tools ke baad ya pehle)
      main.appendChild(adContainer);
    }
  }
});
// ================= FLOATING HELP BUTTON =================
document.addEventListener('DOMContentLoaded', function() {
  // Check if button already exists
  if (document.getElementById('help-btn')) return;

  const helpBtn = document.createElement('button');
  helpBtn.id = 'help-btn';
  helpBtn.innerHTML = '❓';
  helpBtn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--color-primary);
    color: white;
    font-size: 1.5rem;
    border: none;
    box-shadow: var(--shadow-lg);
    cursor: pointer;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, box-shadow 0.2s;
  `;
  
  helpBtn.onmouseover = () => { helpBtn.style.transform = 'scale(1.1)'; helpBtn.style.boxShadow = 'var(--shadow-glow)'; };
  helpBtn.onmouseout = () => { helpBtn.style.transform = 'scale(1)'; helpBtn.style.boxShadow = 'var(--shadow-lg)'; };
  
  helpBtn.onclick = () => {
    alert("How to use ToolNova:\n\n1. Browse tools by category or use the search bar.\n2. Upload or paste your file/text.\n3. Click 'Process' or 'Download'.\n4. Most tools run entirely in your browser — your files never leave your device!");
  };

  document.body.appendChild(helpBtn);
});
