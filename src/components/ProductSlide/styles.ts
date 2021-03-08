import styled, { css } from 'styled-components';

interface ChevronButtonProps {
  isVisiblePrev?: boolean;
  isVisibleNext?: boolean;
}

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: inline-flex;
  transition: transform 0.5s;
`;

export const SlideChevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  left: 0;
  top: calc(50% - 10px);
  position: absolute;

  /* > button {
    border: 0;
    background: transparent;
  } */
`;

export const ChevronButton = styled.button<ChevronButtonProps>`
  border: 0;
  background: transparent;

  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`;
