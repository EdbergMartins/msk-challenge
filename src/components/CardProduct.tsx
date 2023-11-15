import React, { useState } from 'react'
import { CardStyled, ImgProductStyled, FirstLineStyled, SpanNameStyled, SpanPriceStyled, SpanDescriptionStyled, DivImgStyled } from './CardProduct.style'
import { Button } from './Button';

interface CardProps {
  nameProduct?: string;
  descripitonProduct?: string;
  priceProduct?: string;
  srcImg?: string;
  product?: any
}

export const CardProduct = ({ srcImg, nameProduct, descripitonProduct, priceProduct, product }: CardProps) => {

  const [showDescription, setShowDescription] = useState<boolean>(false)

  const handleClick = () => {
    const storedProductsString = localStorage.getItem('products');
    const storedProducts = storedProductsString ? JSON.parse(storedProductsString) : [];
    const updatedProducts = [...storedProducts, product];
    const updatedProductsString = JSON.stringify(updatedProducts);
    localStorage.setItem('products', updatedProductsString);
  };

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
      <Button handleClick={handleClick} />
    </CardStyled >
  )
}
