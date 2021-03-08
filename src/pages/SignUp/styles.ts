import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  > a {
    align-self: center;
    width: 120px;
    margin: 20px 0;
    text-align: center;
  }

  > form {
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

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    > div {
      max-width: calc(260px - 20px);
      margin: 10px;
    }

    > button {
      max-width: 500px;
      margin: 20px auto;
    }

    > a {
      width: 100%;
      color: #222;
      text-align: center;
    }
  }
`;
