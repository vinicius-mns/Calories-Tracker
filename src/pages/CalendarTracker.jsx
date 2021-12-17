import React,{ useState } from 'react';
import '../styles/calendarTracker.css'
import Calendar from '../components/Calendar';
import Table from '../components/Table';
import arvore from '../ideal/arvore.png'

export default function CalendarTracker({match:{params:{monthPath}}}) {
  const [ monthModal, setMonthModal ] = useState(false)

  function monthModalTrue() {
    setMonthModal(true)
  }
  
  function closeMonthModal() {
    setMonthModal(false)
  }

  return(
    <div className='calendarTracker'>
      <h1>Calendário</h1>
      <button onClick={ monthModalTrue } ><h2>{monthPath}</h2></button>
      <Calendar monthModal={ monthModal } closeMonthModal={ closeMonthModal } />
      <img src={arvore} alt="arvore" className='arvore' />
      <Table />
    </div>
  );
}
