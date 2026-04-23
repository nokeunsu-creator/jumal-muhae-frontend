import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getTodayQuiz } from '../../data/quizData.js'
import { getTodayQuizDone, markTodayQuizDone, getQuizStreak } from '../../utils/gameStorage.js'

export default function DailyQuiz() {
  const quiz = getTodayQuiz()
  const done = getTodayQuizDone()
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(!!done)
  const streak = getQuizStreak()

  const submit = (idx) => {
    if (showResult) return
    setSelected(idx)
    const isCorrect = idx === quiz.correct
    markTodayQuizDone(isCorrect)
    setTimeout(() => setShowResult(true), 500)
  }

  const today = new Date()
  const dateLabel = `${today.getMonth() + 1}월 ${today.getDate()}일`

  return (
    <>
      <Link to="/games" className="back-link">← 게임</Link>
      <h2 className="section-title">🎯 오늘의 문화 퀴즈</h2>

      <div className="quiz-header">
        <div className="quiz-date">{dateLabel}</div>
        {streak > 0 && <div className="quiz-streak">🔥 {streak}연속 정답</div>}
      </div>

      <div className="quiz-card">
        <div className="quiz-tag">#{quiz.tag}</div>
        <div className="quiz-question">{quiz.q}</div>

        <div className="quiz-options">
          {quiz.a.map((option, idx) => {
            let className = 'quiz-option'
            if (showResult) {
              if (idx === quiz.correct) className += ' correct'
              else if (idx === selected) className += ' wrong'
            } else if (idx === selected) {
              className += ' selected'
            }
            return (
              <button
                key={idx}
                className={className}
                onClick={() => submit(idx)}
                disabled={showResult}>
                {option}
              </button>
            )
          })}
        </div>

        {showResult && (
          <div className={`quiz-result ${(done?.correct ?? (selected === quiz.correct)) ? 'success' : 'fail'}`}>
            {(done?.correct ?? (selected === quiz.correct))
              ? `🎉 정답이에요! 연속 ${getQuizStreak()}일째 맞추셨어요`
              : `😅 아쉬워요. 정답은 "${quiz.a[quiz.correct]}" 였어요`}
          </div>
        )}

        {done && (
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, marginTop: 12 }}>
            오늘은 이미 참여하셨어요. 내일 또 만나요!
          </p>
        )}
      </div>
    </>
  )
}
