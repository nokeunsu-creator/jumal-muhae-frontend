import SubPageLayout from './SubPageLayout.jsx'

export default function Guide() {
  return (
    <SubPageLayout title="📖 이용 가이드">
      <h3>🏠 홈</h3>
      <p>오늘 시작하는 공연·전시와 3일 이내 마감되는 공연을 한눈에 확인할 수 있습니다.</p>

      <h3>📋 목록</h3>
      <p>진행 중인 모든 공연·전시를 카테고리(연극/뮤지컬/음악/전시/축제)별로 필터링해서 볼 수 있습니다.</p>

      <h3>🗺️ 지도</h3>
      <p>내 주변 또는 특정 지역의 공연·전시를 지도 위에서 바로 확인하세요. 마커를 클릭하면 상세 정보로 이동합니다.</p>

      <h3>⭐ 찜</h3>
      <p>관심 있는 공연을 찜해두면 따로 저장해두지 않아도 이 탭에서 모아볼 수 있습니다.</p>

      <h3>💡 팁</h3>
      <ul>
        <li>데이터는 <strong>매일 오전 1시, 오후 1시</strong> 자동 갱신됩니다</li>
        <li>공연 상세 페이지의 <strong>"공식 페이지 보기"</strong>로 예매/관람 정보를 확인할 수 있어요</li>
        <li>홈 화면에 추가하면 앱처럼 사용할 수 있습니다</li>
      </ul>
    </SubPageLayout>
  )
}
