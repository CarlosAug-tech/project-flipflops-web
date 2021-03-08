import styled from 'styled-components';

interface IContainerProps {
  isVisibleOrder: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: ${(props) => (props.isVisibleOrder ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;

  > h3 {
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-height: 500px;
  height: 100%;
  padding: 20px;
`;

export const TableOrder = styled.table`
  width: 100%;
  border-collapse: collapse;

  &,
  thead th,
  tbody td {
    border: 1px solid #eee;
  }

  thead th {
    padding: 20px;
    text-align: center;
  }

  tbody td {
    padding: 10px 5px;
    text-align: center;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 0;
        background: transparent;

        span {
          font-size: 14px;
        }
      }
    }
  }
`;
