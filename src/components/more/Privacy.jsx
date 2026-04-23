import SubPageLayout from './SubPageLayout.jsx'

export default function Privacy() {
  return (
    <SubPageLayout title="🔒 개인정보처리방침">
      <p className="effective-date">시행일: 2026년 4월 23일</p>

      <h3>1. 개인정보 수집 항목</h3>
      <p>
        <strong>주말뭐해는 이용자의 개인정보를 수집하지 않습니다.</strong>
        회원가입 절차가 없으며, 로그인 없이 모든 기능을 이용할 수 있습니다.
      </p>

      <h3>2. 로컬 저장 정보</h3>
      <p>
        찜(즐겨찾기) 기능을 위해 <strong>이용자의 기기(브라우저 localStorage)에</strong>
        공연 ID를 저장합니다. 이 정보는 외부로 전송되지 않으며,
        브라우저 데이터 삭제 시 함께 삭제됩니다.
      </p>

      <h3>3. 제3자 제공</h3>
      <p>서비스는 이용자의 어떤 정보도 제3자에게 제공하지 않습니다.</p>

      <h3>4. 외부 서비스 이용</h3>
      <ul>
        <li><strong>공공데이터포털 (data.go.kr)</strong>: 공연·전시 데이터 수집용. 이용자 정보 전송 없음.</li>
        <li><strong>Kakao Maps</strong>: 지도 렌더링을 위해 이용자의 IP 및 기기 정보가 Kakao로 전송될 수 있습니다. 자세한 내용은 Kakao 개인정보처리방침을 참고하세요.</li>
        <li><strong>Vercel / Render</strong>: 서비스 호스팅. 접속 로그가 기록될 수 있습니다.</li>
      </ul>

      <h3>5. 쿠키 사용</h3>
      <p>
        서비스는 별도의 추적 쿠키를 사용하지 않습니다.
        호스팅 플랫폼(Vercel)에서 기본 제공하는 세션 쿠키가 있을 수 있습니다.
      </p>

      <h3>6. 아동의 개인정보</h3>
      <p>
        서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
        다만 개인정보를 수집하지 않으므로 아동 역시 서비스를 자유롭게 이용할 수 있습니다.
      </p>

      <h3>7. 개인정보 보호책임자</h3>
      <div className="info-block">
        <div>이메일: <strong>lab02@coocon.net</strong></div>
        <div style={{ marginTop: 4 }}>개인정보 관련 문의, 불만 처리, 피해 구제 등을 처리합니다.</div>
      </div>

      <h3>8. 개인정보처리방침의 변경</h3>
      <p>
        본 방침은 시행일로부터 적용되며, 법령·정책 또는 서비스 변경에 따라
        내용이 추가·삭제·수정될 수 있습니다. 변경 시 서비스 내 공지를 통해 안내드립니다.
      </p>

      <h3>9. 기타 도움 받을 수 있는 곳</h3>
      <ul>
        <li>개인정보분쟁조정위원회: <a href="https://www.kopico.go.kr" target="_blank" rel="noreferrer">www.kopico.go.kr</a> / 1833-6972</li>
        <li>개인정보침해신고센터: <a href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer">privacy.kisa.or.kr</a> / 118</li>
        <li>대검찰청 사이버범죄수사단: 1301</li>
        <li>경찰청 사이버수사국: 182</li>
      </ul>
    </SubPageLayout>
  )
}
