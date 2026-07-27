import BrandMark from './BrandMark'

export default function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault()
    onLogin()
  }

  return (
    <div id="loginView">
      <div className="login-card">
        <div className="brand">
          <BrandMark size={42} />
          <span>
            <b>Vista Azul</b>
            <small>Control Deck</small>
          </span>
        </div>
        <h1>Admin sign in</h1>
        <p>Restricted area — bookings, tours, gallery & bot operations.</p>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="aEmail">Email</label>
            <input id="aEmail" type="email" defaultValue="admin@vistaazul.co" required />
          </div>
          <div className="field">
            <label htmlFor="aPass">Password</label>
            <input id="aPass" type="password" defaultValue="admin123" required />
          </div>
          <button className="btn btn-teal" type="submit">
            Enter control deck →
          </button>
        </form>
        <p className="demo-hint">
          Demo build — <code>admin@vistaazul.co / admin123</code> (any value works)
        </p>
        <div className="login-foot">
          <span>SSL · 256-BIT</span>
          <span>ROLE-BASED ACCESS</span>
          <span>AUDIT LOGGED</span>
        </div>
      </div>
    </div>
  )
}
