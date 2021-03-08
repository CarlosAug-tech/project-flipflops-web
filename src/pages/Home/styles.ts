import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductCase = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    a {
      display: flex;
      align-items: center;
      position: relative;
      color: #222;

      &::after {
        content: '';
        width: 0;
        height: 2px;
        left: 50%;
        bottom: -1px;
        position: absolute;
        background: #222;
        transform: translateX(-50%);
        transition: all 0.4s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  & + div {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #dbdbdb;
  }
`;
