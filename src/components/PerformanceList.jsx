import { useEffect, useState } from 'react'
import { getList } from '../api/api.js'
import PerformanceCard from './PerformanceCard.jsx'

export default function PerformanceList() {
  const [data, setData] = useState(null)
  const [category, setCategory] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    setData(null)
    getList({ category, page: 0, size: 30 })
      .then(setData)
      .catch((e) => setError(e.message))
  }, [category])

  return (
    <>
      <h2 className="section-title">📋 전체 목록</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        {['', '연극', '뮤지컬', '음악', '전시', '축제'].map(c => (
          <button key={c || 'all'}
            onClick={() => setCategory(c)}
            style={{
              padding: '6px 12px',
              borderRadius: 999,
              background: category === c ? 'var(--primary)' : 'var(--card)',
              color: category === c ? '#fff' : 'var(--text)',
              border: '1px solid var(--border)',
              fontSize: 13,
            }}>
            {c || '전체'}
          </button>
        ))}
      </div>

      {error && <div className="empty">⚠️ {error}</div>}
      {data === null && !error ? (
        <div className="loading">불러오는 중...</div>
      ) : data && data.content.length === 0 ? (
        <div className="empty">조건에 맞는 공연/전시가 없어요.</div>
      ) : (
        data && data.content.map(p => <PerformanceCard key={p.id} performance={p} />)
      )}
    </>
  )
}
