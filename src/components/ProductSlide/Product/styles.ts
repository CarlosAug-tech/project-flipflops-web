import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  &:nth-of-type(4),
  &:nth-of-type(8) {
    margin-right: 50px;
  }

  img {
    width: 100%;
  }

  > div {
    margin: 10px 0;

    > h3 {
      font-size: 15px;
      text-align: center;
    }

    > p {
      word-break: break-all;
      text-align: justify;
      font-size: 14px;
    }

    > div {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      margin-top: 5px;

      strong {
        font-size: 15px;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 100%;
    margin-top: auto;
    text-align: center;
    border: 0;
    border-radius: 4px;
    color: #fff;
    background: #7159c1;
    transition: background 0.4s;

    span {
      align-self: center;
      width: 100%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      /* flex-direction: column; */
      width: 35px;
      padding: 5px;
      margin-right: 5px;
      padding-right: 5px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right: 1px solid #8e8e8e;
      background: ${shade(0.05, '#7159c1')};

      span {
        font-size: 10px;
      }
    }

    &:hover {
      background: ${shade(0.05, '#7159c1')};
    }
  }
`;
