// 문화 MBTI 간소화 버전 (3축 8유형)
// S=혼자/T=같이, C=고전/M=현대, Q=조용/E=활기

export const MBTI_QUESTIONS = [
  {
    q: '주말에 공연이나 전시를 보고 싶을 때',
    a: { text: '혼자 조용히 몰입하고 싶어요', axis: 'ST', value: 'S' },
    b: { text: '친구·연인이랑 수다 떨며', axis: 'ST', value: 'T' },
  },
  {
    q: '카페에서 누군가와 대화할 때',
    a: { text: '깊이 있는 주제가 좋아요', axis: 'ST', value: 'S' },
    b: { text: '여러 명이랑 왁자지껄', axis: 'ST', value: 'T' },
  },
  {
    q: '공연 시작 전, 선호하는 분위기',
    a: { text: '정장 차림의 격식 있는', axis: 'CM', value: 'C' },
    b: { text: '티셔츠 입고 편하게', axis: 'CM', value: 'M' },
  },
  {
    q: '더 끌리는 작품',
    a: { text: '100년 넘은 고전 명작', axis: 'CM', value: 'C' },
    b: { text: '올해 나온 신작', axis: 'CM', value: 'M' },
  },
  {
    q: '공연 관람 중 내 모습은',
    a: { text: '눈 감고 귀로만 집중', axis: 'QE', value: 'Q' },
    b: { text: '리듬 타며 움직이고 있어', axis: 'QE', value: 'E' },
  },
  {
    q: '공연 끝나고 나서',
    a: { text: '여운 속에 조용히 걷기', axis: 'QE', value: 'Q' },
    b: { text: '근처 가서 신나게 놀기', axis: 'QE', value: 'E' },
  },
  {
    q: '이상적인 데이트 코스',
    a: { text: '미술관 > 조용한 와인바', axis: 'QE', value: 'Q' },
    b: { text: '페스티벌 > 치맥', axis: 'QE', value: 'E' },
  },
  {
    q: '예매할 때',
    a: { text: '몇 주 전부터 꼼꼼히 찾음', axis: 'CM', value: 'C' },
    b: { text: '그날 당일 즉흥으로', axis: 'CM', value: 'M' },
  },
  {
    q: '박물관·미술관에서 동선은',
    a: { text: '도슨트 설명 들으며 천천히', axis: 'ST', value: 'S' },
    b: { text: '친구와 소감 나누며 빠르게', axis: 'ST', value: 'T' },
  },
  {
    q: '가장 끌리는 공연장',
    a: { text: '예술의전당, 세종문화회관', axis: 'QE', value: 'Q' },
    b: { text: '한강공원, 야외 축제장', axis: 'QE', value: 'E' },
  },
]

export const MBTI_TYPES = {
  SCQ: {
    code: 'SCQ',
    emoji: '🎻',
    name: '고독한 클래식 감상가',
    desc: '혼자만의 시간에 고전 예술을 깊이 음미하는 타입.\n예술의전당에서 조용히 앉아있는 당신의 모습이 그려져요.',
    recommend: ['전시', '클래식 음악', '무용'],
    tip: '국립현대미술관·예술의전당·세종문화회관을 즐겨찾기에!',
  },
  SCE: {
    code: 'SCE',
    emoji: '🎭',
    name: '홀로 가는 뮤지컬 덕후',
    desc: '혼자서 뮤지컬·오페라의 화려함을 온전히 즐기는 타입.\n티켓 오픈일 알람 맞춰놓는 그 열정!',
    recommend: ['뮤지컬', '오페라', '연극'],
    tip: '취향에 꽂힌 작품은 N차 관람!',
  },
  SMQ: {
    code: 'SMQ',
    emoji: '📚',
    name: '인디 씬의 고독한 탐험가',
    desc: '작은 갤러리·인디 공연을 혼자 발견하는 기쁨을 아는 타입.\n힙한 전시는 SNS보다 먼저 가있어요.',
    recommend: ['인디 전시', '독립 영화', '소규모 음악'],
    tip: '성수·홍대·한남동 작은 공간들이 딱!',
  },
  SME: {
    code: 'SME',
    emoji: '🎸',
    name: '혼자 가도 즐거운 페스티벌러',
    desc: '동행 없어도 신나게 즐기는 자유로운 영혼.\n락페 슬램에서 만나요!',
    recommend: ['페스티벌', '콘서트', '축제'],
    tip: '펜타포트·자라섬·그랜드민트가 당신을 기다려요',
  },
  TCQ: {
    code: 'TCQ',
    emoji: '🎨',
    name: '교양 깊은 동반자',
    desc: '소중한 사람과 수준 높은 예술을 함께 음미하는 타입.\n관람 후 와인 한 잔이 빠질 수 없죠.',
    recommend: ['전시', '클래식', '오페라', '무용'],
    tip: '국립박물관 → 한남동 와인바 코스 강추',
  },
  TCE: {
    code: 'TCE',
    emoji: '🎪',
    name: '전통 축제 멤버',
    desc: '가족·친구와 전통적 문화 행사를 즐기는 타입.\n한국적인 축제에 진심.',
    recommend: ['전통 축제', '마당극', '국악'],
    tip: '남산골·경복궁·종로 문화 행사가 취향!',
  },
  TMQ: {
    code: 'TMQ',
    emoji: '☕',
    name: '카페 전시 러버',
    desc: '친한 사람과 아기자기한 전시·카페 투어.\nSNS에 "오늘의 전시" 올리는 그 사람.',
    recommend: ['아트 전시', '팝업 스토어', '플리마켓'],
    tip: '성수동·삼청동·연남동 루트가 당신 것!',
  },
  TME: {
    code: 'TME',
    emoji: '🎉',
    name: '페스티벌 크루 리더',
    desc: '친구들을 이끌고 축제·공연을 누비는 에너자이저.\n당신이 있으면 주말이 무조건 재밌어요.',
    recommend: ['페스티벌', '콘서트', '클럽 파티', '야외 축제'],
    tip: '여름엔 워터밤, 가을엔 자라섬, 겨울엔 크리스마스 마켓!',
  },
}

export function calculateType(answers) {
  const score = { S: 0, T: 0, C: 0, M: 0, Q: 0, E: 0 }
  answers.forEach(v => { score[v] = (score[v] || 0) + 1 })
  const ax1 = score.S > score.T ? 'S' : 'T'
  const ax2 = score.C > score.M ? 'C' : 'M'
  const ax3 = score.Q > score.E ? 'Q' : 'E'
  return `${ax1}${ax2}${ax3}`
}
