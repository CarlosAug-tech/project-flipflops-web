import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signUp } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (formData: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        cpf: Yup.string().required('CPF obrigatório!'),
        rg: Yup.string().required('RG obrigatório!'),
        birthday: Yup.string().required('Data de aniversário obrigatória!'),
        phone: Yup.string().required('Telefone obrigatório!'),
        zipcode: Yup.number()
          .integer('Porfavor informe somente números inteiros!')
          .required('CEP obrigatório!'),
        street: Yup.string().required('Rua obrigatório!'),
        street_number: Yup.number()
          .integer('Porfavor informe somente números inteiros!')
          .required('Número da casa/apartamento obrigatório!'),
        neighborhood: Yup.string().required('Bairro obrigatório!'),
        city: Yup.string().required('Cidade obrigatório!'),
        state: Yup.string().required('Estado obrigatório!'),
        email: Yup.string().email().required('Email obrigatório!'),
        password: Yup.string().min(
          6,
          'A senha precisa ter no mínimo 6 caracteres',
        ),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await signUp({ formData });

      await addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
      });

      history.push('/login');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Oops.. Ocorreu um erro ao cadastrar-se!',
        description: 'Porfavor verifique os dados informados!',
      });
    }
  }, []);

  return (
    <Container>
      <Logo color="#222" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3>Informações Pessoais</h3>
        <Input type="text" name="name" labelText="Nome:" />
        <Input type="email" name="email" labelText="Email:" />
        <Input type="password" name="password" labelText="Senha:" />
        <Input type="text" name="cpf" labelText="CPF:" />
        <Input type="text" name="rg" labelText="RG:" />
        <Input type="text" name="phone" labelText="Telefone:" />
        <Input type="text" name="birthday" labelText="Data de Aniversário:" />
        <h3>Endereço</h3>
        <Input type="text" name="street" labelText="Rua:" />
        <Input type="number" name="street_number" labelText="Número:" />
        <Input type="text" name="neighborhood" labelText="Bairro:" />
        <Input type="number" name="zipcode" labelText="CEP:" />
        <Input type="text" name="city" labelText="Cidade:" />
        <Input type="text" name="state" labelText="Estado:" />
        <Button type="submit">Cadastrar</Button>
        <Link to="/auth">Já possui conta? Autentique-se!</Link>
      </Form>
    </Container>
  );
};

export default SignUp;
