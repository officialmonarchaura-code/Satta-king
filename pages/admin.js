import { useState } from 'react';

export default function Admin() {
  const [form, setForm] = useState({ gameName: '', number: '', time: '' });
  const update = async () => {
    await fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Number Updated Successfully!');
  };
  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Admin Panel - Update Results</h2>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto', gap: '10px' }}>
        <input placeholder="Game Name (e.g. Gali)" onChange={e => setForm({...form, gameName: e.target.value})} style={{ padding: '10px' }} />
        <input placeholder="Result Number" onChange={e => setForm({...form, number: e.target.value})} style={{ padding: '10px' }} />
        <input placeholder="Time (e.g. 11:00 PM)" onChange={e => setForm({...form, time: e.target.value})} style={{ padding: '10px' }} />
        <button onClick={update} style={{ padding: '10px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>Update Now</button>
      </div>
    </div>
  );
}

