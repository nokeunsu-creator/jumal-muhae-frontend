import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getInBounds } from '../api/api.js'
import { EmptyState } from './Skeleton.jsx'

const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY
const SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KAKAO_KEY}`

function loadKakaoSdk() {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) return resolve(window.kakao)
    const existing = document.querySelector(`script[src*="dapi.kakao.com"]`)
    if (existing) {
      existing.addEventListener('load', () => window.kakao.maps.load(() => resolve(window.kakao)))
      existing.addEventListener('error', reject)
      return
    }
    const script = document.createElement('script')
    script.src = SDK_URL
    script.onload = () => window.kakao.maps.load(() => resolve(window.kakao))
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export default function MapView() {
  const mapRef = useRef(null)
  const containerRef = useRef(null)
  const markersRef = useRef([])
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!KAKAO_KEY) {
      setError('Kakao Map API 키가 설정되지 않았어요.\n설정 후 이용 가능합니다.')
      return
    }

    let cancelled = false
    loadKakaoSdk()
      .then(kakao => {
        if (cancelled || !containerRef.current) return
        const map = new kakao.maps.Map(containerRef.current, {
          center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 시청
          level: 9,
        })
        mapRef.current = map

        const refreshMarkers = () => {
          const bounds = map.getBounds()
          const sw = bounds.getSouthWest()
          const ne = bounds.getNorthEast()
          getInBounds({
            swLat: sw.getLat(),
            swLng: sw.getLng(),
            neLat: ne.getLat(),
            neLng: ne.getLng(),
          }).then(list => {
            markersRef.current.forEach(m => m.setMap(null))
            markersRef.current = (list || []).slice(0, 200).map(p => {
              if (!p.lat || !p.lng) return null
              const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(p.lat, p.lng),
                map,
                title: p.title,
              })
              kakao.maps.event.addListener(marker, 'click', () => navigate(`/perf/${p.id}`))
              return marker
            }).filter(Boolean)
          }).catch(() => {})
        }

        kakao.maps.event.addListener(map, 'idle', refreshMarkers)
        refreshMarkers()
      })
      .catch(() => {
        setError('지도를 불러오지 못했어요.\n잠시 후 다시 시도해주세요')
      })

    return () => { cancelled = true }
  }, [navigate])

  if (error) {
    return (
      <>
        <h2 className="section-title">🗺️ 지도</h2>
        <EmptyState emoji="🗺️" message={error} />
      </>
    )
  }

  return (
    <>
      <h2 className="section-title">🗺️ 지도</h2>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: 'calc(100vh - 220px)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }} />
    </>
  )
}
