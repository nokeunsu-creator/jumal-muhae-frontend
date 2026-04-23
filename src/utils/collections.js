// 주제별 컬렉션 정의
// 공공API 필드 제약상 "태그" 자체는 없으므로,
// category / priceInfo / description 기반 규칙으로 분류

export const COLLECTIONS = [
  {
    key: 'weekend',
    icon: '🌆',
    title: '이번 주말에',
    desc: '금·토·일 열리는 공연·전시',
    color: '#F59E0B',
    filter: (p, { friday, sunday }) => {
      if (!p.startDate || !p.endDate) return false
      const s = new Date(p.startDate)
      const e = new Date(p.endDate)
      return s <= new Date(sunday) && e >= new Date(friday)
    },
  },
  {
    key: 'date',
    icon: '💑',
    title: '데이트 코스',
    desc: '둘이서 가면 딱 좋아요',
    color: '#EC4899',
    filter: (p) => /뮤지컬|연극|음악|콘서트|전시/.test(p.category || '') &&
      !/어린이|가족/.test(p.title || ''),
  },
  {
    key: 'family',
    icon: '👨‍👩‍👧',
    title: '아이랑 가기 좋은',
    desc: '가족 나들이 추천',
    color: '#10B981',
    filter: (p) => /축제|체험|어린이|가족|캐릭터/.test(`${p.category || ''} ${p.title || ''} ${p.description || ''}`),
  },
  {
    key: 'solo',
    icon: '🧘',
    title: '혼자 즐기기 좋은',
    desc: '조용히 몰입하고 싶을 때',
    color: '#6366F1',
    filter: (p) => /전시|미술|음악|클래식/.test(p.category || ''),
  },
  {
    key: 'rainy',
    icon: '🌧',
    title: '비 오는 날 실내',
    desc: '궂은 날씨에도 즐기는',
    color: '#0EA5E9',
    filter: (p) => /전시|미술|박물관|공연장|극장|뮤지컬|연극/.test(`${p.category || ''} ${p.venueName || ''}`),
  },
  {
    key: 'free',
    icon: '🆓',
    title: '무료 공연·전시',
    desc: '부담 없이 즐기세요',
    color: '#84CC16',
    filter: (p) => /무료|free|0원/i.test(p.priceInfo || ''),
  },
  {
    key: 'festival',
    icon: '🎪',
    title: '축제·페스티벌',
    desc: '흥이 넘치는 현장',
    color: '#EF4444',
    filter: (p) => /축제|페스티벌|festival/i.test(`${p.category || ''} ${p.title || ''}`),
  },
]

export function getCollection(key) {
  return COLLECTIONS.find(c => c.key === key)
}

export function getWeekendRange() {
  const today = new Date()
  const dow = today.getDay() // 0=일, 5=금, 6=토
  const diffToFri = (5 - dow + 7) % 7
  const friday = new Date(today)
  friday.setDate(today.getDate() + (diffToFri === 0 && dow !== 5 ? 0 : diffToFri))
  // 이번 주 금요일 (이미 금요일이면 오늘)
  if (dow === 6 || dow === 0) {
    // 주말 중이면 이번 주말 금요일은 이미 지남
    friday.setDate(today.getDate() - (dow === 6 ? 1 : 2))
  }
  const sunday = new Date(friday)
  sunday.setDate(friday.getDate() + 2)

  const fmt = (d) => d.toISOString().slice(0, 10)
  return { friday: fmt(friday), saturday: fmt(new Date(friday.getTime() + 86400000)), sunday: fmt(sunday) }
}
