import React, { useEffect, useState } from 'react'
import { CardsContainerStyled, StyledBody } from './Body.style'
import { CardProduct } from './CardProduct'
import axios from '../axiosConfig'
import { LateralMenu } from './LateralMenu'



export const Body = () => {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/products?page=1&rows=8&sortBy=id&orderBy=ASC`);
        setData(response.data.products);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  return (

    <StyledBody>
      <CardsContainerStyled>
        {data && data.map((product: any, index: number) => (
          <CardProduct
            nameProduct={product.name}
            srcImg={product.photo}
            descripitonProduct={product.description}
            priceProduct={product.price.slice(0, -3)}
            key={index} />
        ))}
      </CardsContainerStyled>
      <LateralMenu />
    </StyledBody>
  );

}
