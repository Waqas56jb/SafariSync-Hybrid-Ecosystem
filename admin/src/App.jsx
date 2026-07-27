import { useState } from 'react'
import Login from './components/Login'
import Shell from './components/Shell'

export default function App() {
  const [authed, setAuthed] = useState(false)

  if (!authed) {
    return <Login onLogin={() => setAuthed(true)} />
  }

  return <Shell onLogout={() => setAuthed(false)} />
}
