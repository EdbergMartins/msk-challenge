import React from 'react'
import Cart from '../assets/cart.svg'
import { StyledHeader, StyledLogoContainer, StyledCartButton, LateralMenuStyled } from './Header.style';

interface HeaderProps {
  numberOfProducts?: number;
}

export default function Header({ numberOfProducts }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <span> MKS </span>
        <span>Sistemas</span>
      </StyledLogoContainer>
      <StyledCartButton>
        <img src={Cart} alt="Carrinho de compras" />
        <span> {numberOfProducts ? numberOfProducts : 0} </span>
      </StyledCartButton>
    </StyledHeader>
  )
}
