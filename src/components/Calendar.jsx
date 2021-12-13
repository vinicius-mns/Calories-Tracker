import React from 'react';
import { useState } from 'react';
import cross from '../ideal/cross.png'
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
  const [ component, setComponent ] = useState('modal')

  function handleClick({target:{id}}) {
    const day = id - 1 

    setDay(day)
    setModal(true)
  }

  function handleChange({target:{value}}) {
    const array = value.split(' ')
    
    // calorias
    array.forEach((keyWord, index) => {
      const kcals = [ 'kcal', 'kcals', 'calorias', 'caloria' ]
      const kcal = () => kcals.includes(keyWord.toLowerCase())

      if( kcal() ) {
        const value = array[ index-1 ]

        value < 200 && setKcal('aa')
        value >= 200 && setKcal('bb')
        value >= 400 && setKcal('cc')
        value >= 600 && setKcal('dd')
        value >= 800 && setKcal('ee')
        value >= 1000 && setKcal('ff')
        value >= 1200 && setKcal('gg')
        value >= 2500 && setKcal('ii')
      }
    })
    
    // exercicio
    array.forEach((keyWord, index) => {
      const anterior = array[ index - 1] // palavra aterior a 'exercicios'
      const anterior2x = array[ index - 2 ] // palavra anterio a palavra anterior
      const anterior3x = array[ index - 3 ]

      const exercicios = [ 'exercicio', 'exercício', 'exercicios', 'exercícios' ]
      const exercitei = [ 'exercitei' ]
      const exercicio = (parametro) => parametro.includes(keyWord.toLowerCase())

      const fizExercicio = anterior === 'fiz' && exercicio( exercicios )
      const MeExercitei = anterior === 'me' && exercicio( exercitei )

      if (  fizExercicio || MeExercitei ) {
        if( anterior2x === undefined ) {
          setExercise('sim')
        } else if ( anterior2x === 'não' || anterior2x === 'nao'  ) {
          setExercise('nao')
        } else {
          setExercise('sim')
        }
      }

      if( anterior === 'feito' && exercicio( exercicios )) {
        if( anterior3x === 'não' || anterior3x === 'nao' ) {
          setExercise('nao')
        }
      }
    })
  }

  function Modal() {
    return(
      <div className={`${component}`}>
        <div className='header'>
          <h2>Dia {day}</h2>
          <button onClick={ closeModal } ><img src={cross} alt='fechar' /></button>
        </div>

        <div className='main'>
          <p>Diário</p>
          <textarea
            onChange={ handleChange }
            cols="30"
            rows="10"
            placeholder='Comi 800 calorias e não fiz exercicios' 
          />
        </div>

        <div className='final' >
          <div className='result box'>
            <div className={`circulo ${exercise} ${kcal}`}/>
          </div>

          <div className='box'>
            <button onClick={ closeModal }>Confirmar</button>
            <button onClick={ closeModal } >Deletar</button>
          </div>
        </div>
      </div>
    )
  }

  function closeModal() {
    setComponent('desmontar')
    setTimeout(() => {
      setModal(false)
      setComponent('modal')
    }, 500);
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
