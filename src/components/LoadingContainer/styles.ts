import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 2px;
    animation: animatedLoading infinite linear 2s;
  }

  @keyframes animatedLoading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
