const CACHE_NAME = "comandas-pwa-v4";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/CONTAGEM-DE-COMANDAS-MERCATTO/",
        "/CONTAGEM-DE-COMANDAS-MERCATTO/index.html",
        "/CONTAGEM-DE-COMANDAS-MERCATTO/manifest.json",
        "/CONTAGEM-DE-COMANDAS-MERCATTO/icons/icon-192.png",
        "/CONTAGEM-DE-COMANDAS-MERCATTO/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
