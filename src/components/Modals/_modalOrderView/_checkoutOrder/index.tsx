import React, { useCallback, useEffect, useState } from 'react';

import api from '../../../../services/api';
import { formatPrice } from '../../../../utils/format';

import { Container } from './styles';

interface ICheckoutOrderProps {
  checkoutId: string;
  installments: number;
}

interface ICheckoutOrderData {
  fee: number;
  amount: number;
}

const CheckoutOrder: React.FC<ICheckoutOrderProps> = ({
  checkoutId,
  installments,
}) => {
  const [order, setOrder] = useState({} as ICheckoutOrderData);

  const total = order && order.amount / 10000 - order.fee / 100;
  const formattedTotal = formatPrice(total);

  const fee = order && order.fee / 100;
  const formattedFee = formatPrice(fee);

  const installmentsTotal = total / installments + fee;

  const loadOrder = useCallback(async () => {
    const response = await api.get(`/checkouts/${checkoutId}`);
    setOrder(response.data);
  }, [checkoutId]);

  useEffect(() => {
    if (checkoutId) {
      loadOrder();
    }
  }, [loadOrder, checkoutId]);

  return (
    <Container>
      <div>
        <div>
          <strong>Total dos produtos: </strong>
          <span>{formattedTotal}</span>
        </div>
        <div>
          <strong>Frete: </strong>
          <span>{formattedFee}</span>
        </div>
        <div>
          <strong>Parcelas: </strong>
          <span>
            {installments}
            <small>x</small>
          </span>
        </div>
      </div>
      <div>
        <div>
          {installments > 1 ? (
            <>
              <strong>Total a pagar por parcela:</strong>
              <span>{formatPrice(installmentsTotal)}</span>
            </>
          ) : (
            <>
              <strong>Total a pagar: </strong>
              <span>{formatPrice(total + fee)}</span>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CheckoutOrder;
