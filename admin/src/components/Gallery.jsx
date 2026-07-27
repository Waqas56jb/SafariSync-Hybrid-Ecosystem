import { useState } from 'react'
import { galleryQueue } from '../data'

export default function Gallery({ onPendingChange }) {
  const [shots, setShots] = useState(() =>
    galleryQueue.map(([id, who, cap], i) => ({
      id: `${id}-${i}`,
      photoId: id,
      who,
      cap,
      gone: false,
    })),
  )

  function moderate(shotId) {
    setShots((prev) => prev.map((s) => (s.id === shotId ? { ...s, gone: true } : s)))
    setTimeout(() => {
      setShots((prev) => {
        const next = prev.filter((s) => s.id !== shotId)
        onPendingChange?.(next.length)
        return next
      })
    }, 320)
  }

  const pending = shots.filter((s) => !s.gone).length

  return (
    <section className="view on" id="v-gallery">
      <div className="panel">
        <div className="panel-head">
          <h3>
            Moderation queue{' '}
            <small>Guest uploads awaiting review · auto-published after approval</small>
          </h3>
          <span className="tag pend" id="pendCount">
            {pending} pending
          </span>
        </div>
        <div className="mod-grid" id="modGrid">
          {shots.map((s) => (
            <div className={`shot${s.gone ? ' gone' : ''}`} key={s.id}>
              <img
                loading="lazy"
                src={`https://images.unsplash.com/${s.photoId}?auto=format&fit=crop&w=500&q=80`}
                alt={`Upload by ${s.who}`}
              />
              <div className="meta">
                <b>{s.who}</b>
                <span>{s.cap}</span>
                <div className="acts">
                  <button
                    className="approve"
                    type="button"
                    onClick={() => moderate(s.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="reject"
                    type="button"
                    onClick={() => moderate(s.id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
