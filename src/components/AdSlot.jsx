// AdSense 스텁 - 출시 2~3개월 후 승인 받으면 활성화
// 사용: <AdSlot position="home-bottom" />
// 환경변수 VITE_ADSENSE_CLIENT + VITE_ADSENSE_SLOT_<POSITION> 설정 시에만 렌더

import { useEffect, useRef } from 'react'

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT // ex: ca-pub-1234567890
const SLOT_MAP = {
  'home-bottom':     import.meta.env.VITE_ADSENSE_SLOT_HOME,
  'detail-bottom':   import.meta.env.VITE_ADSENSE_SLOT_DETAIL,
  'list-native':     import.meta.env.VITE_ADSENSE_SLOT_LIST,
  'quiz-result':     import.meta.env.VITE_ADSENSE_SLOT_QUIZ,
  'mbti-result':     import.meta.env.VITE_ADSENSE_SLOT_MBTI,
}

let scriptInjected = false
function ensureScript() {
  if (scriptInjected || !CLIENT) return
  scriptInjected = true
  const s = document.createElement('script')
  s.async = true
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`
  s.crossOrigin = 'anonymous'
  document.head.appendChild(s)
}

export default function AdSlot({ position, style }) {
  const slot = SLOT_MAP[position]
  const ref = useRef(null)

  useEffect(() => {
    if (!CLIENT || !slot) return
    ensureScript()
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [slot])

  if (!CLIENT || !slot) return null

  return (
    <ins
      ref={ref}
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true" />
  )
}
