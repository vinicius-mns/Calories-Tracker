import React from "react";
import '../styles/table.css'

export default function Table() {
  return (
    <div className="guideContainer" >
      <div className="tableContainer">
        <h2>Não fez exercicios 🌸</h2>
        <div className="tableValues">
          <div><span className="values aa naoT"/> <p>0 ~ 199 Kcal</p></div>
          <div><span className="values bb naoT"/> <p>200 ~ 400 Kcal</p></div>
          <div><span className="values cc naoT"/> <p>400 ~ 600 Kcal</p></div>
          <div><span className="values dd naoT"/> <p>600 ~ 800 Kcal</p></div>
          <div><span className="values ee naoT"/> <p>800 ~ 1000 Kcal</p></div>
          <div><span className="values ff naoT"/> <p>1000 ~ 1200 Kcal</p></div>
          <div><span className="values gg naoT"/> <p>1200 ~ 2500 Kcal</p></div>
          <div><span className="values ii naoT"/> <p>+ 2500 Kcal</p></div>
        </div>
      </div>
      <div className="tableContainer">
        <h2>Fez exercicios 💮</h2>
        <div className="tableValues">
          <div><span className="values aa simT"/> <p>0 ~ 199 Kcal</p></div>
          <div><span className="values bb simT"/> <p>200 ~ 400 Kcal</p></div>
          <div><span className="values cc simT"/> <p>400 ~ 600 Kcal</p></div>
          <div><span className="values dd simT"/> <p>600 ~ 800 Kcal</p></div>
          <div><span className="values ee simT"/> <p>800 ~ 1000 Kcal</p></div>
          <div><span className="values ff simT"/> <p>1000 ~ 1200 Kcal</p></div>
          <div><span className="values gg simT"/> <p>1200 ~ 2500 Kcal</p></div>
          <div><span className="values ii simT"/> <p>+ 2500 Kcal</p></div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-lone-blocks
{/* <div className="guide">
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
      </div> */}
