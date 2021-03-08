import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  & + div {
    margin-left: 20px;
  }

  h3 {
    text-align: center;
  }
`;

export const TableItems = styled.table`
  width: 100%;
  padding: 5px;
  margin: 0 auto;

  thead th,
  tbody td {
    font-size: 12px;
  }

  thead th {
    text-transform: uppercase;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: center;

    img {
      align-self: center;
      width: 80px;
    }
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }

  > div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: baseline;
      margin-bottom: 10px;

      span {
        color: #999;
        font-size: 14px;
        font-weight: bold;
      }

      strong {
        font-size: 18px;
        margin-left: 5px;
      }
    }
  }
`;

export const InfoUser = styled.div`
  display: flex;
  justify-content: center;

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    & + div {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid #eee;
    }

    span {
      font-size: 14px;

      strong {
        margin-right: 2px;
      }
    }

    span {
      margin-top: 5px;
    }
  }
`;

export const ResultSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  span,
  strong {
    margin: 5px 0;
    color: #999;
    font-size: 22px;
    font-weight: bold;
  }

  span {
    a {
      color: #222;
      text-decoration: underline;
    }
  }

  svg:nth-of-type(2) {
    margin: 5px 0;
  }
`;
