import React from "react";
import '../styles/table.css'

const naofez = [ ['0 a 199', 'xx', 'aa'], ['200 a 399', 'xx', 'bb'], ['400 a 599', 'xx','cc'], ['600 a 799', 'xx','dd'], ['800 a 999', 'xx','ee'], ['1000 a 1199', 'xx', 'ff'], ['1200 a infit', 'xx','gg'] ]

const fez = [ ['0 a 199', 'yy', 'aa'], ['200 a 399', 'yy', 'bb'], ['400 a 599', 'yy','cc'], ['600 a 799', 'yy','dd'], ['800 a 999', 'yy','ee'], ['1000 a 1199', 'yy', 'ff'], ['1200 a infit', 'yy','gg'] ]

export default function Table() {
  return (
    <div className="containerTable">
      <div className="table">
        <span>Nao fez Exercicios</span>
        <div className="carousel">
          {naofez.map((kcal) => (
            <div className="box">
              <div className={ `${kcal[1]} ${kcal[2]}` } />
              <div>{`${kcal[0]} Kcal`}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="table">
        <span>fez Exercicios</span>
        <div className="carousel">
          {fez.map((kcal) => (
            <div className="box">
              <div className={ `${kcal[1]} ${kcal[2]}` } />
              <div>{`${kcal[0]} Kcal`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}