import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface LoadingContainerProps {
  text?: string;
  icon: React.ComponentType<IconBaseProps>;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({
  text,
  icon: Icon,
}) => {
  return (
    <Container>
      {text}
      {Icon && <Icon size={16} />}
    </Container>
  );
};

export default LoadingContainer;
