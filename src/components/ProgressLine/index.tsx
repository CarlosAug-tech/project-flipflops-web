import React from 'react';
import {
  FaAddressBook,
  FaCheckCircle,
  FaCreditCard,
  FaShoppingBasket,
} from 'react-icons/fa';

import { Container, StepProgress } from './styles';

interface ProgressLineProps {
  stepProgressOne?: boolean;
  stepProgressTwo?: boolean;
  stepProgressThree?: boolean;
  stepProgressFour?: boolean;
}

const ProgressLine: React.FC<ProgressLineProps> = ({
  stepProgressOne = false,
  stepProgressTwo = false,
  stepProgressThree = false,
  stepProgressFour = false,
}) => {
  return (
    <Container>
      <StepProgress className={stepProgressOne ? 'actived' : ''}>
        <FaShoppingBasket size={30} />
      </StepProgress>
      <hr className={stepProgressOne ? 'actived' : ''} />
      <StepProgress className={stepProgressTwo ? 'actived' : ''}>
        <FaAddressBook size={30} />
      </StepProgress>
      <hr className={stepProgressTwo ? 'actived' : ''} />
      <StepProgress className={stepProgressThree ? 'actived' : ''}>
        <FaCreditCard size={30} />
      </StepProgress>
      <hr className={stepProgressThree ? 'actived' : ''} />
      <StepProgress className={stepProgressFour ? 'actived' : ''}>
        <FaCheckCircle size={30} />
      </StepProgress>
    </Container>
  );
};

export default ProgressLine;
