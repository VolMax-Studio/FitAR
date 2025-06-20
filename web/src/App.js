import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dummy data for demo
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);
    
    setProducts([
      { id: 1, name: 'Nike Air Max', price: '$120', category: 'Shoes' },
      { id: 2, name: 'Adidas T-shirt', price: '$45', category: 'Clothing' }
    ]);
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🔥 FitAR Admin Panel</h1>
        <p>AR Fashion Try-On Platform</p>
        <p>by VolMax Studio</p>
      </header>

      <main className="dashboard">
        <section className="stats">
          <div className="stat-card">
            <h3>👥 Users</h3>
            <p className="stat-number">{users.length}</p>
          </div>
          <div className="stat-card">
            <h3>👕 Products</h3>
            <p className="stat-number">{products.length}</p>
          </div>
          <div className="stat-card">
            <h3>📱 AR Sessions</h3>
            <p className="stat-number">156</p>
          </div>
          <div className="stat-card">
            <h3>💰 Revenue</h3>
            <p className="stat-number">$2,340</p>
          </div>
        </section>

        <section className="data-tables">
          <div className="table-section">
            <h2>Recent Users</h2>
            <div className="table-container">
              {users.map(user => (
                <div key={user.id} className="table-row">
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="table-section">
            <h2>Popular Products</h2>
            <div className="table-container">
              {products.map(product => (
                <div key={product.id} className="table-row">
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                  <span>{product.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="status">
          <p>✅ Admin Panel: Active</p>
          <p>🔗 Backend: Connected</p>
          <p>📱 Mobile: Ready</p>
        </div>
      </main>
    </div>
  );
}

export default App;
