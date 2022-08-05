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
  const Change = (obj:Partial<typeof value>) =>{
    setValue({
      ...value,
      ...obj
    })
  }
  return (
    <MyLayout>
      <TypeSection
        selected={value.type}
        onChange={type => Change({type})}
      />
      <TagsSection
        selected={value.tag}
        onChange={tag => Change({tag})}
      />
      <NoteSection
        selected={value.note}
        onChange={note => Change({note})}
      />
      <NumberPadSection
        selected={value.amount}
        onChange={amount => Change({amount})}
      />
    </MyLayout>
  );
}

export default Billing;