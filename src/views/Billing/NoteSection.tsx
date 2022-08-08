import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/FormItem';

const Wrapper = styled.section`
  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 16px;
    background-color: white;

    .noteName {
      padding-right: 16px;
    }

    input {
      height: 3.5rem;
      flex-grow: 1;
      background-color: transparent;
      border: none;
      padding-right: 16px;
      font-size: 14px;
    }
  }
`;
type Props = {
  selected: string
  onChange: (value: string) => void
}
const NoteSection: React.FunctionComponent<Props> = (props) => {
  const note = props.selected;
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}/>
    </Wrapper>
  );
};

export {NoteSection};