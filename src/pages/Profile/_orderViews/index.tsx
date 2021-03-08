import React, { useCallback, useEffect, useState } from 'react';
import { FaFolderPlus } from 'react-icons/fa';
import { parseISO, format } from 'date-fns';

import ModalOrderView from '../../../components/Modals/_modalOrderView';
import api from '../../../services/api';

import { Container, Content, TableOrder } from './styles';

interface IOrderViewProps {
  isVisibleOrder: boolean;
}

export interface ITransactionProps {
  id: string;
  tid: string;
  status: string;
  brand: string;
  checkout_id: string;
  createdAt: Date;
  formattedDate: string;
  installments: number;
}

const OrderView: React.FC<IOrderViewProps> = ({ isVisibleOrder }) => {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);
  const [checkoutId, setCheckoutId] = useState('');
  const [tid, setTid] = useState('');
  const [brand, setBrand] = useState('');
  const [status, setStatus] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [installments, setInstallments] = useState(1);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const loadTransactions = useCallback(async () => {
    const response = await api.get('/transactions');
    const data = response.data.map((transaction: ITransactionProps) => ({
      ...transaction,
      formattedDate: format(parseISO(`${transaction.createdAt}`), 'dd/MM/yyyy'),
    }));

    setTransactions(data);
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const handleOpenModalOrder = useCallback(
    (
      orderId: string,
      tid: string,
      brand: string,
      status: string,
      dateFormatted: string,
      installments: number,
    ) => {
      setCheckoutId(orderId);
      setTid(tid);
      setBrand(brand);
      setStatus(status);
      setTransactionDate(dateFormatted);
      setInstallments(installments);

      setIsVisibleModal(true);
    },
    [checkoutId],
  );

  const renderStatus = useCallback(
    (status: string) => {
      switch (status) {
        case 'paid': {
          return 'Pago';
        }
        default: {
          return 'Processando';
        }
      }
    },
    [status],
  );

  return (
    <Container isVisibleOrder={isVisibleOrder}>
      {transactions ? (
        <>
          <h3>Meus Pedidos</h3>
          <Content>
            <TableOrder>
              <thead>
                <tr>
                  <th>Número do Pedido</th>
                  <th>Data</th>
                  <th>Pagamento</th>
                  <th>Status</th>
                  <th>Detalhes do Pedido</th>
                </tr>
              </thead>
              <tbody>
                {transactions &&
                  transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.tid}</td>
                      <td>{transaction.formattedDate}</td>
                      <td>Cartão de crédito: {transaction.brand}</td>
                      <td>{renderStatus(transaction.status)}</td>
                      <td>
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              handleOpenModalOrder(
                                transaction.checkout_id,
                                transaction.tid,
                                transaction.brand,
                                transaction.status,
                                transaction.formattedDate,
                                transaction.installments,
                              )
                            }
                          >
                            <FaFolderPlus size={22} color="#7159c1" />
                            <span>Detalhes</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </TableOrder>
          </Content>
        </>
      ) : (
        <span>Você não possui nenhum pedido!</span>
      )}
      <ModalOrderView
        checkoutId={checkoutId}
        tid={tid}
        brand={brand}
        status={status}
        dateFormatted={transactionDate}
        installments={installments}
        renderStatus={renderStatus}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
      />
    </Container>
  );
};

export default OrderView;
