import { useState } from 'react'
import { Link } from 'react-router-dom'

const SLOTS = [
  { label: '장르', icon: '🎭', items: ['연극', '뮤지컬', '전시', '음악', '축제', '무용'] },
  { label: '지역', icon: '📍', items: ['서울', '경기', '부산', '대구', '인천', '광주', '대전', '제주'] },
  { label: '분위기', icon: '✨', items: ['조용한', '로맨틱한', '힙한', '활기찬', '우아한', '이색적인'] },
]

export default function WeekendRoulette() {
  const [rolling, setRolling] = useState(false)
  const [result, setResult] = useState(null)
  const [displayed, setDisplayed] = useState(['', '', ''])

  const spin = () => {
    setRolling(true)
    setResult(null)
    const finalPicks = SLOTS.map(s => s.items[Math.floor(Math.random() * s.items.length)])

    // 각 슬롯 차례로 멈추는 애니메이션
    SLOTS.forEach((slot, i) => {
      const interval = setInterval(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[i] = slot.items[Math.floor(Math.random() * slot.items.length)]
          return next
        })
      }, 80)

      setTimeout(() => {
        clearInterval(interval)
        setDisplayed(prev => {
          const next = [...prev]
          next[i] = finalPicks[i]
          return next
        })
        if (i === SLOTS.length - 1) {
          setRolling(false)
          setResult({ genre: finalPicks[0], region: finalPicks[1], mood: finalPicks[2] })
        }
      }, 1200 + i * 600)
    })
  }

  return (
    <>
      <Link to="/games" className="back-link">← 게임</Link>
      <h2 className="section-title">🎰 주말 룰렛</h2>
      <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: 16 }}>
        뭐 볼지 못 정했을 때, 운명에 맡겨보세요!
      </p>

      <div className="roulette-panel">
        {SLOTS.map((slot, i) => (
          <div key={slot.label} className={`roulette-slot ${rolling && !displayed[i] ? 'rolling' : ''}`}>
            <div className="roulette-slot-icon">{slot.icon}</div>
            <div className="roulette-slot-label">{slot.label}</div>
            <div className="roulette-slot-value">
              {displayed[i] || '?'}
            </div>
          </div>
        ))}
      </div>

      <button className="mbti-cta" onClick={spin} disabled={rolling}>
        {rolling ? '돌리는 중...' : result ? '다시 돌리기' : '🎰 시작!'}
      </button>

      {result && (
        <div className="roulette-result">
          <div className="roulette-result-text">
            이번 주말엔 <strong>{result.region}</strong>에서<br/>
            <strong>{result.mood} {result.genre}</strong> 어때요?
          </div>
          <Link to={`/list?category=${encodeURIComponent(result.genre)}`} className="mbti-cta">
            관련 공연 보러가기 →
          </Link>
        </div>
      )}
    </>
  )
}
