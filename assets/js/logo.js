/* ToolNova Automatic Logo Replacer */
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
    // Check karein ke naya logo pehle se mojood to nahi
    if (!link.querySelector('.logo-icon')) {
        // Purana 'T' hata kar naya SVG daalein
        const oldIcon = link.querySelector('.logo-mark');
        if (oldIcon) oldIcon.remove();
        
        // Naya logo text ke pehle add karein
        link.insertAdjacentHTML('afterbegin', newLogoSVG);
    }
  });
});
