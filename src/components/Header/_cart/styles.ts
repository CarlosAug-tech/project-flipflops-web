import styled from 'styled-components';

export const Container = styled.li`
  a {
    position: relative;
    color: #fff;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      top: -15px;
      right: -12px;
      position: absolute;
      border-radius: 50%;
      color: #fff;
      background: orange;

      span {
        font-size: 8px;
      }
    }
  }
`;
