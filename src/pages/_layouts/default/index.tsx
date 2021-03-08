import React from 'react';
import { RouteProps } from 'react-router-dom';

import Header from '../../../components/Header';

import { Container } from './styles';

interface DefaultLayoutProps {
  isHome?: boolean;
  isPrivate?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  isHome = false,
  isPrivate = false,
  children,
}) => {
  return (
    <Container isPrivate={isPrivate}>
      <Header isHome={isHome} />
      {children}
    </Container>
  );
};

export default DefaultLayout;
