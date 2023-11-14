import React from 'react'
import Bag from '../assets/shopping-bag.svg'
import { ButtonStyle } from './Button.style'



export const Button = () => {
  return (
    <ButtonStyle>
      <img src={Bag} alt="Carrinho de compras" />
      <span>
        COMPRAR
      </span>
    </ButtonStyle>

  )
}
