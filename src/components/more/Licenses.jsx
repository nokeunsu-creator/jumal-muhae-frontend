import SubPageLayout from './SubPageLayout.jsx'

const LICENSES = [
  { name: 'React', version: '18.3', license: 'MIT', url: 'https://github.com/facebook/react' },
  { name: 'Vite', version: '6.0', license: 'MIT', url: 'https://github.com/vitejs/vite' },
  { name: 'react-router-dom', version: '6.28', license: 'MIT', url: 'https://github.com/remix-run/react-router' },
  { name: 'Spring Boot', version: '3.3', license: 'Apache-2.0', url: 'https://github.com/spring-projects/spring-boot' },
  { name: 'Hibernate ORM', version: '6.5', license: 'LGPL-2.1', url: 'https://hibernate.org' },
  { name: 'PostgreSQL JDBC', version: '42.7', license: 'BSD-2-Clause', url: 'https://jdbc.postgresql.org' },
  { name: 'Jackson', version: '2.17', license: 'Apache-2.0', url: 'https://github.com/FasterXML/jackson' },
  { name: 'Noto Sans KR', version: '-', license: 'OFL-1.1', url: 'https://fonts.google.com/noto/specimen/Noto+Sans+KR' },
]

export default function Licenses() {
  return (
    <SubPageLayout title="🏷️ 오픈소스 라이선스">
      <p>본 서비스는 아래 오픈소스 소프트웨어를 사용하여 제작되었습니다. 각 소프트웨어의 저작자와 기여자분들께 감사드립니다.</p>

      <div className="license-list">
        {LICENSES.map(lib => (
          <a key={lib.name} href={lib.url} target="_blank" rel="noreferrer" className="license-item">
            <div className="license-name">{lib.name} <span className="license-version">v{lib.version}</span></div>
            <div className="license-type">{lib.license}</div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: 20, fontSize: 13, color: 'var(--muted)' }}>
        각 라이선스의 전체 내용은 해당 프로젝트의 공식 저장소에서 확인할 수 있습니다.
      </p>
    </SubPageLayout>
  )
}
