import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/friends").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof backendData.friends === 'undefined') ? ( 
        <p>Loading...</p>
      ) : (
        backendData.friends.map((friend, i) => (
          <p key={i}>{friend}</p>
        ))
      )}

    </div>
  )
}

export default App