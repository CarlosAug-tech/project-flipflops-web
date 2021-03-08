import * as Yup from 'yup';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import pagarme from 'pagarme';
import Cards from 'react-credit-cards';

import { FormHandles } from '@unform/core';
import { FaSpinner } from 'react-icons/fa';
import api from '../../../services/api';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { IUserProps } from '../../../hooks/auth';
import { CartData } from '../../../store/modules/cart/types';

import 'react-credit-cards/es/styles-compiled.css';
import { Container } from './styles';
import { useToast } from '../../../hooks/toast';
import getValidationErrors from '../../../utils/getValidationErrors';
import LoadingContainer from '../../../components/LoadingContainer';

export interface ICardProps {
  card_holder_name: string;
  card_number: string;
  card_expiration_date: string;
  card_cvv: string;
}

interface IFormProps {
  customer?: IUserProps;
  installments?: number;
  products?: CartData[];
  totalRaw?: number;
  card?: ICardProps;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCheckout: React.FC<IFormProps> = ({
  customer,
  installments,
  products,
  totalRaw,
  card,
  setIsSuccess,
}) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    customer,
    address: customer?.address,
    card,
  });

  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  useEffect(() => {
    setData({
      ...data,
      card: {
        card_holder_name: holderName,
        card_number: cardNumber,
        card_expiration_date: expirationDate,
        card_cvv: cardCvv,
      },
    });
  }, [holderName, cardNumber, expirationDate, cardCvv]);

  const handleSubmit = useCallback(async (formData: ICardProps) => {
    setLoading(true);
    formRef.current?.setErrors({});
    const cardForm = await formData;

    delete data.card;

    try {
      const schema = Yup.object().shape({
        card_holder_name: Yup.string().required(
          'Nome do dono do cartão é obrigatório!',
        ),
        card_number: Yup.string().required('Número do cartão é obrigatório!'),
        card_expiration_date: Yup.string().required(
          'Data de expiração do cartão é obrigatória!',
        ),
        card_cvv: Yup.string().required(
          'Número do código de segurança do cartão é obrigatório!',
        ),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      const client = await pagarme.client.connect({
        encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
      });

      let cardData = await client.security.encrypt(cardForm);

      await api.post('/checkouts', {
        ...data,
        items: products,
        amount: totalRaw,
        installments,
        card_hash: cardData,
      });

      setIsSuccess(true);
      addToast({
        type: 'success',
        title: 'Compra realizada com sucesso!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Falha ao realizar a compra!!',
        description:
          'Oops.. Houve um erro ao realizar a compra, verifique os dados informados!',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="card_holder_name"
          labelText="Nome no cartão:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHolderName(e.target.value)
          }
        />
        <Input
          name="card_number"
          labelText="Número do cartão:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardNumber(e.target.value)
          }
        />
        <Input
          name="card_expiration_date"
          labelText="Data de Expiração:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setExpirationDate(e.target.value)
          }
        />
        <Input
          name="card_cvv"
          labelText="Código de segurança:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardCvv(e.target.value)
          }
        />
        <Cards
          name={holderName}
          expiry={expirationDate}
          number={cardNumber}
          cvc={cardCvv}
        />
        <Button type="submit">
          {loading ? (
            <LoadingContainer text="Processando compra.." icon={FaSpinner} />
          ) : (
            <span>Finalizar compra</span>
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default FormCheckout;
