// 로컬 개발: Vite proxy가 /api를 localhost:8080으로 전달
// 배포: Render 백엔드 URL (VITE_API_URL)
const BASE_URL = import.meta.env.VITE_API_URL || '';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

/** 오늘 시작하는 공연/전시 */
export function getToday() {
  return request('/api/performances/today');
}

/** 마감 임박 (기본 3일 이내) */
export function getEndingSoon(days = 3) {
  return request(`/api/performances/ending?days=${days}`);
}

/** 필터 목록 (지역/분야/페이지) */
export function getList({ region, category, page = 0, size = 20 } = {}) {
  const params = new URLSearchParams();
  if (region) params.set('region', region);
  if (category) params.set('category', category);
  params.set('page', page);
  params.set('size', size);
  return request(`/api/performances?${params}`);
}

/** 상세 */
export function getDetail(id) {
  return request(`/api/performances/${id}`);
}

/** 지도 영역 */
export function getInBounds({ swLat, swLng, neLat, neLng }) {
  const params = new URLSearchParams({
    sw_lat: swLat, sw_lng: swLng, ne_lat: neLat, ne_lng: neLng
  });
  return request(`/api/performances/map?${params}`);
}

/** 서버 상태 */
export function healthCheck() {
  return request('/api/health');
}
