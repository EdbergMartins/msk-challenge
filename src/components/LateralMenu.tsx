import React from 'react'
import { NameSpanStyled, QuantityStyled, ValueStyled, LateralMenuStyled, CloseButton, HeaderCartStyled, BodyCartStyled, CardCartStyled } from './LateralMenu.style'
import closeCart from '../assets/Close_cart.svg'

interface LateralMenuProps {

  srcImg?: string;
  nameProduct?: string;
  productQuantity?: string;
  valueProducts?: string


}
export const LateralMenu = ({ srcImg, nameProduct, productQuantity, valueProducts }: LateralMenuProps) => {
  return (
    <LateralMenuStyled>
      <HeaderCartStyled>
        <span>
          Carrinho <br /> de compras
        </span>
        <CloseButton src={closeCart} />
      </HeaderCartStyled>
      <BodyCartStyled>
        <CardCartStyled>
          <CloseButton src={closeCart} />
          <img src={srcImg} />
          <NameSpanStyled>
            {nameProduct}
          </NameSpanStyled>
          <QuantityStyled>
            <span>
              Qtd:
            </span>
            <div>
              <button> - </button>
              <span />
              <span> {productQuantity} </span>
              <span />
              <button> + </button>
            </div>
          </QuantityStyled>
          <ValueStyled>
            R${valueProducts}
          </ValueStyled>
        </CardCartStyled>
      </BodyCartStyled>
    </LateralMenuStyled>
  )
}
