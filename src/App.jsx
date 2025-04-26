import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Paroolid ei kattu!');
      return;
    }

    // Siin Reactis me EI tee kasutajanime kontrolli serverist
    setSuccessMessage('Edukalt registreeritud!');
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
<main style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
    Reacti abil loodud registreerimisvorm
  </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label htmlFor="username">Kasutajanimi</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-post</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Parool</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Kinnita parool</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {errorMessage && <div style={{ color: 'red', marginTop: '0.5rem' }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: 'green', marginTop: '0.5rem' }}>{successMessage}</div>}

        <button type="submit" style={{ marginTop: '1rem' }}>Registreeru</button>
      </form>
    </main>
  );
}

export default App;
