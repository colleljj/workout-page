<script>
        // This is the service worker script. In a real-world scenario, this would be in a separate file (e.g., sw.js).
        // For this self-contained example, it's included here.
        const CACHE_NAME = 'fitness-blueprint-cache-v1';
        const urlsToCache = [
            '/',
            'https://cdn.tailwindcss.com',
            'https://cdn.jsdelivr.net/npm/chart.js',
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
            'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2'
        ];

        self.addEventListener('install', event => {
            event.waitUntil(
                caches.open(CACHE_NAME)
                .then(cache => {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
            );
        });

        self.addEventListener('fetch', event => {
            event.respondWith(
                caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response; // Serve from cache
                    }
                    return fetch(event.request); // Fetch from network
                })
            );
        });
    </script>
