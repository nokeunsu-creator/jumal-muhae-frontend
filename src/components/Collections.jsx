import { Link } from 'react-router-dom'
import { COLLECTIONS } from '../utils/collections.js'

export default function Collections() {
  return (
    <>
      <h2 className="section-title">✨ 주제별 컬렉션</h2>
      <div className="collection-grid">
        {COLLECTIONS.map(c => (
          <Link key={c.key} to={`/collections/${c.key}`} className="collection-card"
                style={{ background: c.color }}>
            <div className="collection-icon">{c.icon}</div>
            <div className="collection-title">{c.title}</div>
            <div className="collection-desc">{c.desc}</div>
          </Link>
        ))}
      </div>
    </>
  )
}
