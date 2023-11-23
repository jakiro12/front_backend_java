import '../../css/styles.css'
import { useState, useEffect } from 'react'
export default function CreateNewGlassCompany(){
    const [companiesList, setCompaniesList] = useState([]);
    const [companyData,setcompanyData]=useState({
       nameCompany:'' ,
       companyAdress:'',
       phone:'',
       email:'',
       companyType:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcompanyData({ ...companyData, [name]: value });
      };
      useEffect(() => {
        // Cargar los datos de localStorage al montar el componente
        const storedCompanies = JSON.parse(localStorage.getItem('/empresas'));
        if (storedCompanies) {
            setCompaniesList(storedCompanies);
        }
    }, []);
    const sendNewCompanyData=(e)=>{
        e.preventDefault()
        const updatedCompaniesList = [...companiesList, companyData];
        setCompaniesList(updatedCompaniesList);
        localStorage.setItem('/empresas', JSON.stringify(updatedCompaniesList));
        setcompanyData({
            nameCompany:'' ,
            companyAdress:'',
            phone:'',
            email:'',
            companyType:''
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
            body: JSON.stringify(companyData),
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
        <form className='create_company_form_styles' onSubmit={sendNewCompanyData}>
            <p>Crear Empresa</p>
            <div className='data_from_form'>
                <label htmlFor="">Nombre</label>
                <input type="text" 
                name="nameCompany"  
                value={companyData.nameCompany}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className='data_from_form'>
                <label htmlFor="">Domicilio</label>
                <input type="text" 
                name="companyAdress"  
                value={companyData.companyAdress}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className='data_from_form'>
                <label htmlFor="">Telefono</label>
                <input type="text" 
                name="phone"  
                value={companyData.phone}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className='data_from_form'>
                <label htmlFor="">Correo</label>
                <input type="text"
                 name="email"  
                value={companyData.email}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className='data_from_form'>
                <label htmlFor="">Tipo de Empresa</label>
                <input type="text" 
                name="companyType"
                value={companyData.companyType}
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