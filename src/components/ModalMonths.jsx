import React, { useState } from "react"
import cross from '../ideal/cross.png'
import { months } from "../data/months"

export default function ModalMonths({ closeMonthModal, setNewMonth }) {
  const [ calendar ] = useState(Object.entries(months))
  const [modal, setModal] = useState(false)

  function delet() {
    localStorage.clear()
    setModal(false)
  }

  function Modal() {
    return(
      <div className="modalClearAll">
        <div className="modalClearAllText">
          Tem certeza que deseja apagar todas as informaçoes salvas em todos os meses ?
          <strong>Essa ação é permanente e não ha reversão</strong>
        </div>
        <div className="modalClearAllButtons">
          <button onClick={ () => setModal(false)} ><h3>Não</h3></button>
          <button onClick={ delet } ><h3>Sim</h3></button>
        </div>
      </div>
    )
  }
    return (
      <div className='modalMonths'>
        {
          modal && Modal()
        }
        <div className='titleModalMonth'>
          <h2>Escolha o mês que deseja</h2>
          <button onClick={closeMonthModal}><img src={cross} alt="fechar" /></button>
        </div>
        <div className='containerMonth'>
          {
            calendar.map((year) =>
            <div>
              <h2>{year[0]}</h2>
              {
                Object.keys(year[1]).map((month) => (
                  <button onClick={ setNewMonth } id={`${month} ${year[0]}`} >
                    <span id={`${month} ${year[0]}`} >{ month }</span>
                  </button>
                ))
              }
            </div>
            )
          }
          <button className="clearAll" onClick={ () => setModal(true) }>
            <p>Apagar tudo</p>
          </button>
        </div>
      </div>
    )
  }