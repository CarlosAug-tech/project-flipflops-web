import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  h3 {
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  > button {
    align-self: flex-end;
    padding: 10px;
    border: 0;
    border-radius: 4px;
    background: #7159c1;
    text-transform: uppercase;

    > a {
      font-size: 14px;
      color: #fff;
    }
  }
`;

export const TableItems = styled.table`
  /* max-width: 900px; */
  width: 100%;
  padding: 5px;
  margin: 0 auto;

  thead th {
    text-transform: uppercase;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: center;

    &:last-child {
      button {
        margin: 0 auto;
      }
    }

    img {
      align-self: center;
      width: 120px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 50px;
        margin: 0 5px;
        border: 1px solid #7159c1;
        border-radius: 4px;
        text-align: right;
        background: #eee;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;

      svg {
        color: #7159c1;
      }
    }
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: baseline;
      /* max-width: 900px; */
      width: 100%;
      margin: 0 auto;
      margin-bottom: 10px;

      span {
        color: #999;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
      }

      strong {
        font-size: 18px;
        margin-left: 5px;
      }

      select {
        /* width: 150px; */
        margin-left: 5px;
        padding: 5px 0;
        border-radius: 4px;
      }
    }
  }
`;
