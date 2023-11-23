import '../../css/styles.css'
import FooterView from '../Footer'
import { useNavigate } from 'react-router-dom'
export default function ViewForItemFindIt(){
    const navigation = useNavigate();
    const getDataOfItemSelected=()=>{
        let infoItem=localStorage.getItem('data')
        let listItemData=JSON.parse(infoItem)
        return (
            <div className='item_selected_card'>
              <h1>Datos </h1>
              <div className='data_item_selected'>
                {Object.entries(listItemData).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}</strong> {value}
                  </p>
                ))}
              </div>
              <div className='card_btns_item'>
              <button>Eliminar</button>
              <button>Modificar</button>
              </div>
            </div>
          );
    }
        
    return(
    <article className='view_item_container'>
        <nav className='navigation_container'>
           <button className='btn_items' 
           onClick={()=>navigation(-1)}>Volver</button>
            <div className="options-selected">
                <select name="">
                    <option value="Empresas">Exportar Empresas PDF</option>
                    <option value="Vidrios">Exportar Vidrios PDF</option>
                    <option value="Modelos">Exportar Modelos PDF</option>
                    <option value="Orden">Exportar Orden PDF</option>
                </select>
            </div>
           <button className='btn_items'
           onClick={()=>navigation('/empresas')}>Inicio</button>
        </nav>
        <main className='item_selected_card_container'>
            {getDataOfItemSelected()}
        </main>
        <FooterView/>
    </article>
    )
}