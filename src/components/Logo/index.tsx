import React from 'react';

import { Container } from './styles';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <Container to="/" color={color}>
      FlipFlops
    </Container>
  );
};

export default Logo;
