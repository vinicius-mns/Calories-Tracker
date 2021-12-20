import React from "react"
import cross from '../ideal/cross.png'
// import { arrayMonths } from '../data/months';

export default function ModalMonths({ closeMonthModal, setNewMonth }) {
    return (
      <div className='modalMonths'>
        <div className='titleModalMonth'>
          <h2>Escolha o mês que deseja</h2>
          <button onClick={closeMonthModal}><img src={cross} alt="fechar" /></button>
        </div>
        <div className='containerMonth'>
          {/* {
            arrayMonths.map(({ nome, ano }) =>
              <button onClick={ setNewMonth } id={`${nome} ${ano}`} >
                <h3 id={`${nome} ${ano}`} >{`${nome} ${ano}`}</h3>
              </button>
            )
          } */}
        </div>
      </div>
    )
  }