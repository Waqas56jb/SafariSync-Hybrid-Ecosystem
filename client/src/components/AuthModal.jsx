import { ArrowRight, X } from 'lucide-react'

export default function AuthModal({ open, tab, onClose, onSwitchTab, onLogin }) {
  const isLogin = tab === 'login'

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  function handleSubmit(e) {
    e.preventDefault()
    onLogin()
  }

  return (
    <div
      className={`modal${open ? ' open' : ''}`}
      id="authModal"
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="auth">
        <button className="close-x" onClick={onClose} aria-label="Close" type="button">
          <X className="lucide" />
        </button>
        <h3 id="authTitle">{isLogin ? 'Welcome back' : 'Create your account'}</h3>
        <p id="authSub">
          {isLogin
            ? 'Log in to manage your bookings and galleries.'
            : 'Book safaris, get WhatsApp updates, share photos.'}
        </p>
        <div className="auth-tabs">
          <button
            id="tabLogin"
            type="button"
            className={isLogin ? 'on' : ''}
            onClick={() => onSwitchTab('login')}
          >
            Log in
          </button>
          <button
            id="tabSignup"
            type="button"
            className={!isLogin ? 'on' : ''}
            onClick={() => onSwitchTab('signup')}
          >
            Sign up
          </button>
        </div>
        {isLogin ? (
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="lEmail">Email</label>
              <input id="lEmail" type="email" defaultValue="maria@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="lPass">Password</label>
              <input id="lPass" type="password" defaultValue="demo1234" required />
            </div>
            <button className="btn btn-teal" type="submit">
              Log in
              <ArrowRight className="lucide" />
            </button>
            <p className="hint">Demo build — any email & password works.</p>
          </form>
        ) : (
          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="sName">Full name</label>
              <input id="sName" type="text" placeholder="María González" required />
            </div>
            <div className="field">
              <label htmlFor="sEmail">Email</label>
              <input id="sEmail" type="email" placeholder="you@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="sPhone">WhatsApp number</label>
              <input id="sPhone" type="tel" placeholder="+1 555 012 8841" required />
            </div>
            <div className="field">
              <label htmlFor="sPass">Password</label>
              <input id="sPass" type="password" placeholder="••••••••" required />
            </div>
            <button className="btn btn-gold" type="submit">
              Create account
              <ArrowRight className="lucide" />
            </button>
            <p className="hint">Your concierge messages arrive on WhatsApp.</p>
          </form>
        )}
      </div>
    </div>
  )
}
