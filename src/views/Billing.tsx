import * as React from 'react';
import styled from 'styled-components';
import layout from '../components/Layout';
import {TagsSection} from './Billing/TagsSection';
import {NotesSection} from './Billing/NotesSection';
import {NumberPadSection} from './Billing/NumberPadSection';
import {TypeSection} from './Billing/TypeSection';


const MyLayout = styled(layout)`
  display: flex;
  flex-direction: column;
`;

function Billing() {
  return (
    <MyLayout>
      <TypeSection/>
      <TagsSection/>
      <NotesSection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Billing;