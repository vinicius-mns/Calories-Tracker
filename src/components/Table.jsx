import React from "react";
import '../styles/table.css'

export default function Table() {
  return (
    <div className="guideContainer" >
      <div className="guide">
        <div className="gradientColor">
          <div className="color" />
          <div className="values">
            <p>200 Kcal -</p>
            <p>+ 1200 Kcal</p>
          </div>
        </div>

        <div className="flowers">
            <div className="floresJuntas">
              <span className="cherry">🌸</span>
              <p>Não fez exercícios</p>
            </div>
            <div className="floresJuntas">
              <span className="cherry2">💮</span>
              <p>Fez exercícios</p>
            </div>
        </div>
      </div>
    </div>
  )
}