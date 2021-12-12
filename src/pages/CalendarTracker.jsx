import React from 'react';
import '../styles/calendarTracker.css'
import Calendar from '../components/Calendar';
import Table from '../components/Table';

export default function CalendarTracker() {
  return(
    <div className='calendarTracker'>
      <Calendar />
      <Table />
    </div>
  );
}
