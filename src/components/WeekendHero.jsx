import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getList } from '../api/api.js'
import { getWeekendRange } from '../utils/collections.js'

export default function WeekendHero() {
  const [data, setData] = useState(null)
  const range = getWeekendRange()

  useEffect(() => {
    getList({ page: 0, size: 30 })
      .then(res => {
        const all = res.content || []
        const friDate = new Date(range.friday)
        const sunDate = new Date(range.sunday)
        const filtered = all.filter(p => {
          if (!p.startDate || !p.endDate) return false
          const s = new Date(p.startDate)
          const e = new Date(p.endDate)
          return s <= sunDate && e >= friDate
        })
        setData(filtered.slice(0, 6))
      })
      .catch(() => setData([]))
  }, [])

  const dateLabel = `${range.friday.slice(5).replace('-', '월 ')}일 ~ ${range.sunday.slice(5).replace('-', '월 ')}일`

  return (
    <div className="hero-card">
      <div className="hero-label">🌆 이번 주말에</div>
      <div className="hero-date">{dateLabel}</div>
      {data === null ? (
        <div className="hero-loading">주말 공연을 찾는 중...</div>
      ) : data.length === 0 ? (
        <div className="hero-empty">이번 주말 공연 정보를 준비 중이에요</div>
      ) : (
        <div className="hero-scroll">
          {data.map(p => (
            <Link key={p.id} to={`/perf/${p.id}`} className="hero-item">
              {p.thumbnailUrl ? (
                <img src={p.thumbnailUrl} alt=""
                  onError={(e) => { e.currentTarget.style.display = 'none' }} />
              ) : (
                <div className="hero-thumb-fallback">🎫</div>
              )}
              <div className="hero-item-title">{p.title}</div>
              {p.venueName && <div className="hero-item-venue">{p.venueName}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
