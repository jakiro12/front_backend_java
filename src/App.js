import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigation = useNavigate();
  
  

  return (
    <article className='app_loginsuccess'>
      <h1>Bienvenido a la APP</h1>
      <button onClick={()=>navigation('/empresas')} >Ingresar</button>
      </article>
  );
}

export default App;
