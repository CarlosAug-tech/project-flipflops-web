import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 100px);
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  max-height: 500px;
  margin: 0 auto;
  /* padding: 20px; */
  border: 1px solid #eee;
`;

export const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px 0;
  /* border: 1px solid blue; */

  img {
    align-self: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #8e8e8e;

    & ~ div {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #eee;
    }
  }

  > strong {
    margin-top: 5px;
  }

  > span {
    color: #999;
  }

  span,
  strong {
    text-align: center;
  }

  & + div {
    /* margin-left: 10px;
    padding-left: 10px; */
    border-left: 1px solid #eee;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItems = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  max-width: 200px;
  width: 100%;
  padding: 5px 10px;
  border: 0;
  border-radius: 4px;
  background: #7159c1;

  svg,
  span {
    color: #fff;
    font-size: 14px;
  }

  svg {
    & + span {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid #8e8e8e;
    }
  }

  & + button {
    margin-top: 10px;
  }
`;

export const ProfileDetails = styled.div`
  flex: 1;
  padding: 20px;
  /* border: 1px solid green; */
`;
