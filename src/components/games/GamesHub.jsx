import { Link } from 'react-router-dom'
import { getMbtiType, getQuizStreak } from '../../utils/gameStorage.js'
import { MBTI_TYPES } from '../../data/mbtiData.js'

export default function GamesHub() {
  const myType = getMbtiType()
  const myTypeInfo = myType ? MBTI_TYPES[myType] : null
  const streak = getQuizStreak()

  return (
    <>
      <h2 className="section-title">🎮 미니게임</h2>

      <div className="game-grid">
        <Link to="/games/mbti" className="game-card" style={{ background: 'linear-gradient(135deg,#EC4899,#8B5CF6)' }}>
          <div className="game-emoji">🧭</div>
          <div className="game-title">문화 MBTI</div>
          <div className="game-desc">
            {myTypeInfo ? `내 유형: ${myTypeInfo.emoji} ${myTypeInfo.name}` : '내 취향 알아보기'}
          </div>
        </Link>

        <Link to="/games/roulette" className="game-card" style={{ background: 'linear-gradient(135deg,#F59E0B,#EF4444)' }}>
          <div className="game-emoji">🎰</div>
          <div className="game-title">주말 룰렛</div>
          <div className="game-desc">뭐 볼지 못 정했을 때!</div>
        </Link>

        <Link to="/games/quiz" className="game-card" style={{ background: 'linear-gradient(135deg,#10B981,#0EA5E9)' }}>
          <div className="game-emoji">🎯</div>
          <div className="game-title">오늘의 퀴즈</div>
          <div className="game-desc">
            {streak > 0 ? `🔥 ${streak}연속 정답` : '매일 1문제'}
          </div>
        </Link>
      </div>
    </>
  )
}
