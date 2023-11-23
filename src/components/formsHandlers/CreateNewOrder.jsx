import '../../css/styles.css'
import { useState,useEffect } from 'react'
export default function NewOrderToSend(){
  const [oderStorage,setOrderStorage]=useState([])
  const [orderData,setOrderData]=useState({
    orderModel:'',
    orderGlass:'',
    orderDate:'',
    nameInsurance:'',
    phoneInsurance:'',
    insuranceCarrier:'',
    sinisterNumber:'',
    orderCheck:'',
    patent:'',
    isOwn:'',
    observations:'',
    orderStatus:'',
    seeOrder:false
  })
  useEffect(() => {
    // Cargar los datos de localStorage al montar el componente
    const storedOrders = JSON.parse(localStorage.getItem('/orden'));
    if (storedOrders) {
        setOrderStorage(storedOrders);
    }
}, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };
  const sendNewOrder=(e)=>{
    e.preventDefault()
    const orderToDispatch=[...oderStorage,orderData]
    setOrderStorage(orderToDispatch)
    localStorage.setItem('/orden', JSON.stringify(orderToDispatch));
    setOrderData({
      orderModel:'',
      orderGlass:'',
      orderDate:'',
      nameInsurance:'',
      phoneInsurance:'',
      insuranceCarrier:'',
      sinisterNumber:'',
      orderCheck:'',
      patent:'',
      isOwn:'',
      observations:'',
      orderStatus:'',
      seeOrder:false
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
            body: JSON.stringify(orderData),
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
        <div className='order_form_container'>
        <form className='create_order_form_styles' onSubmit={sendNewOrder}>
            <p>Orden</p>
            <div className='data_from_form'>
            <label htmlFor="">Modelo</label>
              <select 
              name="orderModel" 
              value={orderData.orderModel}
              onChange={handleInputChange}
              >
                <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Vidrio</label>
              <select 
              name="orderGlass" 
              value={orderData.orderGlass}
              onChange={handleInputChange}
              >
                 <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Fecha</label>
                <input type="text" 
                name='orderDate'
                value={orderData.orderDate}
                onChange={handleInputChange}
                required
                  />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Nombre de Asegurado</label>
                <input type="text" 
                name='nameInsurance'
                value={orderData.nameInsurance}
                onChange={handleInputChange}
                required
                  />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Telefono de Asegurado</label>
                <input type="text" 
                name='phoneInsurance'
                value={orderData.phoneInsurance}
                onChange={handleInputChange}
                required
                  />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Aseguradora</label>
              <select name="insuranceCarrier" 
                value={orderData.insuranceCarrier}
                onChange={handleInputChange}
                >
               <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Numero de siniestro</label>
                <input type="text" 
                name='sinisterNumber'
                value={orderData.sinisterNumber}
                onChange={handleInputChange}
                required
                  />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Orden</label>
              <select name="orderCheck" 
                value={orderData.orderCheck}
                onChange={handleInputChange}
              >
                <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Patente</label>
                <input type="text" 
                name='patent'
                value={orderData.patent}
                onChange={handleInputChange}
                required
                  />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Propio</label>
              <select 
                name="isOwn" 
                value={orderData.isOwn}
                onChange={handleInputChange}
              >
                <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Observaciones</label>
                <input type="text" 
                  name='observations'
                  value={orderData.observations}
                  onChange={handleInputChange}
                  required
                  />
            </div>
            <div className='data_from_form'>
            <label htmlFor="">Estado</label>
              <select 
              name="orderStatus" 
              value={orderData.orderStatus}
              onChange={handleInputChange}
              >
                 <option value="Rojo">Rojo</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className='data_from_form_see_order'>
            <label htmlFor="">Mostrat Orden</label>
              <input 
              type='checkbox'
              name='seeOrder'
              checked={orderData.seeOrder}
              onChange={handleInputChange}
              />
            </div>
            <div className='btn_data_form'>
                <button type='submit'>Crear</button>
                <button>Limpiar</button>
                </div>
        </form>
        </div>
    )
}