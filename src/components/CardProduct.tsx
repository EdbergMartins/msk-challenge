import React from 'react'
import { CardStyled, ImgProductStyled, FirstLineStyled, SpanNameStyled, SpanPriceStyled, SpanDescriptionStyled, DivImgStyled } from './CardProduct.style'
import { Button } from './Button';

interface CardProps {
  nameProduct?: string;
  descripitonProduct?: string;
  priceProduct?: number;
  srcImg?: string;
}

export const CardProduct = ({ srcImg, nameProduct, descripitonProduct, priceProduct }: CardProps) => {
  return (
    <CardStyled>
      <DivImgStyled>
        <ImgProductStyled src={srcImg ? srcImg : ''} alt={nameProduct} />
      </DivImgStyled>
      <FirstLineStyled>
        <SpanNameStyled>
          {nameProduct ? nameProduct : 'nome do produto'}
        </SpanNameStyled>
        <SpanPriceStyled>
          R${priceProduct ? priceProduct : 0}
        </SpanPriceStyled>
      </FirstLineStyled>
      <SpanDescriptionStyled>
        {descripitonProduct ? descripitonProduct : 'descrição do produto'}
      </SpanDescriptionStyled>
      <Button />
    </CardStyled >
  )
}
