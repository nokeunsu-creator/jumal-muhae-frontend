import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDetail } from '../api/api.js'
import { getFavorites } from '../utils/favorites.js'

function daysUntil(dateStr) {
  if (!dateStr) return null
  const target = new Date(dateStr)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.ceil((target - today) / 86400000)
}

export default function DDayWidget() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const ids = getFavorites()
    if (ids.length === 0) return

    Promise.all(ids.map(id => getDetail(id).catch(() => null)))
      .then(results => {
        const valid = results
          .filter(Boolean)
          .map(p => ({ ...p, dday: daysUntil(p.endDate) }))
          .filter(p => p.dday !== null && p.dday >= 0)
          .sort((a, b) => a.dday - b.dday)
          .slice(0, 5)
        setItems(valid)
      })
  }, [])

  if (items.length === 0) return null

  return (
    <div className="dday-widget">
      <div className="dday-title">⏰ 찜한 공연 마감 임박</div>
      <div className="dday-scroll">
        {items.map(p => (
          <Link key={p.id} to={`/perf/${p.id}`} className="dday-item">
            <div className={`dday-badge ${p.dday <= 3 ? 'urgent' : ''}`}>
              {p.dday === 0 ? 'D-DAY' : `D-${p.dday}`}
            </div>
            <div className="dday-item-title">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
