// 미니게임 관련 localStorage 유틸

const KEYS = {
  MBTI: 'jumal-muhae-mbti',
  QUIZ_DONE: 'jumal-muhae-quiz-done',   // { date: 'YYYY-MM-DD', correct: bool }
  QUIZ_STREAK: 'jumal-muhae-quiz-streak',
  ROULETTE_LAST: 'jumal-muhae-roulette-last',
}

export function getMbtiType() {
  try { return localStorage.getItem(KEYS.MBTI) }
  catch { return null }
}
export function setMbtiType(type) {
  try { localStorage.setItem(KEYS.MBTI, type) } catch {}
}

export function getTodayQuizDone() {
  try {
    const raw = localStorage.getItem(KEYS.QUIZ_DONE)
    if (!raw) return null
    const { date, correct } = JSON.parse(raw)
    const today = new Date().toISOString().slice(0, 10)
    return date === today ? { correct } : null
  } catch { return null }
}
export function markTodayQuizDone(correct) {
  const today = new Date().toISOString().slice(0, 10)
  try { localStorage.setItem(KEYS.QUIZ_DONE, JSON.stringify({ date: today, correct })) } catch {}

  // 연속 정답 streak 업데이트
  const streak = getQuizStreak()
  if (correct) setQuizStreak(streak + 1)
  else setQuizStreak(0)
}

export function getQuizStreak() {
  try { return parseInt(localStorage.getItem(KEYS.QUIZ_STREAK) || '0', 10) }
  catch { return 0 }
}
export function setQuizStreak(n) {
  try { localStorage.setItem(KEYS.QUIZ_STREAK, String(n)) } catch {}
}
