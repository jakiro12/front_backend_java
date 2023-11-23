import { useState } from 'react';
import '../css/styles.css';
import { useNavigate } from 'react-router-dom'; 


export default function NavBarToSelectModel() {
    const navigation = useNavigate();
    const [selectedOption, setSelectedOption] = useState('Empresas');
    const [dataFinder,setDataFinder]=useState('')
    const navigateOptions = {
        Vidrios: '/vidrios',
        Empresas: '/empresas',
        Modelos: '/modelos',
        Orden: '/orden'
    };
    const handleInputChange = (e) => {
      setDataFinder(e.target.value)
    };
    const paths=window.location.pathname
    const handleNavigation = (event) => {
        const selectedOption = event.target.value;
        setSelectedOption(selectedOption);

        if (navigateOptions[selectedOption]) {
            navigation(navigateOptions[selectedOption]);
        }
    };
    const submitFinder=(e)=>{
      e.preventDefault()
      const item = localStorage.getItem(`${paths}`);
      const allDataStored=JSON.parse(item)
      let nameObject=Object.keys(allDataStored[0])[0]
      const findNames=JSON.parse(item).find(e=>e[`${nameObject}`] === `${dataFinder}`)
      if (item  && findNames !== undefined ) {
        localStorage.setItem('data',JSON.stringify(findNames))
        navigation('/item')
      } else {
        console.log('El ítem no existe en el localStorage');
      }
      setDataFinder('')
    }
    return (
        <nav className='navigation_container'>
            <p>Nombre Del Tipo</p>
            <form className='finder_data' onSubmit={submitFinder}>
                <input 
                type="text"
                value={dataFinder}
                onChange={handleInputChange}
                 placeholder='Buscar ....' />
                <button type='submit'>&#128269;</button>
            </form>
            <div className="options-selected">
                <select name="" onChange={handleNavigation} value={selectedOption}>
                    <option value="Empresas">Empresas</option>
                    <option value="Vidrios">Vidrios</option>
                    <option value="Modelos">Modelos</option>
                    <option value="Orden">Orden</option>
                </select>
            </div>
        </nav>
    );
}
