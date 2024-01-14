self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mui-keep-v3').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '../public/manifest.json',
                '../src/assets/logo.png',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
