import SubPageLayout from './SubPageLayout.jsx'

const CONTACT_EMAIL = 'lab02@coocon.net'

export default function Contact() {
  return (
    <SubPageLayout title="💌 문의하기">
      <p>서비스 이용 중 불편한 점, 제안사항, 오류 제보를 언제든 보내주세요.</p>

      <a
        href={`mailto:${CONTACT_EMAIL}?subject=[주말뭐해] 문의&body=%0A%0A---%0A기기/버전:%20%0A`}
        className="cta-button">
        ✉️ 이메일로 문의하기
      </a>

      <div className="info-block">
        <div><strong>연락처</strong></div>
        <div style={{ marginTop: 4 }}>{CONTACT_EMAIL}</div>
      </div>

      <h3>📢 자주 받는 문의</h3>
      <ul>
        <li><strong>공연 정보가 틀려요</strong> — 원본 데이터(한국문화정보원) 기준이라 원본 수정 후 반영됩니다. 저희에게 알려주시면 안내드립니다.</li>
        <li><strong>공연이 안 보여요</strong> — 데이터는 매일 오전 1시, 오후 1시 갱신됩니다. 원본에 등록되어야 노출됩니다.</li>
        <li><strong>광고 제안·제휴</strong> — 이메일로 연락 부탁드립니다.</li>
      </ul>
    </SubPageLayout>
  )
}
