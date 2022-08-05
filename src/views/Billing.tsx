import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import layout from '../components/Layout';
import {TagsSection} from './Billing/TagsSection';
import {NoteSection} from './Billing/NoteSection';
import {NumberPadSection} from './Billing/NumberPadSection';
import {TypeSection} from './Billing/TypeSection';


const MyLayout = styled(layout)`
  display: flex;
  flex-direction: column;
`;

type Type = '-' | '+'

function Billing() {
  const [value, setValue] = useState({
    type: '-' as Type,
    tag: [] as string[],
    note: '',
    amount: 0
  });
  return (
    <MyLayout>
      {value.type}
      <br/>
      {value.tag}
      <br/>
      {value.note}
      <br/>
      {value.amount}
      <TypeSection
        selected={value.type}
        onChange={(type) => setValue({
          ...value,
          type: type
        })}
      />
      <TagsSection
        selected={value.tag}
        onChange={(tag) => setValue({
          ...value,
          tag: tag
        })}
      />
      <NoteSection
        selected={value.note}
        onChange={(note) => setValue({
          ...value,
          note: note
        })}
      />
      <NumberPadSection
        selected={value.amount}
        onChange={(amount) => setValue({
          ...value,
          amount: amount
        })}
      />
    </MyLayout>
  );
}

export default Billing;