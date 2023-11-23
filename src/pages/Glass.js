//import { useState, useEffect } from 'react';
import FooterView from '../components/Footer';
import NavBarToSelectModel from '../components/NavBar';
import CreateNewGlassItem from '../components/formsHandlers/CreateNewGlass';
import '../css/styles.css';


export default function CreateNewGlass(){
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
    return(
        <article className='glass_container'>
            <NavBarToSelectModel/>
            <CreateNewGlassItem/>
            <FooterView/>
        </article>
    )
}