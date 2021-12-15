import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
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
