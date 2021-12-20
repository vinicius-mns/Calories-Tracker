import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import handleMonth from '../data/months';
import '../styles/home.css';

export default function Home() {
  const [ month, setMonth ] = useState('nada')
  
  useEffect(() => {
    const ano = new Date().getFullYear()
    const mes = new Date().getMonth()

    setMonth(handleMonth(ano, mes).month)
  },[])

  return(
    <div>
      <div className='card_component'>
        <Link className='link' to={`/calendar_tracker/${ month }`}><button>Calorias</button></Link>
        <Link className='link' to='/weight_tracker'><button>Peso</button></Link>
        <Link className='link' to='/help'><button>Help</button></Link>
      </div>
    </div>
  );
}