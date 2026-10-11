export default function Preloader() {
  const letters = 'Ayesha.'.split('')
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-logo">
        {letters.map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 70}ms` }}>
            {ch === '.' ? <em>.</em> : ch}
          </span>
        ))}
      </div>
      <div className="preloader-bar">
        <span />
      </div>
    </div>
  )
}
