import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import '../css/login.css'; // Importa tu archivo de estilos de CSS


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Realizamos la lógica de autenticación aca, por ejemplo, verifica credenciales.
    // Simulo un inicio de sesión exitoso aca.
    setLoggedIn(true);
    navigate('/dashboard'); // Redirige a la página de dashboard después del inicio de sesión.
  };

  if (loggedIn) {
    return null; // Si el usuario ha iniciado sesión, no se muestra el componente de inicio de sesión.
  }

  return (
    <div className="login-container">
    <div className="login-background">
    </div>
    <div className="login-content">
      <Card style={{ minWidth: 300 }}>
        <CardContent>
          <h2>Iniciar sesión</h2>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            minWidth
            onClick={handleLogin}
          >
            Ingresar
          </Button>
        </CardContent>
      </Card>
      </div>
  </div>
  );
}

export default Login;
