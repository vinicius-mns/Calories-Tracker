import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { months } from '../data/months';
import '../styles/home.css';

export default function Home() {
  const [ month, setMonth ] = useState('nada')
  
  useEffect(() => {
    const date = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }
    
    switch (date.year) {
      case 2021:
        date.year = 'xxi'
        break;
      case 2022:
        date.year = 'xxii'
        break
      default:
        break;
    }

    setMonth(months[date.year][date.month])

  },[])

  return(
    <div>
      <div className='card_component'>
        <Link className='link' to={`/calendar_tracker/${ month.month }`}><button>Calorias</button></Link>
        <Link className='link' to='/weight_tracker'><button>Peso</button></Link>
        <Link className='link' to='/help'><button>Help</button></Link>
      </div>
    </div>
  );
}