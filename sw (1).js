const C='ultrahd-shell-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(['./','index.html','manifest.json'].map(u=>c.add(u).catch(()=>{})))))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(n=>{const cp=n.clone();if(n.ok)caches.open(C).then(c=>c.put(e.request,cp));return n}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
