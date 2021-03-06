/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import handleMonth from '../data/months';
import '../styles/calendar.css'
import '../styles/modal.css';
import DeletModal from './DeletModal';
import Modal from './Modal';
import ModalMonths from './ModalMonths';

export default function Calendar({ monthModal, closeMonthModal, toggleClass }) {
  const history = useHistory()
  const DAYS_OF_WEEk = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

  const [arrayDays, setArrayDays] = useState([])
  const [modal, setModal] = useState(false)
  const [month, setMonth] = useState(history.location.pathname.split('/')[2])
  const [day, setDay] = useState('')
  const [kcal, setKcal] = useState('')
  const [exercise, setExercise] = useState('')
  const [component, setComponent] = useState('modal')
  const [diaryText, setDiaryText] = useState('')
  const [deletModal, setDeletModal] = useState(false)
  const [key, setKey] = useState('')
  const [keyDay, setKeyDay] = useState('')
  const [modalDeletClass, setModalDeletClass] = useState('deletModal')
  const [year, setYear] = useState(history.location.pathname.split('/')[3])

  function clickOnDay({ target: { id } }) {
    if( id.length > 5 ) {
      const keyDay = arrayDays.findIndex((a) => a == id)

      setDay(Number(id.split(',')[3]))
      setModal(true)
      diary(keyDay, id.split(',')[3])
      setKeyDay(keyDay)
    } else if( id !== ' ' ) {
      const keyDay = arrayDays.findIndex((index) =>  index === Number(id))
      setDay(id)
      setModal(true)
      diary(keyDay, id)
      setKeyDay(keyDay)
    }
    toggleClass()
  }

  function tratamento() {
    if (exercise === 'nao') {
      return [kcal, 'no', diaryText, day]
    }

    if (exercise === 'sim') {
      return [kcal, 'yes', diaryText, day]
    }

    if (exercise === '') {
      return [kcal, 'no', diaryText, day]
    }
  }

  function save() {
    if (kcal === '') {
      closeModal()
    } else {
      arrayDays.splice(keyDay, 1, tratamento())
      localStorage.setItem(key, JSON.stringify(arrayDays))
      closeModal()
    }
  }

  function handleChange({ target: { value } }) {
    const array = value.split(' ')
    setDiaryText(value)

    // calorias
    array.forEach((keyWord, index) => {
      const kcals = ['kcal', 'kcals', 'calorias', 'caloria']
      const kcal = () => kcals.includes(keyWord.toLowerCase())

      if (kcal()) {
        const value = array[index - 1]
        setKcal(value)

        // value < 200 && setKcal('aa')
        // value >= 200 && setKcal('bb')
        // value >= 400 && setKcal('cc')
        // value >= 600 && setKcal('dd')
        // value >= 800 && setKcal('ee')
        // value >= 1000 && setKcal('ff')
        // value >= 1200 && setKcal('gg')
        // value >= 2500 && setKcal('ii')
      }
    })

    // exercicio
    array.forEach((keyWord, index) => {
      const anterior = array[index - 1] // palavra aterior a 'exercicios'
      const anterior2x = array[index - 2] // palavra anterio a palavra anterior
      const anterior3x = array[index - 3]

      const exercicios = ['exercicio', 'exerc??cio', 'exercicios', 'exerc??cios']
      const exercitei = ['exercitei']
      const exercicio = (parametro) => parametro.includes(keyWord.toLowerCase())

      const fizExercicio = anterior === 'fiz' && exercicio(exercicios)
      const MeExercitei = anterior === 'me' && exercicio(exercitei)

      if (fizExercicio || MeExercitei) {
        if (anterior2x === undefined) {
          setExercise('sim')
        } else if (anterior2x === 'n??o' || anterior2x === 'nao') {
          setExercise('nao')
        } else {
          setExercise('sim')
        }
      }

      if (anterior === 'feito' && exercicio(exercicios)) {
        if (anterior3x === 'n??o' || anterior3x === 'nao') {
          setExercise('nao')
        }
      }
    })
  }

  function diary(indexDay, day) {
    const text = arrayDays[indexDay][2]

    if (text !== undefined) {
      setTimeout(() => {
        document.querySelector(`.diary${day}`).innerHTML = text
      }, 200);
    }
  }

  function delet() {
    setDeletModal(true)
  }

  function deletYes() {
    arrayDays.splice(keyDay, 1, day)
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

  function closeModal() {
    setComponent('desmontar')
    setTimeout(() => {
      setModal(false)
      setComponent('modal')
      setExercise('')
      setKcal('')
    }, 400);
    toggleClass()
  }

  function setNewMonth({ target: { id } }) {
    const array = id.split(' ')
    const mes = array[0]
    const ano = array[1]
    history.push(`/calendar_tracker/${mes}/${ano}`)
    setMonth(history.location.pathname.split('/')[2])
    setYear(history.location.pathname.split('/')[3])
    closeMonthModal()
  }

  useEffect(() => {
    const obj = handleMonth(year, month)
    const keyStorage = obj.result.storage
    const days = obj.result.days

    if (localStorage.getItem(keyStorage) === null) {
      localStorage.setItem(keyStorage, JSON.stringify(days))
      setKey(keyStorage)
      setArrayDays(days)
    } else {
      setKey(keyStorage)
      setArrayDays(JSON.parse(localStorage.getItem(keyStorage)))
    }

  }, [month, year])

  return (
    <div className='calendar'>
      {monthModal && <ModalMonths closeMonthModal={ closeMonthModal } setNewMonth={ setNewMonth } />}
      {deletModal &&
        <DeletModal modalDeletClass={modalDeletClass}
          day={day}
          deletNo={deletNo}
          deletYes={deletYes} />
      }
      {modal &&
        <Modal component={component}
          closeModal={closeModal}
          handleChange={handleChange}
          day={day}
          exercise={exercise}
          kcal={kcal}
          save={save}
          delet={delet}
        />}
      <div className='container'>
        {
          DAYS_OF_WEEk.map((days) => <button>{<p>{days}</p>}</button>)
        }
      </div>
      <div className='container days'>
        {
          arrayDays.map((day) => <button onClick={clickOnDay} >
            {
              typeof (day) === 'object' ? <span id={day}>{day[0]}</span>
                : <p id={day}>{day}</p>
            }
          </button>)
        }
      </div>
    </div>
  )
}
