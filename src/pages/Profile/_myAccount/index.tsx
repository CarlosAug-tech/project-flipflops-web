import React from 'react';

import { Container } from './styles';

interface IMyAccountProps {
  isVisibleMyAccount: boolean;
}

const MyAccount: React.FC<IMyAccountProps> = ({ isVisibleMyAccount }) => {
  return (
    <Container isVisibleMyAccount={isVisibleMyAccount}>
      <h3>Minha Conta</h3>
    </Container>
  );
};

export default MyAccount;
