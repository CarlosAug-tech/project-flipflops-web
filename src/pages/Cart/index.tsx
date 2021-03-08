import React, { useCallback, useState } from 'react';

import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProgressLine from '../../components/ProgressLine';

import { CartState } from '../../store/modules/cart/types';

import { Container, Content, TableItems, TotalContainer } from './styles';
import { formatPrice } from '../../utils/format';
import {
  removetToCart,
  updateToAmountReq,
} from '../../store/modules/cart/actions';

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const [installments, setInstallments] = useState(1);

  const products = useSelector((state: CartState) =>
    state.cart.cartItem.map((product) => ({
      ...product,
      subTotal: formatPrice(product.price * product.amountCart),
    })),
  );

  const totalRaw = useSelector((state: CartState) =>
    state.cart.cartItem.reduce((total, product) => {
      return total + product.price * product.amountCart;
    }, 0),
  );

  const handleIncrementAmount = useCallback((id, amountCart) => {
    dispatch(updateToAmountReq(id, amountCart + 1));
  }, []);

  const handleDecrementAmount = useCallback((id, amountCart) => {
    dispatch(updateToAmountReq(id, amountCart - 1));
  }, []);

  const handleRemoveItemCart = useCallback((id: string) => {
    dispatch(removetToCart(id));
  }, []);

  const renderInstallments = useCallback(() => {
    return [...new Array(4)].map((item, index) => {
      const installments = index + 1;
      return (
        <option value={installments}>{`${installments} x ${formatPrice(
          totalRaw / installments,
        )}`}</option>
      );
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setInstallments(Number(newValue));
  };

  return (
    <Container>
      <ProgressLine stepProgressOne />
      <Content>
        {products.length > 0 ? (
          <>
            <TableItems>
              <thead>
                <tr>
                  <th />
                  <th>Nome do Produto</th>
                  <th>Qtd de Produto</th>
                  <th>Sub Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image.url} alt="Imagem do produto" />
                    </td>
                    <td>
                      <strong>{product.name}</strong>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            handleDecrementAmount(
                              product.id,
                              product.amountCart,
                            )
                          }
                        >
                          <FaMinusCircle size={18} />
                        </button>
                        <input
                          type="number"
                          readOnly
                          defaultValue={product.amountCart}
                          value={product.amountCart}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleIncrementAmount(
                              product.id,
                              product.amountCart,
                            )
                          }
                        >
                          <FaPlusCircle size={18} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subTotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemoveItemCart(product.id);
                        }}
                      >
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableItems>
            <TotalContainer>
              <div>
                <div>
                  <span>Total</span>
                  <strong>{formatPrice(totalRaw)}</strong>
                </div>
                <div>
                  <span>Parcelas</span>
                  <select onChange={handleChange}>
                    {renderInstallments()}
                  </select>
                </div>
              </div>
            </TotalContainer>
            <button type="button">
              <Link
                to={{
                  pathname: '/shipping',
                  state: {
                    products,
                    totalRaw,
                    installments,
                  },
                }}
              >
                Continuar a comprar
              </Link>
            </button>
          </>
        ) : (
          <h3>Você não possui produto no carrinho!</h3>
        )}
      </Content>
    </Container>
  );
};

export default Cart;
