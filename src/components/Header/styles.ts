import styled, { css } from 'styled-components';

interface ContainerProps {
  isHome?: boolean;
}

export const Container = styled.header<ContainerProps>`
  z-index: 1;
  width: 100vw;
  padding: 0 20px;
  top: 0;
  left: 0;
  position: absolute;
  background: #7159c1;

  ${(props) =>
    props.isHome &&
    css`
      position: absolute;
      background: transparent;
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
`;

export const NavMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      & + li {
        margin-left: 10px;
        padding-left: 10px;
        /* border-left: 1px solid #dbdbdb; */
      }

      a {
        color: #fff;
        transition: color 0.4s;

        &:hover {
          color: #dbdbdb;
        }
      }

      > div {
        position: relative;

        img {
          cursor: pointer;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #dbdbdb;
        }

        &:hover > div {
          visibility: visible;
          opacity: 1;
        }

        div {
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: 220px;
          padding: 20px;
          left: 50%;
          top: calc(100% + 10px);
          position: absolute;
          visibility: hidden;
          opacity: 0;
          background: rgba(0, 0, 0, 0.7);
          transform: translateX(-50%);
          transition: opacity 0.4s, visibility 0.4s;

          &::before {
            content: '';
            width: 0;
            height: 0;
            left: 50%;
            top: -10px;
            position: absolute;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid rgba(0, 0, 0, 0.7);
            transform: translateX(-50%);
          }

          a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: color 0.4s;

            & + a {
              margin-top: 8px;
              padding-top: 8px;
              border-top: 1px solid #dbdbdb;
            }

            &:hover {
              color: #dbdbdb;
            }
          }
        }
      }
    }
  }
`;
