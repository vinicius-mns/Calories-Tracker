import React from 'react';
import '../styles/calendarTracker.css'
import Calendar from '../components/Calendar';
import Table from '../components/Table';

export default function CalendarTracker() {
  return(
    <div className='calendarTracker'>
      <h1>Calendário</h1>
      <h2>Dezembro</h2>
      <Calendar />
      <Table />
    </div>
  );
}
