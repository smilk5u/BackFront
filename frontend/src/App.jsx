import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function getHello() {
    const greet = document.getElementById('greet')
    fetch(import.meta.env.VITE_API_SERVER + '/api/hello')
      .then(response => response.json())
      .then(data => greet.innerHTML = JSON.stringify(data))
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(getHello)

  return (
    <div className="App">  
      <header className="App-header"> 
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count} 민주짜응
          </button>
        </p>
        <p>
          api called: <code id="greet"></code>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link" 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App