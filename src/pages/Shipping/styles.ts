import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  h2 {
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    > input {
      max-width: calc(320px - 20px);
      width: 100%;
      margin: 10px;
      padding: 16px 30px;
      border: 1px solid #222;
      border-radius: 4px;
      pointer-events: none;
      background: #f5f5f5;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 10px 0;
      position: relative;

      &::after,
      &::before {
        content: '';
        width: calc(50% - 150px);
        height: 2px;
        top: 50%;
        position: absolute;
        background: linear-gradient(
          to right,
          rgba(255, 0, 0, 0),
          #7159c1,
          rgba(255, 0, 0, 0)
        );
      }

      &::before {
        left: 5%;
      }

      &::after {
        right: 5%;
      }
    }

    > button {
      max-width: 500px;
      margin: 20px auto;
      font-size: 14px;
      text-transform: uppercase;

      a {
        color: #fff;
      }
    }
  }
`;
