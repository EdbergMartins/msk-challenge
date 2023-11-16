import React from 'react'
import { NameSpanStyled, QuantityStyled, ValueStyled, LateralMenuStyled, CloseButton, HeaderCartStyled, BodyCartStyled, CardCartStyled } from './LateralMenu.style'
import closeCart from '../assets/Close_cart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity: number
}
export const LateralMenu = () => {

  const selectedData = useSelector((state: RootState) => state.storeReducer.product);
  const dispatch = useDispatch();

  const handleIncrement = (product: Product) => {
    dispatch({
      type: 'INCREMENT_PRODUCT',
      payload: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        photo: product.photo,
        price: product.price,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        quantity: 1
      },
    });
  }
  const handleDecrement = (product: Product) => {
    dispatch({
      type: 'DECREMENT_PRODUCT',
      payload: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        photo: product.photo,
        price: product.price,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        quantity: 1
      },
    });
  }


  return (
    <LateralMenuStyled>
      <HeaderCartStyled>
        <span>
          Carrinho <br /> de compras
        </span>
        <CloseButton src={closeCart} />
      </HeaderCartStyled>
      <BodyCartStyled>
        {selectedData.map((product: Product, key) => (
        <CardCartStyled>
          <CloseButton src={closeCart} />
            <img src={product.photo} />
          <NameSpanStyled>
              {product.name}
          </NameSpanStyled>
          <QuantityStyled>
            <span>
              Qtd:
            </span>
            <div>
                <button onClick={() => handleDecrement(product)}> - </button>
              <span />
                <span> {product.quantity} </span>
              <span />
                <button onClick={() => handleIncrement(product)}> + </button>
            </div>
          </QuantityStyled>
          <ValueStyled>
              R${product.price.slice(0, -3)}
          </ValueStyled>
        </CardCartStyled>
        ))}
      </BodyCartStyled>
    </LateralMenuStyled>
  )
}
