import { useState } from 'react';
import axios from 'axios';

export default function BugForm({ onBugAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/bugs', { title, description });
    onBugAdded();
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Bug title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Bug description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Report Bug</button>
    </form>
  );
}
