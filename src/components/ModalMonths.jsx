import React, { useState } from "react"
import cross from '../ideal/cross.png'
import { months } from "../data/months"

export default function ModalMonths({ closeMonthModal, setNewMonth }) {
  const [ calendar ] = useState(Object.entries(months))

    return (
      <div className='modalMonths'>
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
                    <h3 id={`${month} ${year[0]}`} >{`${month} ${year[0]}`}</h3>
                  </button>
                ))
              }
                <button onClick={ () => localStorage.clear() }>Clear All</button>
            </div>
            )
          }
        </div>
      </div>
    )
  }