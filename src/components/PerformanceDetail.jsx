import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDetail } from '../api/api.js'
import { isFavorite, toggleFavorite } from '../utils/favorites.js'
import ShareButton from './ShareButton.jsx'

export default function PerformanceDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [error, setError] = useState(null)
  const [fav, setFav] = useState(false)

  useEffect(() => {
    setP(null)
    setFav(isFavorite(id))
    getDetail(id).then(setP).catch(e => setError(e.message))
  }, [id])

  const handleToggleFav = () => {
    toggleFavorite(id)
    setFav(v => !v)
  }

  if (error) return <div className="empty">⚠️ {error}</div>
  if (!p) return <div className="loading">불러오는 중...</div>

  const period = [p.startDate, p.endDate].filter(Boolean).join(' ~ ')

  return (
    <>
      <Link to="/" style={{ color: 'var(--muted)', fontSize: 13 }}>← 뒤로</Link>
      {p.thumbnailUrl && (
        <img src={p.thumbnailUrl} alt={p.title}
          style={{ width: '100%', borderRadius: 'var(--radius)', margin: '12px 0' }}
          onError={(e) => { e.currentTarget.style.display = 'none' }} />
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
        <h1 style={{ fontSize: 20, flex: 1, minWidth: 0 }}>{p.title}</h1>
        <button
          onClick={handleToggleFav}
          aria-label={fav ? '찜 해제' : '찜하기'}
          style={{
            fontSize: 28,
            background: 'none',
            padding: 0,
            color: fav ? 'var(--accent)' : 'var(--muted)',
            flexShrink: 0,
          }}>
          {fav ? '★' : '☆'}
        </button>
        <ShareButton
          title={p.title}
          text={`[주말뭐해] ${p.title} - ${p.venueName || ''}`}
          size={26}
          style={{ flexShrink: 0 }} />
      </div>
      {p.category && <span className="badge">{p.category}</span>}

      <div className="card" style={{ marginTop: 16 }}>
        {period && <div>🗓 {period}</div>}
        {p.venueName && <div style={{ marginTop: 6 }}>📍 {p.venueName}</div>}
        {p.address && <div style={{ marginTop: 2, color: 'var(--muted)', fontSize: 13 }}>{p.address}</div>}
        {p.priceInfo && <div style={{ marginTop: 6 }}>💰 {p.priceInfo}</div>}
      </div>

      {p.description && (
        <div className="card" style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.6 }}>
          {p.description}
        </div>
      )}

      {p.detailUrl && (
        <a href={p.detailUrl} target="_blank" rel="noreferrer"
           style={{
             display: 'block',
             textAlign: 'center',
             background: 'var(--primary)',
             color: '#fff',
             padding: 14,
             borderRadius: 'var(--radius)',
             marginTop: 12,
             fontWeight: 700,
           }}>
          🔗 공식 페이지 보기
        </a>
      )}
    </>
  )
}
