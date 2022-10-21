import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const [token, setToken] = useState()

  useEffect(() => {
    if (isAuthenticated)
    getAccessTokenSilently()
    .then(data => console.log(data))
  }, [isAuthenticated])

  return (
    <div className="App">
      <h1>Auth0 App</h1>
      {
        isAuthenticated ?
        <>
          <pre><code>{JSON.stringify(user, null, ' ')}</code></pre>
          <LogoutButton />
        </>
        :
        <LoginButton />
      }
    </div>
  )
}

export default App
