import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { getToday, getEndingSoon } from '../api/api.js'
import PerformanceCard from './PerformanceCard.jsx'
import { CardSkeleton, EmptyState, ErrorState } from './Skeleton.jsx'
import WeekendHero from './WeekendHero.jsx'
import WeatherWidget from './WeatherWidget.jsx'
import DDayWidget from './DDayWidget.jsx'
import HomeDailyGame from './HomeDailyGame.jsx'
import { COLLECTIONS } from '../utils/collections.js'

export default function Home() {
  const [today, setToday] = useState(null)
  const [ending, setEnding] = useState(null)
  const [error, setError] = useState(null)

  const load = useCallback(() => {
    setError(null)
    setToday(null)
    setEnding(null)
    Promise.all([getToday(), getEndingSoon(3)])
      .then(([t, e]) => { setToday(t); setEnding(e); })
      .catch((err) => setError(err.message))
  }, [])

  useEffect(() => { load() }, [load])

  if (error) return <ErrorState message={`서버 연결에 실패했어요\n${error}`} onRetry={load} />

  return (
    <>
      <WeekendHero />
      <WeatherWidget />
      <HomeDailyGame />
      <DDayWidget />

      <h2 className="section-title">✨ 주제별 컬렉션</h2>
      <div className="collection-scroll">
        {COLLECTIONS.slice(1).map(c => (
          <Link key={c.key} to={`/collections/${c.key}`} className="collection-chip"
                style={{ background: c.color }}>
            <span className="collection-chip-icon">{c.icon}</span>
            <span>{c.title}</span>
          </Link>
        ))}
      </div>

      <h2 className="section-title">🆕 오늘 시작하는 공연·전시</h2>
      {today === null ? (
        <CardSkeleton count={3} />
      ) : today.length === 0 ? (
        <EmptyState emoji="🌤️" message={'오늘 시작하는 공연/전시가 없어요.\n조금 뒤에 다시 확인해주세요'} />
      ) : (
        today.map(p => <PerformanceCard key={p.id} performance={p} />)
      )}

      <h2 className="section-title">⏰ 마감 임박 TOP</h2>
      {ending === null ? (
        <CardSkeleton count={3} />
      ) : ending.length === 0 ? (
        <EmptyState emoji="😌" message="3일 이내 마감되는 공연/전시가 없어요." />
      ) : (
        ending.slice(0, 10).map(p => <PerformanceCard key={p.id} performance={p} />)
      )}
    </>
  )
}
