import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MBTI_QUESTIONS, MBTI_TYPES, calculateType } from '../../data/mbtiData.js'
import { setMbtiType, getMbtiType } from '../../utils/gameStorage.js'

export default function CultureMbti({ isOnboarding = false, onDone }) {
  const navigate = useNavigate()
  const existing = getMbtiType()
  const [step, setStep] = useState(existing && !isOnboarding ? 'result' : 'intro')
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(existing || null)
  const [qIdx, setQIdx] = useState(0)

  const startQuiz = () => {
    setStep('quiz')
    setAnswers([])
    setQIdx(0)
  }

  const answer = (choice) => {
    const q = MBTI_QUESTIONS[qIdx]
    const v = choice === 'a' ? q.a.value : q.b.value
    const newAnswers = [...answers, v]
    setAnswers(newAnswers)
    if (qIdx + 1 >= MBTI_QUESTIONS.length) {
      const type = calculateType(newAnswers)
      setMbtiType(type)
      setResult(type)
      setStep('result')
    } else {
      setQIdx(qIdx + 1)
    }
  }

  const finish = () => {
    if (onDone) onDone()
    else navigate('/')
  }

  // === intro 화면 ===
  if (step === 'intro') {
    return (
      <div className="mbti-wrap">
        <div className="mbti-intro">
          <div className="mbti-intro-emoji">🧭</div>
          <h1>문화 MBTI</h1>
          <p>10개 질문으로 당신의 문화 소비 스타일을 알아보고,<br/>취향에 맞는 공연·전시를 추천받아 보세요!</p>
          <button className="mbti-cta" onClick={startQuiz}>시작하기</button>
          {isOnboarding && (
            <button className="mbti-skip" onClick={finish}>건너뛰기</button>
          )}
        </div>
      </div>
    )
  }

  // === 질문 화면 ===
  if (step === 'quiz') {
    const q = MBTI_QUESTIONS[qIdx]
    const progress = ((qIdx + 1) / MBTI_QUESTIONS.length) * 100

    return (
      <div className="mbti-wrap">
        <div className="mbti-progress">
          <div className="mbti-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="mbti-step">{qIdx + 1} / {MBTI_QUESTIONS.length}</div>

        <div className="mbti-question">{q.q}</div>

        <button className="mbti-option" onClick={() => answer('a')}>
          {q.a.text}
        </button>
        <button className="mbti-option" onClick={() => answer('b')}>
          {q.b.text}
        </button>
      </div>
    )
  }

  // === 결과 화면 ===
  const info = MBTI_TYPES[result] || MBTI_TYPES.TME
  return (
    <div className="mbti-wrap">
      <div className="mbti-result">
        <div className="mbti-result-emoji">{info.emoji}</div>
        <div className="mbti-result-code">{info.code}</div>
        <h1>{info.name}</h1>
        <p className="mbti-result-desc">{info.desc}</p>

        <div className="mbti-recommend">
          <div className="mbti-recommend-title">✨ 추천 장르</div>
          <div className="mbti-recommend-chips">
            {info.recommend.map(tag => (
              <span key={tag} className="mbti-chip">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mbti-tip">💡 {info.tip}</div>

        <button className="mbti-cta" onClick={finish}>
          {isOnboarding ? '시작하기' : '홈으로'}
        </button>
        <button className="mbti-skip" onClick={() => { setResult(null); setAnswers([]); setQIdx(0); setStep('intro') }}>
          다시 테스트하기
        </button>
      </div>
    </div>
  )
}
