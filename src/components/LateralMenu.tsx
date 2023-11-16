import React, { useEffect, useState } from 'react'
import { NameSpanStyled, QuantityStyled, ValueStyled, LateralMenuStyled, CloseButton, HeaderCartStyled, BodyCartStyled, CardCartStyled, FinalyButton } from './LateralMenu.style'
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

  const [valorCart, setValorCart] = useState(0)

  const selectedData = useSelector((state: RootState) => state.storeReducer.product);
  const isOpen = useSelector((state: RootState) => state.cartReducer.open);
  const dispatch = useDispatch();

  const handleCloseLateralMenu = () => {
    dispatch({
      type: 'CLOSE',
      payload: {
        open: true
      }
    })
  }

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

  const handleRemove = (product: Product) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
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
    })
  }

  useEffect(() => {
    const totalValue = selectedData.reduce((acc, product) => acc + parseFloat(product.price.slice(0, -3)) * product.quantity,0);
    setValorCart(totalValue);
  }, [selectedData]);

  return (
    <LateralMenuStyled isOpen={isOpen}>
      <HeaderCartStyled>
        <span>
          Carrinho <br /> de compras
        </span>
        <CloseButton onClick={() => handleCloseLateralMenu()} src={closeCart} />
      </HeaderCartStyled>
      <BodyCartStyled>
        {selectedData.map((product: Product, key) => (
        <CardCartStyled>
            <CloseButton onClick={() => handleRemove(product)} src={closeCart} />
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
              R${(parseFloat(product.price.slice(0, -3)) * product.quantity)}
          </ValueStyled>
        </CardCartStyled>
        ))}
      </BodyCartStyled>
      {selectedData.length != 0 &&
        <FinalyButton onClick={() => alert('Ação não implementada!')}>
          Finalizar Compra R$ {valorCart}
        </FinalyButton>
      }
    </LateralMenuStyled>
  )
}
