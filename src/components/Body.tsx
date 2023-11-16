import React, { useEffect, useState } from 'react';
import { CardsContainerStyled, StyledBody, SkeletonContainer, Spinner } from './Body.style';
import { CardProduct } from './CardProduct';
import axios from '../axiosConfig';
import { LateralMenu } from './LateralMenu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

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

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const isOpen = useSelector((state: RootState) => state.cartReducer.open);
  const dispatch = useDispatch();

  const handleClick = (product: Product) => {
    dispatch({
      type: 'ADICIONAR_DADO',
      payload: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        photo: product.photo,
        price: product.price,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        quantity: 1,
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/products?page=1&rows=8&sortBy=id&orderBy=ASC`);
        setData(response.data.products);
        setLoading(false); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledBody>
      {loading ? (
        <SkeletonContainer>
          <Spinner />
        </SkeletonContainer>
      ) : (
          <CardsContainerStyled>
            {data &&
              data.map((product: Product, key) => (
                <CardProduct
                  key={product.id}
                  nameProduct={product.name}
                  srcImg={product.photo}
                  descripitonProduct={product.description}
                  priceProduct={product.price.slice(0, -3)}
                  product={product}
                  handleClick={handleClick}
                />
              ))}
          </CardsContainerStyled>
      )}

      {isOpen && <LateralMenu />}
    </StyledBody>
  );
};
