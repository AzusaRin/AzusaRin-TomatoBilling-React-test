import styled from 'styled-components';
import React, {useRef} from 'react';

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
  const inputEl = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (inputEl.current !== null) {
      props.onChange(inputEl.current.value);
    }
  };
  return (
    <Wrapper>
      <label className="notes">
        <span className="noteName">备注</span>
        <input type="text" placeholder="写点备注吧~"
               defaultValue={note}
               ref={inputEl}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};

export {NoteSection};