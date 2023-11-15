import React, { useState } from 'react'
import { CardStyled, ImgProductStyled, FirstLineStyled, SpanNameStyled, SpanPriceStyled, SpanDescriptionStyled, DivImgStyled } from './CardProduct.style'
import { Button } from './Button';

interface CardProps {
  nameProduct?: string;
  descripitonProduct?: string;
  priceProduct?: number;
  srcImg?: string;
  key?: number;
}

export const CardProduct = ({ key, srcImg, nameProduct, descripitonProduct, priceProduct }: CardProps) => {

  const [showDescription, setShowDescription] = useState<boolean>(false)
  console.log(showDescription)
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
      <SpanDescriptionStyled onMouseLeave={() => setShowDescription(false)} onMouseOver={() => setShowDescription(true)}>
        {descripitonProduct ? descripitonProduct : 'descrição do produto'}
      </SpanDescriptionStyled>
      <Button />
    </CardStyled >
  )
}
