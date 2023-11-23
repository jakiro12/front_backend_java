import '../../css/styles.css'
import { useState,useEffect } from 'react'
export default function CreateNewGlassItem (){
    const [displayData,setDisplayData]=useState([])
    const [glassData,setGlassData]=useState({
        glassName:'',
        glassCode:'',
        glassPrice:'',
        glassType:'Rojo',
        antenna:'Rojo',
        sensor:'Rojo',
    })
    useEffect(() => {
      // Cargar los datos de localStorage al montar el componente
      const storedGlass = JSON.parse(localStorage.getItem('/vidrios'));
      if (storedGlass) {
          setDisplayData(storedGlass);
      }
  }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGlassData({ ...glassData, [name]: value });
      };
    const SendNewGlassItem=(e)=>{
        e.preventDefault()
        const glassToDispatch=[...displayData,glassData]
        setDisplayData(glassToDispatch)
        localStorage.setItem('/vidrios', JSON.stringify(glassToDispatch));
        setGlassData({
          glassName:'',
          glassCode:'',
          glassPrice:'',
          glassType:'Rojo',
          antenna:'Rojo',
          sensor:'Rojo',
      })
    }
       // AQUI ESTA LA FUNCION PARA ENVIAR UN POST A SU BASE DE DATOS, LE URL ES FICTICIA
   /* const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    
        try {
          const response = await fetch('URL_DE_TU_ENDPOINT', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(glassData),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('Respuesta:', responseData);
          } else {
            console.error('Error al realizar la solicitud:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
        */
    return(
        <form className='create_glass_form_styles' onSubmit={SendNewGlassItem}>
            <p>Crear Vidrio</p>
            <div className='data_from_form'>
            <label htmlFor="">Nombre</label>
                <input type="text" 
                name="glassName"  
                value={glassData.glassName}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Codigo</label>
                <input type="text" 
                name="glassCode"  
                value={glassData.glassCode}
                onChange={handleInputChange}
                
                required
                />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Precio</label>
                <input type="text" 
                name="glassPrice"  
                value={glassData.glassPrice}
                onChange={handleInputChange}
                
                required
                />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Tipo de Vidrio</label>
            <select  
              name="glassType"
              value={glassData.glassType}
              onChange={handleInputChange}
              >
                <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Antena</label>
            <select  name="antenna"
                     value={glassData.antenna}
                     onChange={handleInputChange}>
                <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Sensor</label>
            <select name="sensor"
                      value={glassData.sensor}
                     onChange={handleInputChange}>
                <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='btn_data_form'>
                <button type='submit'>Crear</button>
                <button>Limpiar</button>
            </div>
        </form>
    )
}