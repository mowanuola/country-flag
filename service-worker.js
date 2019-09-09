const cacheName= "countryflag";
const staticAssets = [
    "./",
    "./index.html",
    "./main.js",
    "./manifest.json",
    "./styles.css"
]
self.addEventListener("install", async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});
self.addEventListener("activate", e => {
    self.clients.claim();
});