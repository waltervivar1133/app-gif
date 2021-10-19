import React, { useState } from 'react';

export const AddCategorie = ({setcategories}) => {
  
  const [inputValue, setinputValue] = useState('');
  const [ error , setError] = useState(false)
  
  const handleInputChange = (e) => {
      setinputValue( 
        e.target.value,
        console.log(e.target.value)
      )
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 0 ){
      setcategories( cats => [ inputValue, ...cats])
      // se agrega referencia de categories del componet app para pasarle
      setinputValue('')
    }else {
      setError(true)
    }
  
 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={ inputValue}
          onChange={ handleInputChange }
          />
        {
          error &&  
          <div className="alert alert-danger my-2 alert-dismissible fade show" role="alert">
              Ingrese texto
          </div>
        }
      </form> 
  
    </>
  )
}
