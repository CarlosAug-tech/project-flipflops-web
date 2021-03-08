import styled, { css } from 'styled-components';

interface ContainerProps {
  isHome?: boolean;
  isPrivate?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  min-height: 100vh;
  position: relative;

  ${(props) =>
    props.isPrivate &&
    css`
      padding-top: 100px;
    `}
`;
