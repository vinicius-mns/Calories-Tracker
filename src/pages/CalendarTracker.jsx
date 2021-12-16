import React from 'react';
import '../styles/calendarTracker.css'
import Calendar from '../components/Calendar';
import Table from '../components/Table';
import arvore from '../ideal/arvore.png'

export default function CalendarTracker({match:{params:{monthPath}}}) {
  return(
    <div className='calendarTracker'>
      <h1>Calendário</h1>
      <h2>{monthPath}</h2>
      <Calendar />
      <img src={arvore} alt="arvore" className='arvore' />
      <Table />
    </div>
  );
}
