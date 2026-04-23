import SubPageLayout from './SubPageLayout.jsx'

export default function About() {
  return (
    <SubPageLayout title="🏠 서비스 소개">
      <p>
        <strong>주말뭐해</strong>는 전국 공연·전시·축제 정보를
        <strong> "오늘 시작"</strong>과 <strong>"마감 임박"</strong> 기준으로
        매일 새롭게 큐레이션해주는 서비스입니다.
      </p>

      <h3>✨ 왜 주말뭐해인가요?</h3>
      <ul>
        <li>대형 티켓 플랫폼은 대규모 공연 위주</li>
        <li>우리는 <strong>시의성 있는 큐레이션</strong>에 집중</li>
        <li>놓치기 아까운 작품을 빠뜨리지 않도록</li>
      </ul>

      <h3>🎯 누구를 위한 앱인가요?</h3>
      <ul>
        <li>주말마다 문화 나들이를 계획하시는 분</li>
        <li>데이트·가족 나들이 장소를 찾는 분</li>
        <li>지역 축제나 마이너 공연을 좋아하시는 분</li>
      </ul>

      <h3>📊 데이터 출처</h3>
      <p>
        본 서비스는 <strong>공공데이터포털(data.go.kr)</strong>의
        <strong> 한국문화정보원 "한눈에보는문화정보조회서비스"</strong>를
        활용하여 제작되었습니다. 데이터는 매일 자동으로 갱신됩니다.
      </p>
    </SubPageLayout>
  )
}
