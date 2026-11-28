// ToolNova Auto Link Replacer
document.addEventListener('DOMContentLoaded', function() {
  const OLD_URL = "https://toolnova.axislabs.workers.dev";
  const NEW_URL = "https://toolnova-app.pages.dev";

  // 1. Page ke saare <a> links check karein
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href && link.href.includes(OLD_URL)) {
      link.href = link.href.replace(OLD_URL, NEW_URL);
    }
  });

  // 2. Canonical Tag Update (SEO)
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && canonical.href.includes(OLD_URL)) {
    canonical.href = canonical.href.replace(OLD_URL, NEW_URL);
  }

  // 3. Open Graph URL Update (Social Media)
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && ogUrl.content.includes(OLD_URL)) {
    ogUrl.content = ogUrl.content.replace(OLD_URL, NEW_URL);
  }
});
