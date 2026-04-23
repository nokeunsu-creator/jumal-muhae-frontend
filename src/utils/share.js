export async function shareContent({ title, text, url }) {
  const shareUrl = url || window.location.href

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url: shareUrl })
      return { ok: true, method: 'native' }
    } catch (err) {
      if (err.name === 'AbortError') return { ok: false, method: 'cancelled' }
    }
  }

  // Fallback: 클립보드 복사
  try {
    await navigator.clipboard.writeText(shareUrl)
    return { ok: true, method: 'clipboard' }
  } catch {
    return { ok: false, method: 'failed' }
  }
}
