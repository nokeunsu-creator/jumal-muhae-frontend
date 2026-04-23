import { useEffect, useState } from 'react'

const KEY = 'jumal-muhae-favorites'

export function getFavorites() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') }
  catch { return [] }
}

export function toggleFavorite(id) {
  const list = getFavorites()
  const next = list.includes(id) ? list.filter(x => x !== id) : [...list, id]
  localStorage.setItem(KEY, JSON.stringify(next))
  return next
}

export default function Favorites() {
  const [ids, setIds] = useState([])

  useEffect(() => { setIds(getFavorites()) }, [])

  return (
    <>
      <h2 className="section-title">⭐ 찜한 공연·전시</h2>
      {ids.length === 0 ? (
        <div className="empty">아직 찜한 공연/전시가 없어요.</div>
      ) : (
        <div className="empty">
          찜 ID: {ids.join(', ')}<br />
          <small>상세 조회 UI는 추후 구현</small>
        </div>
      )}
    </>
  )
}
