import SubPageLayout from './SubPageLayout.jsx'

export default function AppInfo() {
  return (
    <SubPageLayout title="ℹ️ 앱 정보">
      <div className="info-block">
        <div><strong>주말뭐해</strong> (jumal-muhae)</div>
        <div style={{ marginTop: 4 }}>버전 0.1.0</div>
        <div style={{ marginTop: 2 }}>빌드 2026-04-23</div>
      </div>

      <h3>🏢 운영</h3>
      <ul>
        <li>서비스명: 주말뭐해</li>
        <li>문의: lab02@coocon.net</li>
      </ul>

      <h3>📊 데이터 출처</h3>
      <p>
        본 서비스는 <a href="https://www.data.go.kr" target="_blank" rel="noreferrer">공공데이터포털</a>의
        <strong> 한국문화정보원 "한눈에보는문화정보조회서비스"</strong> 데이터를
        활용하여 제작되었습니다.
      </p>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8 }}>
        공공누리 제1유형(출처표시)에 따라 이용하고 있으며, 데이터의 저작권은
        원 제공기관인 한국문화정보원에 있습니다.
      </p>

      <h3>🔄 데이터 갱신 주기</h3>
      <p>
        매일 오전 1시, 오후 1시에 자동 갱신됩니다.
        (원본 데이터 변경 시점에 따라 반영이 늦어질 수 있습니다)
      </p>

      <h3>🛠️ 기술 스택</h3>
      <ul>
        <li>Frontend: React 18, Vite, React Router</li>
        <li>Backend: Spring Boot 3, JPA, PostgreSQL</li>
        <li>Hosting: Vercel, Render, Neon</li>
      </ul>
    </SubPageLayout>
  )
}
