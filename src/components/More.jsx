import { Link } from 'react-router-dom'

const MENU_ITEMS = [
  { to: '/games',     icon: '🎮', label: '미니게임' },
  { to: '/about',     icon: '🏠', label: '서비스 소개' },
  { to: '/guide',     icon: '📖', label: '이용 가이드' },
  { to: '/contact',   icon: '💌', label: '문의하기' },
  { to: '/terms',     icon: '📜', label: '이용약관' },
  { to: '/privacy',   icon: '🔒', label: '개인정보처리방침' },
  { to: '/licenses',  icon: '🏷️', label: '오픈소스 라이선스' },
  { to: '/app-info',  icon: 'ℹ️', label: '앱 정보' },
]

export default function More() {
  return (
    <>
      <h2 className="section-title">⋯ 더보기</h2>
      <div className="more-list">
        {MENU_ITEMS.map(item => (
          <Link key={item.to} to={item.to} className="more-item">
            <span className="more-icon">{item.icon}</span>
            <span className="more-label">{item.label}</span>
            <span className="more-chevron">›</span>
          </Link>
        ))}
      </div>
      <div className="more-footer">
        <div>주말뭐해 v0.1.0</div>
        <div style={{ marginTop: 4 }}>© 2026 jumal-muhae</div>
      </div>
    </>
  )
}
