import React,{ useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import handleMonth from '../data/months';
import '../styles/home.css';

export default function Home() {
  const  history = useHistory();
  const [ year ] = useState( new Date().getFullYear() );
  
  useEffect(() => {
    const mes = new Date().getMonth() // retornar um numero
    const month = handleMonth(year, mes).month

    history.push(`/calendar_tracker/${ month }/${ year }`)

  },[history, year])

  return(
    <div>
      <div className='card_component'>
        <Link className='link' to={'/repolho'}><button><h2>Calorias</h2></button></Link>
        <Link className='link' to='/weight_tracker'><button><h2>Peso</h2></button></Link>
        <Link className='link' to='/'><button><h2>Help</h2></button></Link>
      </div>
    </div>
  );
}