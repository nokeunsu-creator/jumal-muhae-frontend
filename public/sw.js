// 주말뭐해 Service Worker - 정적 에셋 캐싱 + 오프라인 폴백
const CACHE = 'jumal-muhae-v1'
const STATIC_ASSETS = ['/', '/manifest.json', '/icon.svg']

self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC_ASSETS)))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url)

  // API 요청은 네트워크 우선 (캐싱 안 함)
  if (url.pathname.startsWith('/api/')) return

  // 정적 에셋: 네트워크 우선, 실패 시 캐시
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (e.request.method === 'GET' && res.status === 200) {
          const clone = res.clone()
          caches.open(CACHE).then(c => c.put(e.request, clone))
        }
        return res
      })
      .catch(() => caches.match(e.request))
  )
})
