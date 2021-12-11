import React from 'react';
import { useState } from 'react';
import '../styles/calendar.css'

const december = ['x','x',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
  17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,'x','x']

const DAYS_OF_WEEk = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

export default function Calendar() {
  const [days, setDays] = useState(december)  

  return(
    <div className='calendar'>
      <div className='container'>{DAYS_OF_WEEk.map((days) => <button>{days}</button>)}</div>
      <div className='container days'>{days.map((day) => <button>{day}</button> )}</div>
    </div>
  )
}