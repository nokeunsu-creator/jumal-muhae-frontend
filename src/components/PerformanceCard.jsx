import { Link } from 'react-router-dom'

export default function PerformanceCard({ performance: p }) {
  const period = [p.startDate, p.endDate].filter(Boolean).join(' ~ ')
  return (
    <Link to={`/perf/${p.id}`} className="card perf-card">
      {p.thumbnailUrl ? (
        <img className="thumb" src={p.thumbnailUrl} alt={p.title}
             onError={(e) => { e.currentTarget.style.display = 'none' }} />
      ) : (
        <div className="thumb" />
      )}
      <div className="info">
        <div className="title">{p.title}</div>
        {p.venueName && <div className="meta">📍 {p.venueName}</div>}
        {period && <div className="meta">🗓 {period}</div>}
        {p.category && <span className="badge">{p.category}</span>}
      </div>
    </Link>
  )
}
