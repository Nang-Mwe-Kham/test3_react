import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState('')

  async function fetchData() {
    const result = await fetch('http://localhost:3000/api/test_api')
    const data = await result.json()
    console.log("result", result)
    setMessage(data.message)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>message:{message}</h1>
    </div>
  )
}

export default App
