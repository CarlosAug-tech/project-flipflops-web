import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }

  span {
    z-index: 1;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    font-weight: 500;
    background: #1985a1;
    transition: all 0.4s;

    bottom: calc(100% - 10px);
    left: 50%;
    position: absolute;
    transform: translateX(-38%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #1985a1 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }
`;
