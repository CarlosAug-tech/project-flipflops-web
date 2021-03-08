import styled from 'styled-components';

interface IContainerProps {
  isVisibleModal: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  visibility: ${(props) => (props.isVisibleModal ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisibleModal ? '1' : '0')};
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.4s, visible 0.4s;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  max-height: 800px;
  padding: 20px;
  border-radius: 4px;
  overflow: auto;
  background: #fff;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  > h3 {
    font-size: 18px;
    text-align: left;
    margin-bottom: 10px;

    &:nth-of-type(1) {
      font-size: 22px;
    }

    span {
      align-self: baseline;
      color: #999;
      font-size: 14px;
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px 0;

  strong {
    display: flex;
    align-items: center;

    & + strong {
      margin-top: 3px;
    }

    span {
      color: #333;
      margin-left: 3px;
      font-weight: 400;
    }
  }
`;

export const InfoShipping = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`;

export const ProductDescription = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 150px;
    margin-right: 5px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      & + strong {
        margin-top: 3px;
      }
    }
  }
`;

export const ProductTotal = styled.div`
  padding: 20px;
  background: #f5f5f5;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`;

export const CloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  top: 10px;
  position: absolute;
  border: 0;
  color: #fff;
  background: transparent;
`;
