import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled(Link)<ContainerProps>`
  position: relative;
  border-top: 2px solid ${(props) => (props.color ? props.color : '#fff')};
  border-bottom: 2px solid ${(props) => (props.color ? props.color : '#fff')};
  color: ${(props) => (props.color ? props.color : '#fff')};
  font: 30px 'Indie Flower';

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${(props) => (props.color ? props.color : '#fff')};
    transform: translateX(-50%);
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: calc(100% + 10px);
  }
`;
