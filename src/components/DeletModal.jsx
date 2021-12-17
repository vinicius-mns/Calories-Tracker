import React from "react"

export default function DeletModal({ modalDeletClass, day, deletNo, deletYes }) {
  return(
    <div className={ modalDeletClass }>
      <div><h3>Dia { day }</h3></div>
      <div><span>Tem certeza que deseja deletar o dia ?</span></div>
      <div>
        <button onClick={ deletNo }>Não</button>
        <button onClick={ deletYes }>Sim</button>
      </div>
    </div>
  )
}