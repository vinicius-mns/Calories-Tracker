import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { months } from '../data/months';
import '../styles/home.css';

export default function Home() {
  const [ month, setMonth ] = useState('nada')
  
  useEffect(() => {
    const date = {
      month: new Date().getMonth()
    }
    
     switch (date.month) {
      case 11:
        date.month = 'Dezembro'
         break;
      case 0:
        date.month = 'Janeiro'
        break;
      case 1:
        date.month = 'Favereiro'
        break;
       default:
         break;
     }

    setMonth(months[date.month])

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