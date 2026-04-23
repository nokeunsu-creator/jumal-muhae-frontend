import { Link } from 'react-router-dom'

export default function SubPageLayout({ title, children }) {
  return (
    <>
      <Link to="/more" className="back-link">← 더보기</Link>
      <h1 className="sub-title">{title}</h1>
      <div className="sub-content">
        {children}
      </div>
    </>
  )
}
