import { useState, useEffect } from 'react';

export default function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/api/results').then(res => res.json()).then(data => setResults(data));
    const interval = setInterval(() => {
      fetch('/api/results').then(res => res.json()).then(data => setResults(data));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ background: 'darkred', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1>SATTA KING LIVE</h1>
        <p>Sabse Tez Update</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '20px auto', padding: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {results.map((item) => (
            <div key={item.gameName} style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#333' }}>{item.gameName}</h2>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'darkblue' }}>
                {item.number || '--'}
              </div>
              <p style={{ color: '#666' }}>Time: {item.time}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

