const CACHE_NAME = 'toolnova-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/all-tools.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/tools-registry.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
