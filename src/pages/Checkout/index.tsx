import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { FaArrowDown, FaCheckCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import FormCheckout from './_formCheckout';

import ProgressLine from '../../components/ProgressLine';
import { CartData } from '../../store/modules/cart/types';
import { IUserProps } from '../../hooks/auth';
import { formatPrice } from '../../utils/format';

import {
  Container,
  Content,
  SectionInfos,
  TableItems,
  TotalContainer,
  InfoUser,
  ResultSuccess,
} from './styles';
import { buySuccess } from '../../store/modules/cart/actions';

interface ILocationProps {
  products?: CartData[];
  customer?: IUserProps;
  totalRaw?: number;
  installments?: number;
}

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory<ILocationProps>();
  const [isSuccess, setIsSuccess] = useState(false);

  const products = useLocation<ILocationProps>().state
    ? useLocation<ILocationProps>().state.products
    : null;
  const customer = useLocation<ILocationProps>().state
    ? useLocation<ILocationProps>().state.customer
    : null;
  const totalRaw = useLocation<ILocationProps>().state
    ? useLocation<ILocationProps>().state.totalRaw
    : null;
  const installments = useLocation<ILocationProps>().state
    ? useLocation<ILocationProps>().state.installments
    : null;

  useEffect(() => {
    if (!products && !customer && !installments && !totalRaw && !isSuccess) {
      history.push('/cart');
    }

    if (history.location.state && isSuccess) {
      let state = { ...history.location.state };
      delete state.customer;
      delete state.installments;
      delete state.products;
      delete state.totalRaw;
      history.replace({ ...history.location, state });
      dispatch(buySuccess());
    }
  }, [isSuccess]);

  return (
    <Container>
      {isSuccess ? (
        <>
          <ProgressLine
            stepProgressOne
            stepProgressTwo
            stepProgressThree
            stepProgressFour
          />
          <ResultSuccess>
            <FaCheckCircle size={65} color="#4c9141" />
            <strong>Compra realiza com sucesso!</strong>
            <FaArrowDown size={25} color="#999" />
            <span>
              Veja seus pedidos: <Link to="/profile">Meus Pedidos</Link>
            </span>
          </ResultSuccess>
        </>
      ) : (
        <>
          <ProgressLine stepProgressOne stepProgressTwo stepProgressThree />
          <Content>
            {products && customer && installments && totalRaw ? (
              <>
                <SectionInfos>
                  <TableItems>
                    <thead>
                      <tr>
                        <th />
                        <th>Nome do Produto</th>
                        <th>Descrição</th>
                        <th>Qtd de Produto</th>
                        <th>Sub Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {products &&
                        products.map((product) => (
                          <tr>
                            <td>
                              <img
                                src={product.image.url}
                                alt="Imagem do produto"
                              />
                            </td>
                            <td>
                              <strong>{product.name}</strong>
                            </td>
                            <td>
                              <strong>{product.description}</strong>
                            </td>
                            <td>
                              <strong>{product.amountCart}</strong>
                            </td>
                            <td>
                              <strong>{product.subTotal}</strong>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </TableItems>
                  <TotalContainer>
                    <div>
                      <div>
                        <span>TOTAL</span>
                        <strong>{totalRaw && formatPrice(totalRaw)}</strong>
                      </div>
                      <div>
                        <span>PARCELAS</span>
                        <strong>
                          {installments}
                          <small>x</small>
                        </strong>
                      </div>
                    </div>
                  </TotalContainer>
                  <InfoUser>
                    <div>
                      <h3>Informações Pessoais</h3>
                      <span>
                        <strong>Nome:</strong>
                        {customer.name}
                      </span>
                      <span>
                        <strong>Email:</strong>
                        {customer.email}
                      </span>
                      <span>
                        <strong>CPF:</strong>
                        {customer.cpf}
                      </span>
                      <span>
                        <strong>RG:</strong>
                        {customer.rg}
                      </span>
                      <span>
                        <strong>Telefone:</strong>
                        {customer.phone}
                      </span>
                      <span>
                        <strong>Dt aniversário:</strong>
                        {customer.birthday}
                      </span>
                    </div>
                    <div>
                      <h3>Informações de Endereço</h3>
                      <span>
                        <strong>Rua:</strong>
                        {customer.address.street}
                      </span>
                      <span>
                        <strong>Nº da casa/ap:</strong>
                        {customer.address.street_number}
                      </span>
                      <span>
                        <strong>Bairro:</strong>
                        {customer.address.neighborhood}
                      </span>
                      <span>
                        <strong>CEP:</strong>
                        {customer.address.zipcode}
                      </span>
                      <span>
                        <strong>Cidade:</strong>
                        {customer.address.city}
                      </span>
                      <span>
                        <strong>Estado:</strong>
                        {customer.address.state}
                      </span>
                    </div>
                  </InfoUser>
                </SectionInfos>
                <SectionInfos>
                  <h3>Informações do Cartão</h3>
                  <FormCheckout
                    customer={customer}
                    installments={installments}
                    products={products}
                    totalRaw={totalRaw}
                    setIsSuccess={setIsSuccess}
                  />
                </SectionInfos>
              </>
            ) : (
              <span>Você não possui produto no carrinho</span>
            )}
          </Content>
        </>
      )}
    </Container>
  );
};

export default Checkout;
