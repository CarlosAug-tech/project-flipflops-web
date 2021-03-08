import styled, { css } from 'styled-components';

interface ImageElementProps {
  isActived: boolean;
  isActivedReverse: boolean;
}

export const Container = styled.div`
  /* max-width: 1200px; */
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0px auto;
  position: relative;
  overflow: hidden;
`;

export const ImageElement = styled.img<ImageElementProps>`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
  filter: grayscale(5);
  transform: ${(props) =>
    props.isActived ? 'translateX(0px)' : 'translateX(100%)'};
  transition: transform 0.4s;

  ${(props) =>
    props.isActivedReverse &&
    css`
      transform: translateX(-100%);
    `}
`;

export const ChevronButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 40px;
  height: 40px;
  top: 50%;
  position: absolute;
  border-radius: 50%;
  border: 0;
  background: transparent;
  transition: background 0.4s;

  &:nth-of-type(1) {
    left: 10px;
  }

  &:nth-of-type(2) {
    right: 10px;
  }

  &:hover {
    background: #dbdbdb42;
  }

  > svg {
    color: #fff;
  }
`;
