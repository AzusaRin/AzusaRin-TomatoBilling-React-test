import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;
  background-color: white;
  height: 44px;

  .noteName {
    padding-right: 16px;
  }

  input {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
    font-size: 14px;
  }
`;
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FunctionComponent<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span className="noteName">{props.label}</span>
      <input {...rest}
      />
    </Label>
  );
};

export {Input};