import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  & + div {
    margin-top: 20px;
  }
`;

export const StepProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  color: #fff;
  background: #8e8e8e;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  & ~ hr {
    flex: 1;
    max-width: 200px;
    width: 100%;
    height: 6px;
    margin: 0 5px;
    border-radius: 10px;
    background: #8e8e8e;
  }

  &.actived,
  & ~ hr.actived {
    background: #7159c1;
  }
`;
