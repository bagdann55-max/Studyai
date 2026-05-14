self.addEventListener("install", e => {
e.waitUntil(
caches.open("pro-cache").then(cache => {
return cache.addAll([
"index.html",
"style.css",
"app.js",
"engine.js",
"storage.js"
]);
})
);
});

self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request).then(r => r || fetch(e.request))
);
});