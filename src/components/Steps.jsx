import React from 'react'
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi';
import './Steps.css'

export default function Steps({currentStep}) {
  return (
    <div className="steps"> {/* container dos passos */}
      <div className="step active"> {/* sempre adiciona a classe active no primeiro passo */}
        <AiOutlineUser /> {/* icone do passo */}
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}> {/* se o passo atual for maior ou igual a 1, adiciona a classe active */}
        <AiOutlineStar /> {/* icone do passo */}
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}> {/* se o passo atual for maior ou igual a 2, adiciona a classe active */}
        <FiSend /> {/* icone do passo */}
        <p>Envio</p>
      </div>
    </div>
  )
}
