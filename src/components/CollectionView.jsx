import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getList } from '../api/api.js'
import { getCollection, getWeekendRange } from '../utils/collections.js'
import PerformanceCard from './PerformanceCard.jsx'
import { CardSkeleton, EmptyState } from './Skeleton.jsx'

export default function CollectionView() {
  const { key } = useParams()
  const collection = getCollection(key)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!collection) return
    setData(null)
    getList({ page: 0, size: 100 })
      .then(res => {
        const all = res.content || []
        const range = getWeekendRange()
        const filtered = all.filter(p => collection.filter(p, range))
        setData(filtered)
      })
      .catch(() => setData([]))
  }, [key])

  if (!collection) {
    return <EmptyState emoji="🤷" message="존재하지 않는 컬렉션이에요" />
  }

  return (
    <>
      <Link to="/" className="back-link">← 홈</Link>
      <div className="collection-header" style={{ background: collection.color }}>
        <div className="collection-icon" style={{ fontSize: 48 }}>{collection.icon}</div>
        <div className="collection-title" style={{ fontSize: 22 }}>{collection.title}</div>
        <div className="collection-desc" style={{ fontSize: 14 }}>{collection.desc}</div>
      </div>

      {data === null ? (
        <CardSkeleton count={3} />
      ) : data.length === 0 ? (
        <EmptyState emoji="🌙" message={'조건에 맞는 공연·전시가 아직 없어요\n다른 컬렉션도 둘러보세요'} />
      ) : (
        data.map(p => <PerformanceCard key={p.id} performance={p} />)
      )}
    </>
  )
}
