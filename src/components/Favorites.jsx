import { useEffect, useState } from 'react'
import { getDetail } from '../api/api.js'
import { getFavorites } from '../utils/favorites.js'
import PerformanceCard from './PerformanceCard.jsx'
import { CardSkeleton, EmptyState } from './Skeleton.jsx'

export default function Favorites() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    const ids = getFavorites()
    if (ids.length === 0) { setItems([]); return }

    Promise.all(ids.map(id => getDetail(id).catch(() => null)))
      .then(results => setItems(results.filter(Boolean)))
  }, [])

  return (
    <>
      <h2 className="section-title">⭐ 찜한 공연·전시</h2>
      {items === null ? (
        <CardSkeleton count={2} />
      ) : items.length === 0 ? (
        <EmptyState
          emoji="💫"
          message={'아직 찜한 공연/전시가 없어요.\n상세 페이지에서 별표를 눌러 저장해보세요'} />
      ) : (
        items.map(p => <PerformanceCard key={p.id} performance={p} />)
      )}
    </>
  )
}
