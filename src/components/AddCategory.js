import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');//dejamos comillas simples para que no lance un error por undefined 

    const handleInputChange = (e) => {
        setInputValue(e.target.value);//se extrae el valor del evento onChange, es decir el valor que estamos escribiendo ya que se es el cambio que esta recibiendo el input
    }

    const handleSubmit = (e) => {
       e.preventDefault();//Previene el comportamiento por defecto de los form, por ejemplo al dar enter en input, el form refresca la pagina, con preventDefault() ya no lo hace
                    //trim() ignora los espacios en blanco antes y depues del texto
       if( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats ]);//si ponemos los ...cats al lado derecho, los gifs que estemos buscando aparecende primero en pantalla
            setInputValue('');
       }
   
    }

  return (
    //no es necesario usar los fragment (</>) ya que el form puede envolver todo el codigo
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }//el onChange funciona al memento en que la caja de texto(input) sufre algun cambio, por ejemplo al escribir algo
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
