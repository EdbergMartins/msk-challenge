import React from 'react'
import Bag from '../assets/shopping-bag.svg'
import { ButtonStyle } from './Button.style'

interface ButtonProps {
  handleClick: () => void;
}

export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <ButtonStyle onClick={handleClick}>
      <img src={Bag} alt="Carrinho de compras" />
      <span>
        COMPRAR
      </span>
    </ButtonStyle>
  )
}







