import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiUser } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (formData: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um email válido!')
          .required('Email obrigatório!'),
        password: Yup.string().min(
          6,
          'A senha deve conter pelo menos 6 caracteres',
        ),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await signIn({ formData });

      addToast({
        type: 'success',
        title: 'Bem-vindo, você foi autenticado com sucesso!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Oops.. Ocorreu um erro ao autenticar-se!',
        description:
          'Verifique suas credenciais de autenticação, email ou senha invalidos!!',
      });
    }
  }, []);

  return (
    <Container>
      <Logo color="#222" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="email" name="email" labelText="Email:" icon={FiUser} />
        <Input
          type="password"
          name="password"
          labelText="Senha:"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
        <Link to="/register">Não possui conta? Cadastra-se!</Link>
      </Form>
    </Container>
  );
};

export default SignIn;
