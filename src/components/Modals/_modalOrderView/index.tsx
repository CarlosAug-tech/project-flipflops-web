import React, { useCallback, useEffect, useState } from 'react';
import { FaSpinner, FaTimes } from 'react-icons/fa';

import { useAuth } from '../../../hooks/auth';
import { formatPrice } from '../../../utils/format';

import api from '../../../services/api';
import LoadingContainer from '../../LoadingContainer';

import {
  Container,
  CloseModal,
  Content,
  OrderInfo,
  CheckoutInfo,
  InfoShipping,
  ProductInfo,
  ProductDescription,
  ProductTotal,
} from './styles';
import CheckoutOrder from './_checkoutOrder';

interface IProductCheckoutProps {
  id: string;
  name: string;
  price: number;
  image: {
    url: string;
  };
}

interface ICheckProdProps {
  id: string;
  amount: number;
  total: number;
  product: IProductCheckoutProps;
}

interface IModalOrderViewProps {
  checkoutId: string;
  tid: string;
  brand: string;
  status: string;
  dateFormatted: string;
  isVisibleModal: boolean;
  installments: number;
  renderStatus(status: string): string;
  setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOrderView: React.FC<IModalOrderViewProps> = ({
  checkoutId,
  tid,
  brand,
  status,
  isVisibleModal,
  dateFormatted,
  installments,
  renderStatus,
  setIsVisibleModal,
}) => {
  const { user } = useAuth();
  const [checkoutProducts, setCheckoutsProducts] = useState<ICheckProdProps[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const loadCheckoutProducts = useCallback(async (checkoutId: string) => {
    const response = await api.get(`/checkoutProducts/${checkoutId}`);
    const data = response.data.map((checkProd: ICheckProdProps) => ({
      ...checkProd,
    }));

    setCheckoutsProducts(data);
  }, []);

  useEffect(() => {
    setLoading(true);
    let timer: ReturnType<typeof setTimeout>;
    if (checkoutId) {
      timer = setTimeout(() => {
        setLoading(false);
        loadCheckoutProducts(checkoutId);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loadCheckoutProducts, checkoutId]);

  const handleCloseModal = useCallback(() => {
    setIsVisibleModal(false);
  }, []);

  return (
    <Container isVisibleModal={isVisibleModal}>
      <Content>
        {loading ? (
          <LoadingContainer icon={FaSpinner} />
        ) : (
          <CheckoutInfo>
            <h3>
              Pedido <span>#{tid}</span>
            </h3>
            <h3>Informações do Pedido</h3>
            <OrderInfo>
              <strong>
                Data do Pedido: <span>{dateFormatted}</span>
              </strong>
              <strong>
                Forma de Pagamento: <span>Cartão de Crédito - {brand}</span>
              </strong>
              <strong>
                Status do Pedido: <span>{renderStatus(status)}</span>
              </strong>
            </OrderInfo>
            <h3>Dados de Entrega</h3>
            <InfoShipping>
              <span>
                Rua: {user.address.street} - {user.address.neighborhood}
              </span>
              <span>
                {user.address.city}, {user.address.state} -{' '}
                {user.address.zipcode}
              </span>
            </InfoShipping>
            <h3>Produtos</h3>
            {checkoutProducts.map((checkProd) => (
              <>
                <ProductInfo key={checkProd.id}>
                  <ProductDescription>
                    <img
                      src={checkProd.product.image.url}
                      alt="product figure"
                    />
                    <div>
                      <strong>{checkProd.product.name}</strong>
                      <strong>
                        Preço por unidade:{' '}
                        {formatPrice(checkProd.product.price)}
                      </strong>
                      <strong>Quantidade: {checkProd.amount}</strong>
                    </div>
                  </ProductDescription>
                  <ProductTotal>
                    <strong>Total: {formatPrice(checkProd.total)}</strong>
                  </ProductTotal>
                </ProductInfo>
              </>
            ))}
            <CheckoutOrder
              checkoutId={checkoutId}
              installments={installments}
            />
          </CheckoutInfo>
        )}
      </Content>
      <CloseModal type="button" onClick={handleCloseModal}>
        <FaTimes size={18} />
      </CloseModal>
    </Container>
  );
};

export default ModalOrderView;
