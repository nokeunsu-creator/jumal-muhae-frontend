import { Link } from 'react-router-dom'
import { getMbtiType, getTodayQuizDone, getQuizStreak } from '../utils/gameStorage.js'

export default function HomeDailyGame() {
  const hasMbti = !!getMbtiType()
  const quizDone = !!getTodayQuizDone()
  const streak = getQuizStreak()

  // 우선순위: 퀴즈 안 했으면 퀴즈, MBTI 없으면 MBTI, 둘 다 있으면 룰렛
  let card
  if (!quizDone) {
    card = { to: '/games/quiz', emoji: '🎯', title: '오늘의 문화 퀴즈', desc: streak > 0 ? `🔥 ${streak}연속 정답 도전!` : '1분 만에 상식 테스트', bg: 'linear-gradient(135deg,#10B981,#0EA5E9)' }
  } else if (!hasMbti) {
    card = { to: '/games/mbti', emoji: '🧭', title: '문화 MBTI 테스트', desc: '내 취향 알아보고 맞춤 추천 받기', bg: 'linear-gradient(135deg,#EC4899,#8B5CF6)' }
  } else {
    card = { to: '/games/roulette', emoji: '🎰', title: '주말 룰렛', desc: '오늘 뭐 볼지 운명에 맡겨봐', bg: 'linear-gradient(135deg,#F59E0B,#EF4444)' }
  }

  return (
    <Link to={card.to} className="daily-game-card" style={{ background: card.bg }}>
      <div className="daily-game-emoji">{card.emoji}</div>
      <div className="daily-game-content">
        <div className="daily-game-label">🎮 오늘의 게임</div>
        <div className="daily-game-title">{card.title}</div>
        <div className="daily-game-desc">{card.desc}</div>
      </div>
      <div className="daily-game-chevron">›</div>
    </Link>
  )
}
