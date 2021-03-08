import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, InputElement, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  labelText: string;
}

const Input: React.FC<InputProps> = ({
  name,
  labelText,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef(null);

  const { fieldName, error, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputElement
        type="text"
        placeholder=" "
        isIcon={!!Icon}
        ref={inputRef}
        defaultValue={defaultValue}
        isErrored={!!error}
        {...rest}
      />
      {Icon && <Icon size={20} />}
      <label htmlFor="">{labelText}</label>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
