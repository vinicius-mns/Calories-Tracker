import React from 'react';
import { useState } from 'react';
import '../styles/calendar.css'
import '../styles/modal.css';

const december = ['x','x',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
  17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,'x','x']

const DAYS_OF_WEEk = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

export default function Calendar() {
  const [ days ] = useState(december)
  const [ modal, setModal ] = useState(false)
  const [ day, setDay ] = useState('')
  const [ kcal, setKcal ] = useState('')
  const [ exercise, setExercise ] = useState('')

  function handleClick({target:{id}}) {
    const day = id - 1 

    setDay(day)
    setModal(true)
  }

  function handleChange({target:{value}}) {
    const array = value.split(' ')
    
    array.forEach((a,b) => {
      if(a === 'kcal') {
        const kal = array[ b-1 ]

        kal < 200 && setKcal('aa')
        kal >= 200 && setKcal('bb')
        kal >= 400 && setKcal('cc')
        kal >= 600 && setKcal('dd')
        kal >= 800 && setKcal('ee')
        kal >= 1000 && setKcal('ff')
        kal >= 1200 && setKcal('gg')

      }
    })
    
    array.forEach((a,b) => {
      if(a === 'exercicio' || a === 'exercício' || a === 'exercicios' || a === 'exercícios' ) {
        const fiz = array[ b - 1]
        const nao = array[ b - 2 ]

        if(fiz.toLowerCase() === 'fiz' || fiz.toLowerCase() === 'feito' ) {
          if(nao === undefined) {
            setExercise('sim')
          } else if (nao.toLowerCase() === 'nao' || nao.toLowerCase() === 'não') {
            setExercise('nao')
          } else {
            setExercise('sim')
          }
        }
      }
    })
  }

  function Modal() {
    return(
      <div className='modal'>
        <div className='header'>
          <h2>Dia {day}</h2>
          <button>X</button>
        </div>

        <div className='main'>
          <p>Diário</p>
          <textarea
            onChange={ handleChange }
            cols="30"
            rows="10"
            placeholder='Comi 800kcal e não fiz exercicios' 
          />
        </div>

        <div className='final' >
          <div className='result box'>
            <div className={`circulo ${exercise} ${kcal}`}/>
          </div>

          <div className='box'>
            <button>Confirmar</button>
            <button>Deletar</button>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className='calendar'>
      { modal && Modal() }
      <div className='container'>
        {
          DAYS_OF_WEEk.map((days) => <button>{days}</button>)
        }
      </div>
      <div className='container days'>
        {
          days.map((day, index) => <button onClick={ handleClick } id={index} >{day}</button> )
        }
      </div>
    </div>
  )
}
 