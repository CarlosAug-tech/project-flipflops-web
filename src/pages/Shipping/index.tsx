import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import Button from '../../components/Button';
import ProgressLine from '../../components/ProgressLine';

import { useAuth } from '../../hooks/auth';
import { CartData } from '../../store/modules/cart/types';

import { Container, Content } from './styles';

interface ICartProps {
  products?: CartData[];
  totalRaw?: number;
  installments?: number;
}

const Shipping: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const products = useLocation<ICartProps>().state
    ? useLocation<ICartProps>().state.products
    : null;
  const totalRaw = useLocation<ICartProps>().state
    ? useLocation<ICartProps>().state.totalRaw
    : null;
  const installments = useLocation<ICartProps>().state
    ? useLocation<ICartProps>().state.installments
    : null;

  useEffect(() => {
    if (!products) {
      history.push('/cart');
    }
  }, [products]);

  return (
    <Container>
      <ProgressLine stepProgressOne stepProgressTwo />
      <Content>
        <h2>Confirme seus dados para prosseguir</h2>
        <div>
          <h3>Informações Pessoais</h3>
          <input type="text" readOnly defaultValue={user.name} />
          <input type="text" readOnly defaultValue={user.email} />
          <input type="text" readOnly defaultValue={user.cpf} />
          <input type="text" readOnly defaultValue={user.rg} />
          <input type="text" readOnly defaultValue={user.phone} />
          <input type="text" readOnly defaultValue={user.birthday} />
          <h3>Endereço</h3>
          <input type="text" readOnly defaultValue={user.address.street} />
          <input
            type="number"
            readOnly
            defaultValue={user.address.street_number}
          />
          <input
            type="text"
            readOnly
            defaultValue={user.address.neighborhood}
          />
          <input type="number" readOnly defaultValue={user.address.zipcode} />
          <input type="text" readOnly defaultValue={user.address.city} />
          <input type="text" readOnly defaultValue={user.address.state} />
          <Button type="submit">
            <Link
              to={{
                pathname: '/checkout',
                state: { products, customer: user, totalRaw, installments },
              }}
            >
              Prosseguir com o pedido
            </Link>
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Shipping;
