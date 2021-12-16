import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import { months } from '../data/months';

export default function Home() {

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

    console.log(months[date.year][date.month])
  },[])

  return(
    <div>
      <div className='card_component'>
        <Link className='link' to='/calendar_tracker'><button>Calorias</button></Link>
        <Link className='link' to='/weight_tracker'><button>Peso</button></Link>
        <Link className='link' to='/help'><button>Help</button></Link>
      </div>
    </div>
  );
}
