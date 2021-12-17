import React from 'react';
import cross from '../ideal/cross.png'

export default function Modal({ component, closeModal, handleChange, day, exercise, kcal, save, delet }) {
  return(
    <div className={component}>
      <div className='header'>
        <h2>Dia {day}</h2>
        <button onClick={ closeModal } ><img src={cross} alt='fechar' /></button>
      </div>

      <div className='main'>
        <h3>Diário</h3>
        <textarea
          onChange={ handleChange }
          cols="30"
          rows="10"
          className={`diary${day}`}
          placeholder='Comi 800 calorias e não fiz exercicios'
        />
      </div>

      <div className='final' >
        <div className='result box'>
          <div className={`circulo ${exercise} ${kcal}`}/>
        </div>

        <div className='box'>
          <button onClick={ save }>Confirmar</button>
          <button onClick={ delet } >Deletar</button>
        </div>
      </div>
    </div>
  )
}