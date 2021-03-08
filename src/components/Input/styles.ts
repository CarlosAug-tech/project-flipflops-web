import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface InputElementProps {
  isIcon: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;

  & + div {
    margin-top: 20px;
  }

  label {
    top: 17px;
    left: 31px;
    position: absolute;
    transition: all 0.4s;
    pointer-events: none;
  }

  svg {
    top: 15px;
    left: 7px;
    position: absolute;
    color: #222;
    transition: color 0.4s;
  }
`;

export const InputElement = styled.input<InputElementProps>`
  width: 100%;
  padding: ${(props) => (props.isIcon ? '16px 30px' : '16px 30px 16px 8px')};
  border: 1px solid #222;
  border-radius: 4px;

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 3px;
    left: 3px;
    color: #8e8e8e;
    font-size: 12px;
  }

  &:focus ~ svg,
  &:not(:placeholder-shown) ~ svg {
    color: #8e8e8e;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ${(props) =>
    props.isIcon === false &&
    css`
      & ~ label {
        left: 9px;
      }
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  right: 35px;
  top: 2px;
  position: absolute;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
