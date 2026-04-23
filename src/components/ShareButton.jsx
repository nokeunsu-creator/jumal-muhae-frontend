import { useState } from 'react'
import { shareContent } from '../utils/share.js'

export default function ShareButton({ title, text, url, style, size = 20 }) {
  const [toast, setToast] = useState(null)

  const handleShare = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    const result = await shareContent({ title, text, url })
    if (result.method === 'clipboard') {
      setToast('링크가 복사되었어요')
      setTimeout(() => setToast(null), 2000)
    }
  }

  return (
    <>
      <button
        onClick={handleShare}
        aria-label="공유하기"
        style={{
          fontSize: size,
          background: 'none',
          padding: 6,
          color: 'var(--muted)',
          ...style,
        }}>
        ⇪
      </button>
      {toast && <div className="share-toast">{toast}</div>}
    </>
  )
}
