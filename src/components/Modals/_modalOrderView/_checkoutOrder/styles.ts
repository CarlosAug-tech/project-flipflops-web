import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);

    & + div {
      margin-top: 10px;
    }

    > div {
      display: flex;
      align-items: center;

      > strong,
      > span {
        width: 50%;
        padding: 5px;
      }

      strong {
        background: #f5f5f5;
      }

      > span {
        text-align: right;
        background: #fbfbfb;
      }

      & + div {
        margin-top: 5px;
      }
    }
  }
`;
