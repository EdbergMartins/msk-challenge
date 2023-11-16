import React from 'react'
import Cart from '../assets/cart.svg'
import { StyledHeader, StyledLogoContainer, StyledCartButton, LateralMenuStyled } from './Header.style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';


interface HeaderProps {
  numberOfProducts?: number;
}

export default function Header({ numberOfProducts }: HeaderProps) {

  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.storeReducer.cartQuantity);
  const handleOpenLateralMenu = () => {
    dispatch({
      type: 'OPEN',
      payload: {
        open: true
      }
    })
  }
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <span> MKS </span>
        <span>Sistemas</span>
      </StyledLogoContainer>
      <StyledCartButton onClick={() => handleOpenLateralMenu()}>
        <img src={Cart} alt="Carrinho de compras" />
        <span> {quantity} </span>
      </StyledCartButton>
    </StyledHeader>
  )
}
