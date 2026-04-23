import { useState } from 'react'

const KEY = 'jumal-muhae-onboarding-done'

export function shouldShowOnboarding() {
  try { return localStorage.getItem(KEY) !== 'true' }
  catch { return false }
}

const SLIDES = [
  {
    emoji: '🎫',
    title: '주말뭐해',
    desc: '전국 공연·전시·축제를\n오늘 시작 / 마감 임박 기준으로\n매일 새롭게 큐레이션해드려요',
  },
  {
    emoji: '📋',
    title: '원하는 분야만',
    desc: '연극·뮤지컬·음악·전시·축제\n카테고리와 지역별로 필터링해서\n취향에 맞는 공연만 확인',
  },
  {
    emoji: '⭐',
    title: '놓치지 마세요',
    desc: '관심 있는 공연은 찜해두세요\n매일 새로운 정보가 업데이트되니\n주말마다 들러주세요 😊',
  },
]

export default function Onboarding({ onFinish }) {
  const [idx, setIdx] = useState(0)

  const finish = () => {
    try { localStorage.setItem(KEY, 'true') } catch {}
    onFinish?.()
  }

  const next = () => {
    if (idx < SLIDES.length - 1) setIdx(idx + 1)
    else finish()
  }

  const slide = SLIDES[idx]
  const isLast = idx === SLIDES.length - 1

  return (
    <div className="onboarding-overlay">
      <button className="onboarding-skip" onClick={finish}>건너뛰기</button>

      <div className="onboarding-slide">
        <div className="onboarding-emoji">{slide.emoji}</div>
        <h1 className="onboarding-title">{slide.title}</h1>
        <p className="onboarding-desc">{slide.desc}</p>
      </div>

      <div className="onboarding-dots">
        {SLIDES.map((_, i) => (
          <span key={i} className={`dot ${i === idx ? 'active' : ''}`} />
        ))}
      </div>

      <button className="onboarding-next" onClick={next}>
        {isLast ? '시작하기' : '다음'}
      </button>
    </div>
  )
}
