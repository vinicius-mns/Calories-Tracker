import React,{ useState } from 'react';
import '../styles/calendarTracker.css'
import Calendar from '../components/Calendar';
import Table from '../components/Table';
import arvore from '../ideal/arvore.png'

export default function CalendarTracker({match:{params:{monthPath}}}) {
  const [ monthModal, setMonthModal ] = useState(false)
  const [ vidroClass, setVidroClass ] = useState('')

  function monthModalTrue() {
    setMonthModal(true)
    toggleClass()
  }
  
  function closeMonthModal() {
    setMonthModal(false)
    toggleClass()
  }
  function toggleClass() {
    vidroClass === 'vidro'? setVidroClass(''): setVidroClass('vidro');
  }

  return(
    <div className='calendarTracker'>
      <div className={vidroClass} />
      <h1>Calendário</h1>
      <button className='monthButton' onClick={ monthModalTrue }  ><h2>{monthPath}</h2></button>
      <Calendar monthModal={ monthModal } closeMonthModal={ closeMonthModal } toggleClass={toggleClass} />
      <img src={arvore} alt="arvore" className='arvore' />
      <Table />
    </div>
  );
}
