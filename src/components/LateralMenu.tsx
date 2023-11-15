import React from 'react'
import { NameSpanStyled, QuantityStyled, ValueStyled, LateralMenuStyled, CloseButton, HeaderCartStyled, BodyCartStyled, CardCartStyled } from './LateralMenu.style'
import closeCart from '../assets/Close_cart.svg'

export const LateralMenu = () => {
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
          <img src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />
          <NameSpanStyled>
            Apple Watch Series 4 GPS
          </NameSpanStyled>
          <QuantityStyled>
            <span>
              Qtd:
            </span>
            <div>
              <button> - </button>
              <span />
              <span> 1 </span>
              <span />
              <button> + </button>
            </div>
          </QuantityStyled>
          <ValueStyled>
            R$500
          </ValueStyled>

        </CardCartStyled>
      </BodyCartStyled>
    </LateralMenuStyled>
  )
}
