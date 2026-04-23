import { useEffect, useState } from 'react'
import { getToday, getEndingSoon } from '../api/api.js'
import PerformanceCard from './PerformanceCard.jsx'

export default function Home() {
  const [today, setToday] = useState(null)
  const [ending, setEnding] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    Promise.all([getToday(), getEndingSoon(3)])
      .then(([t, e]) => { setToday(t); setEnding(e); })
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <div className="empty">⚠️ {error}</div>

  return (
    <>
      <h2 className="section-title">🆕 오늘 시작하는 공연·전시</h2>
      {today === null ? (
        <div className="loading">불러오는 중...</div>
      ) : today.length === 0 ? (
        <div className="empty">오늘 시작하는 공연/전시가 없어요.</div>
      ) : (
        today.map(p => <PerformanceCard key={p.id} performance={p} />)
      )}

      <h2 className="section-title">⏰ 마감 임박 TOP</h2>
      {ending === null ? (
        <div className="loading">불러오는 중...</div>
      ) : ending.length === 0 ? (
        <div className="empty">3일 이내 마감되는 공연/전시가 없어요.</div>
      ) : (
        ending.slice(0, 10).map(p => <PerformanceCard key={p.id} performance={p} />)
      )}
    </>
  )
}
