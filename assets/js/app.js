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
    <svg class="logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:36px; transition: transform 0.3s ease;">
      <rect width="48" height="48" rx="12" fill="#0f172a"/>
      <path d="M14 34V14L34 34V14" stroke="url(#gradient_1)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="3" fill="#22d3ee"/>
      <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-45 24 24)" stroke="url(#gradient_2)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
      <defs>
        <linearGradient id="gradient_1" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stop-color="#818cf8"/>
          <stop offset="1" stop-color="#22d3ee"/>
        </linearGradient>
        <linearGradient id="gradient_2" x1="6" y1="24" x2="42" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#22d3ee" stop-opacity="0.8"/>
          <stop offset="1" stop-color="#818cf8" stop-opacity="0.2"/>
        </linearGradient>
      </defs>
    </svg>
    <span style="background:linear-gradient(135deg, var(--color-text), var(--color-text-secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800;letter-spacing:-0.03em;">ToolNova</span>
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
