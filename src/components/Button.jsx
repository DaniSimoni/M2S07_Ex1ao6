import React, { useState } from 'react';

function Button({ texto = "Botão", tipo = "button" }) {

  function evento(e) {
    e.preventDefault();
    console.log(setNome, setCidade);
    
  }

  return (
    <div className='container container-btn'>
      <button onClick={evento} type={tipo} className="btn btn-primary m-1">
         Enviar 
     </button>
    </div>
  );
}

export default Button;