/* ToolNova App Logic */
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
// ===== Automatic Logo Replacer =====
window.addEventListener('DOMContentLoaded', function () {
  const logoLinks = document.querySelectorAll('.logo');
  
  const newLogoSVG = `
    <svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:36px;">
      <rect width="100" height="100" rx="24" fill="url(#paint0_linear)"/>
      <path d="M50 20L58 42L80 50L58 58L50 80L42 58L20 50L42 42L50 20Z" fill="white"/>
      <circle cx="50" cy="50" r="6" fill="white" fill-opacity="0.5"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6366f1"/>
          <stop offset="1" stop-color="#06b6d4"/>
        </linearGradient>
      </defs>
    </svg>
  `;

  logoLinks.forEach(function (link) {
    if (!link.querySelector('.logo-icon')) {
        const oldIcon = link.querySelector('.logo-mark');
        if (oldIcon) oldIcon.style.display = 'none'; // Purana 'T' chhupa dein
        
        // Naya logo text ke pehle add karein
        link.insertAdjacentHTML('afterbegin', newLogoSVG);
    }
  });
});
