// service-worker.js - V12C Zaawansowana optymalizacja
const CACHE_NAME='wesele-v12c-1',URLS_TO_CACHE=['/','index.html','/wedding_rsvp_v12c.html'];

self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(URLS_TO_CACHE)))});

self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>e!==CACHE_NAME&&caches.delete(e)))))});

self.addEventListener('fetch',e=>{'GET'===e.request.method&&e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request).then(t=>caches.open(CACHE_NAME).then(n=>(n.put(e.request,t.clone()),t)))).catch(()=>new Response('Offline')))});
