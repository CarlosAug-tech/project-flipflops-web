import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartState } from '../../../store/modules/cart/types';

import { Container } from './styles';

const Cart: React.FC = () => {
  const amountCart = useSelector(
    (state: CartState) => state.cart.cartItem.length,
  );

  return (
    <Container>
      <Link to="/cart">
        <FaShoppingBasket size={30} />
        <div>
          <span>{amountCart}</span>
        </div>
      </Link>
    </Container>
  );
};

export default Cart;
