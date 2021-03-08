import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';

import { ProductsContainerProps } from '..';
import { addToCartRequest } from '../../../store/modules/cart/actions';
import { CartState } from '../../../store/modules/cart/types';

interface ProductProps {
  product: ProductsContainerProps;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const amount = useSelector((state: CartState) =>
    state.cart.cartItem.reduce((amountCart, p) => {
      amountCart[p.id] = p.amountCart;
      return amountCart;
    }, {} as { [key: string]: any }),
  );

  function handleAddToCart(id: string) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <img src={product.image.url} alt="" />
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div>
          <strong>{product.price}</strong>
        </div>
      </div>
      <button type="button" onClick={() => handleAddToCart(product.id)}>
        <div>
          <FiShoppingCart size={22} />
          <span>{amount[product.id] || 0}</span>
        </div>
        <span>Adicionar ao carrinho</span>
      </button>
    </Container>
  );
};

export default Product;
