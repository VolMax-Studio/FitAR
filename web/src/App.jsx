import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <h1>🔥 FitAR Admin Panel</h1>
        <h2>AR Fashion Try-On Platform</h2>
        <p>by VolMax Studio</p>
        
        <div className="stats">
          <div className="stat-card">
            <h3>👥 Users</h3>
            <p>1,234</p>
          </div>
          <div className="stat-card">
            <h3>👕 Products</h3>
            <p>567</p>
          </div>
          <div className="stat-card">
            <h3>💰 Revenue</h3>
            <p>$12,345</p>
          </div>
        </div>

        <div className="actions">
          <button onClick={() => setCount(count + 1)}>
            🚀 Test Counter: {count}
          </button>
          <button>📊 View Analytics</button>
          <button>🛍️ Manage Products</button>
        </div>

        <div className="status">
          <p>✅ Backend: Connected to port 5000</p>
          <p>✅ Frontend: Running on port 3000</p>
        </div>
      </div>
    </div>
  )
}

export default App
