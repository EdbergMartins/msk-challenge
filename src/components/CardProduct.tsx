import React from 'react'
import { CardStyled, ImgProductStyled } from './CardProduct.style'
import { Button } from './Button';

interface CardProps {
  nameProduct?: string;
  descripitonProduct?: string;
  priceProduct?: number;
}

export const CardProduct = ({ nameProduct, descripitonProduct, priceProduct }: CardProps) => {
  return (
    <CardStyled>
      <ImgProductStyled />
      <div>
        <span>
          {nameProduct ? nameProduct : 'nome do produto'}
        </span>
        <span>
          {priceProduct ? priceProduct : 0}
        </span>
      </div>
      <span>
        {descripitonProduct ? descripitonProduct : 'descrição do produto'}
      </span>
      <Button />
    </CardStyled >
  )
}
