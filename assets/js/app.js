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

// 2. NAYA LOGO (Gradient Box ke sath)
window.addEventListener('DOMContentLoaded', function () {
  const logoLinks = document.querySelectorAll('.logo');
  
  const newLogoSVG = `
    <div style="width:36px; height:36px; background: linear-gradient(135deg, #4f46e5, #06b6d4); border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:22px; height:22px;">
        <path d="M6 6H13" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M9.5 6V18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M14 18V6L20 18V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span style="font-weight:800;letter-spacing:-0.03em; margin-left:8px;">ToolNova</span>
  `;

  logoLinks.forEach(function (link) {
    // Pehle saara purana content delete karein
    link.innerHTML = newLogoSVG;
    
    // Hover effect
    link.addEventListener('mouseenter', function() {
        const svg = link.querySelector('svg');
        if(svg) svg.style.transform = 'rotate(10deg) scale(1.05)';
    });
    link.addEventListener('mouseleave', function() {
        const svg = link.querySelector('svg');
        if(svg) svg.style.transform = 'none';
    });
  });
});
