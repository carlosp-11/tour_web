import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const data = await response.json();
      login(data.token); // Guarda el token
      console.log('Token:', data.token); // Guardar el token de forma segura
      navigate('/dashboard'); // Redirige al dashboard
    } catch (err) {
      setError(err.message);
    } finally {
        setLoading(false);
      }
  };

  return (
    <div className='d-flex row justify-content-center align-items-center py-5 my-5'>
      <div className='d-flex row justify-content-center align-items-center bg-secondary-subtle rounded-3 py-4 animate__fadeInDown' 
        animate__fadeInDown
        style={{width: 600, maxWidth: '80%'}}
      >
        <h2 className='raleway text-center fs-1'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              id="email"
              className='form-control raleway'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <label for="email">Email</label>

          </div>
          <div className="form-floating mb-3">
          <input
            type="password"
            id='password'
            className='form-control'
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Contraseña</label>
            </div>
          <button className='btn-primary w-100' type="submit" disabled={loading}>
              {loading ? 'Cargando...' : 'Acceder'}
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};


