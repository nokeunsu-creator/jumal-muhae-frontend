export function CardSkeleton({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card perf-card skeleton-wrap">
          <div className="thumb skeleton" />
          <div className="info">
            <div className="skeleton skeleton-line" style={{ width: '80%', height: 14 }} />
            <div className="skeleton skeleton-line" style={{ width: '60%', height: 12, marginTop: 8 }} />
            <div className="skeleton skeleton-line" style={{ width: '40%', height: 12, marginTop: 6 }} />
          </div>
        </div>
      ))}
    </>
  )
}

export function EmptyState({ emoji = '🌙', message = '표시할 내용이 없어요' }) {
  return (
    <div className="empty-state">
      <div className="empty-emoji">{emoji}</div>
      <div className="empty-message">{message}</div>
    </div>
  )
}

export function ErrorState({ message = '데이터를 불러오지 못했어요', onRetry }) {
  return (
    <div className="empty-state">
      <div className="empty-emoji">⚠️</div>
      <div className="empty-message">{message}</div>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>다시 시도</button>
      )}
    </div>
  )
}
