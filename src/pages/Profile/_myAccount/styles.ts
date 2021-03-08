import styled from 'styled-components';

interface IContainerProps {
  isVisibleMyAccount: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: ${(props) => (props.isVisibleMyAccount ? 'flex' : 'none')};
`;
