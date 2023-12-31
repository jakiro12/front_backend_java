import NavBarToSelectModel from '../components/NavBar';
import '../css/styles.css'
import CreateNewGlassCompany from '../components/formsHandlers/CreateNewCompany';
import FooterView from '../components/Footer';
//import { useState, useEffect } from 'react';

const Companies = () => {
  /*  const [data,setData]=useState([])
     useEffect(() => {
     
        const fetchData = async () => {
          try {
            const response = await fetch('URL_DE_TU_ENDPOINT');
            if (response.ok) {
              const data = await response.json();
              setDataArray(data); // Guarda los datos en el estado 'dataArray'
            } else {
              console.error('Error al obtener los datos:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);  */
  return (
    <article className='dashboard_login_container'>
      <NavBarToSelectModel/>
      <CreateNewGlassCompany/>
      <FooterView/>
    </article>
  );
};

export default Companies;
