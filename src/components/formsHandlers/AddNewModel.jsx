import '../../css/styles.css'
import { useState, useEffect } from 'react'
export default function CreateNewModel(){
    const [displayModel,setDisplayModel]=useState([])
    const [modelType,setModelType]=useState({
        model:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModelType({ ...modelType, [name]: value });
      };
      useEffect(() => {
        // Cargar los datos de localStorage al montar el componente
        const storedModel = JSON.parse(localStorage.getItem('/modelos'));
        if (storedModel) {
            setDisplayModel(storedModel);
        }
    }, []);
    const sendNewModelValue=(e)=>{
        e.preventDefault()
        const modelToDispatch=[...displayModel,modelType]
        setDisplayModel(modelToDispatch)
        localStorage.setItem('/modelos', JSON.stringify(modelToDispatch));
        setModelType({
            model:''
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
            body: JSON.stringify(modelType),
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
        <form className='create_model_form_styles' onSubmit={sendNewModelValue}>
            <p>Agregar Modelo</p>
            <div className='data_from_form'>
                <label htmlFor="">Nombre</label>
                <input type="text" 
                name='model'
                value={modelType.model}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className='btn_data_form'>
                <button type='submit'>Crear</button>
                <button>Limpiar</button>
                </div>
        </form>
    )
}