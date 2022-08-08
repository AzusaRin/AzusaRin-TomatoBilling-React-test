import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/FormItem';

const Wrapper = styled.section`
  padding: 8px 0;
  background-color: white;
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
      <Input label="备注" type="text" placeholder="写点备注吧~" value={note} onChange={onChange}/>
    </Wrapper>
  );
};

export {NoteSection};