import FooterView from '../components/Footer';
import NavBarToSelectModel from '../components/NavBar';
import NewOrderToSend from '../components/formsHandlers/CreateNewOrder';
import '../css/styles.css';
//import { useState, useEffect } from 'react';


export default function OrderToHandleProducts(){
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
        <article className='order_container'>
            <NavBarToSelectModel/>
            <NewOrderToSend/>
            <FooterView/>
        </article>
    )
}