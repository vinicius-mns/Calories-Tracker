import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import handleMonth from '../data/months';
import '../styles/home.css';

export default function Home() {
  const [ month, setMonth ] = useState('')
  const [ year ] = useState( new Date().getFullYear() )
  
  useEffect(() => {
    const mes = new Date().getMonth()

    setMonth(handleMonth(year, mes).month)
  },[year])

  return(
    <div>
      <div className='card_component'>
        <Link className='link' to={`/calendar_tracker/${ month }/${ year }`}><button><h2>Calorias</h2></button></Link>
        <Link className='link' to='/weight_tracker'><button><h2>Peso</h2></button></Link>
        <Link className='link' to='/'><button><h2>Help</h2></button></Link>
      </div>
    </div>
  );
}