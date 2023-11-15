import React, { useEffect, useState } from 'react'
import { CardsContainerStyled, StyledBody } from './Body.style'
import { CardProduct } from './CardProduct'
import axios from '../axiosConfig'
import { LateralMenu } from './LateralMenu'



export const Body = () => {
  interface Product {

    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;

  }

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
        {data && data.map((product: Product) => (
          <CardProduct
            nameProduct={product.name}
            srcImg={product.photo}
            descripitonProduct={product.description}
            priceProduct={product.price.slice(0, -3)}
            product={product} />
        ))}
      </CardsContainerStyled>
      <LateralMenu
        srcImg='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp'
        nameProduct='Iphone 11 128 GB'
        productQuantity='1'
        valueProducts='500'
      />
    </StyledBody>
  );

}
