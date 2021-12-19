import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { months as objectMonths } from '../data/months';
import '../styles/calendar.css'
import '../styles/modal.css';
import DeletModal from './DeletModal';
import Modal from './Modal';
import ModalMonths from './ModalMonths';

export default function Calendar({ monthModal, closeMonthModal }) {
  const history = useHistory()
  const DAYS_OF_WEEk = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

  const [indexDay, setIndexDay] = useState('')
  const [arrayDays, setArrayDays] = useState([])
  const [modal, setModal] = useState(false)
  const [path, setPath] = useState(history.location.pathname.split('/')[2])
  const [day, setDay] = useState('')
  const [kcal, setKcal] = useState('')
  const [exercise, setExercise] = useState('')
  const [component, setComponent] = useState('modal')
  const [diaryText, setDiaryText] = useState('')
  const [deletModal, setDeletModal] = useState(false)
  const [key, setKey] = useState('')
  const [modalDeletClass, setModalDeletClass] = useState('deletModal')

  function clickOnDay({ target }) {
    const { id } = target
    console.log(target)
    if(id !== ' ') {
      setDay(id)
      setIndexDay(id)
      setModal(true)
      diary(id)
    }
  }

  function tratamento() {
    if (exercise === 'nao') {
      return [kcal, 'no', diaryText]
    }

    if (exercise === 'sim') {
      return [kcal, 'yes', diaryText]
    }

    if (exercise === '') {
      return [kcal, 'nao', diaryText]
    }
  }

  function save() {
    if (kcal === '') {
      closeModal()
    } else {
      arrayDays.splice(indexDay, 1, tratamento())
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
      const anterior = array[index - 1] // palavra aterior a 'exercicios'
      const anterior2x = array[index - 2] // palavra anterio a palavra anterior
      const anterior3x = array[index - 3]

      const exercicios = ['exercicio', 'exercício', 'exercicios', 'exercícios']
      const exercitei = ['exercitei']
      const exercicio = (parametro) => parametro.includes(keyWord.toLowerCase())

      const fizExercicio = anterior === 'fiz' && exercicio(exercicios)
      const MeExercitei = anterior === 'me' && exercicio(exercitei)

      if (fizExercicio || MeExercitei) {
        if (anterior2x === undefined) {
          setExercise('sim')
        } else if (anterior2x === 'não' || anterior2x === 'nao') {
          setExercise('nao')
        } else {
          setExercise('sim')
        }
      }

      if (anterior === 'feito' && exercicio(exercicios)) {
        if (anterior3x === 'não' || anterior3x === 'nao') {
          setExercise('nao')
        }
      }
    })
  }

  function diary(index) {
    const text = arrayDays[index][2]

    if (text !== undefined) {
      setTimeout(() => {
        document.querySelector(`.diary${index - 1}`).innerHTML = text
      }, 200);
    }
  }

  function delet() {
    setDeletModal(true)
  }

  function deletYes() {
    arrayDays.splice(indexDay, 1, day)
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
  }

  function setNewMonth({ target: { id } }) {
    const array = id.split(' ')
    console.log(array)
    history.push(`/calendar_tracker/${array[0]}`)
    setPath(history.location.pathname.split('/')[2])
    closeMonthModal()
  }

  useEffect(() => {
    if (localStorage.getItem(objectMonths[path].storage) === null) {
      localStorage.setItem(objectMonths[path].storage, JSON.stringify(objectMonths[path].days))
      setKey(objectMonths[path].storage)
      setArrayDays(objectMonths[path].days)
    } else {
      setKey(objectMonths[path].storage)
      setArrayDays(JSON.parse(localStorage.getItem(objectMonths[path].storage)))
    }

  }, [path])

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
              typeof (day) === 'object' ? <span id={day} className={`circulo2 ${day[0]} ${day[1]}`} />
                : <p id={day}>{day}</p>
            }
          </button>)
        }
      </div>
    </div>
  )
}