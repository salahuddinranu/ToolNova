/* ToolNova Auto Link Replacer */
document.addEventListener('DOMContentLoaded', function() {
  const NEW_URL = "https://toolnova.axislabs.workers.dev/";
  const OLD_URL = "https://toolnova.salahuddinranu.workers.dev/";

  // 1. Canonical Tag Update (Google ke liye)
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && canonical.href.includes('salahuddinranu')) {
    canonical.href = canonical.href.replace(OLD_URL, NEW_URL);
  }

  // 2. Open Graph URL Update (Social Media ke liye)
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && ogUrl.content.includes('salahuddinranu')) {
    ogUrl.content = ogUrl.content.replace(OLD_URL, NEW_URL);
  }

  // 3. Schema Markup URL Update
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  schemas.forEach(script => {
    if (script.innerHTML.includes('salahuddinranu')) {
      script.innerHTML = script.innerHTML.replaceAll(OLD_URL, NEW_URL);
    }
  });
});
