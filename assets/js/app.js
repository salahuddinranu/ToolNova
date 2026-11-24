/* ==========================================
   ToolNova Main Application Logic
   ========================================== */

// 1. Core App Logic (Menu, Search, Active Links)
(function () {
  window.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        const open = mobileMenu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Search redirect to all-tools page
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

    // Mark active nav link
    const path = window.location.pathname.replace(/\.html$/, '');
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      const href = a.getAttribute('href').replace(/\.html$/, '');
      if (href === path || (href === '/' && path === '/index')) {
        a.classList.add('active');
      }
    });
  });
})();


// 2. Automatic Custom Logo Replacer (The "Nova N" Design)
window.addEventListener('DOMContentLoaded', function () {
  const logoLinks = document.querySelectorAll('.logo');
  
  // Yeh ToolNova ka naya, professional aur unique logo hai
  const newLogoSVG = `
    <svg class="logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:36px;">
      <rect width="48" height="48" rx="10" fill="url(#tnGrad)"/>
      <path d="M12 16H36" stroke="white" stroke-width="4" stroke-linecap="round"/>
      <path d="M24 16V34" stroke="white" stroke-width="4" stroke-linecap="round"/>
      <path d="M12 34L24 22L36 34" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="tnGrad" x1="0" y1="0" x2="48" y2="48">
          <stop stop-color="#6366f1"/>
          <stop offset="1" stop-color="#06b6d4"/>
        </linearGradient>
      </defs>
    </svg>
    <span style="font-weight:800;letter-spacing:-0.03em;">ToolNova</span>
  `;

  logoLinks.forEach(function (link) {
    // Agar naya logo pehle se nahi laga hua, to lagayein
    if (!link.querySelector('.logo-icon')) {
        const oldIcon = link.querySelector('.logo-mark');
        if (oldIcon) oldIcon.style.display = 'none'; // Purana 'T' chhupa dein
        
        // Naya logo text ke pehle add karein
        link.insertAdjacentHTML('afterbegin', newLogoSVG);
    }
    
    // Hover effect (rotate on mouse enter)
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
