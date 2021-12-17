import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { months as objectMonths } from '../data/months';
import cross from '../ideal/cross.png'
import '../styles/calendar.css'
import '../styles/modal.css';

export default function Calendar() {
  const history = useHistory()
  const DAYS_OF_WEEk = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

  const [ indexDay, setIndexDay ] = useState('')
  const [ arrayDays, setArrayDays ] = useState([])
  const [ modal, setModal ] = useState(false)
  const [ path ] = useState(history.location.pathname.split('/')[2])
  const [ day, setDay ] = useState('')
  const [ kcal, setKcal ] = useState('')
  const [ exercise, setExercise ] = useState('')
  const [ component, setComponent ] = useState('modal')
  const [ diaryText, setDiaryText ] = useState('')
  const [ deletModal, setDeletModal ] = useState(false)
  const [ key, setKey ] = useState('')
  const [ modalDeletClass, setModalDeletClass ] = useState('deletModal')

  function clickOnDay({target:{id}}) {
    const day = id - 1

    setDay(day)
    setIndexDay(id)
    setModal(true)
    diary(id)
  }

  function tratamento() {
    if( exercise === 'nao' ) {
      return [ kcal, 'no', diaryText ]
    }

    if( exercise === 'sim' ) {
      return [ kcal, 'yes', diaryText ]
    }

    if( exercise === '' ) {
      return [ kcal, 'nao', diaryText ]
    }
  }

  function save() {
    if( kcal === '' ) {
      closeModal()
    } else {
      arrayDays.splice( indexDay  , 1, tratamento() ) 
      localStorage.setItem(key , JSON.stringify(arrayDays)) 
      closeModal()
    }
  }

  function handleChange({target:{value}}) {
    const array = value.split(' ')
    setDiaryText(value)
    
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

  function diary(index) {
    const text = arrayDays[index][2]

    if (text !== undefined ) {
      setTimeout(() => {
        document.querySelector(`.diary${index - 1}`).innerHTML = text
      }, 200);
    }
  }

  function delet() {
    setDeletModal(true)
  }

  function deletYes() {  
    arrayDays.splice( indexDay  , 1, day)  
    localStorage.setItem(key, JSON.stringify(arrayDays))

    closeModal()
    setModalDeletClass('deletModalDesmontar')

    setTimeout(() => {
      setDeletModal(false)
      setModalDeletClass('deletModal')

    }, 400);
  }
  

  function deletNo() {
    setModalDeletClass('deletModalDesmontar')

    setTimeout(() => {
      setDeletModal(false)
      setModalDeletClass('deletModal')
    }, 400);
  }

  function DeletModal() {
    return(
      <div className={ modalDeletClass }>
        <div><h3>Dia {day}</h3></div>
        <div><span>Tem certeza que deseja deletar o dia ?</span></div>
        <div>
          <button onClick={ deletNo }>Não</button>
          <button onClick={ deletYes }>Sim</button>
        </div>
      </div>
    )
  }

  function Modal() {
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

  function closeModal() {
    setComponent('desmontar')
    setTimeout(() => {
      setModal(false)
      setComponent('modal')
      setExercise('')
      setKcal('')
    }, 400);
  }

  useEffect(() => {
    let year = 'x'
    if( new Date().getFullYear() === 2021 ) { year = 'xxi' }
    if( new Date().getFullYear() === 2022 ) { year = 'xxii' }

    if( localStorage.getItem(`${path}_tracker_${year}`) === null ) {
      localStorage.setItem(objectMonths[year][path].storage, JSON.stringify(objectMonths[year][path].days))
      setKey(`${path}_tracker_${year}`)
      setArrayDays(objectMonths[year][path].days)
    } else {
      setKey(`${path}_tracker_${year}`)
      setArrayDays(JSON.parse(localStorage.getItem(objectMonths[year][path].storage)))
    }

  }, [path])

  return(
    <div className='calendar'>
      { deletModal && DeletModal() }
      { modal && Modal() }
      <div className='container'>
        {
          DAYS_OF_WEEk.map((days) => <button>{ <p>{days}</p> }</button>)
        }
      </div>
      <div className='container days'>
        {
          arrayDays.map((day, index) => <button onClick={ clickOnDay } id={index} >
            {
              typeof(day) === 'object' ? <span id={index} className={`circulo2 ${day[0]} ${day[1]}`} />
              : <p id={index}>{day}</p>
            }
          </button> )
        }
      </div>
    </div>
  )
}