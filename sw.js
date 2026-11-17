const SHELL='ultrahd-shell-v3',ENGINE='ultrahd-engine';
self.addEventListener('install',e=>{self.skipWaiting();
  e.waitUntil(caches.open(SHELL).then(c=>Promise.all(['./','index.html','manifest.json'].map(u=>c.add(u).catch(()=>{})))))});
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==ENGINE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  // file mesin AI (wasm) disajikan dari Cache Storage agar offline
  if(u.pathname.includes('/_engine/')){
    e.respondWith(caches.open(ENGINE).then(c=>c.match(u.href)).then(m=>m||new Response('engine belum diunduh',{status:404})));return}
  // kerangka aplikasi: jaringan dulu, cadangan cache saat offline
  e.respondWith(fetch(r).then(n=>{if(n.ok){const cp=n.clone();caches.open(SHELL).then(c=>c.put(r,cp))}return n})
    .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('index.html')||caches.match('./'))));
});
