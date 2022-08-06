import * as React from 'react';
import {LabelWrapper, Main} from '../components/LayoutStyle';
import Nav from '../components/Nav';
import {useTags} from '../useTags';



function Label(){
  const{tags,setTags} = useTags()
return(
  <LabelWrapper>
    <Main>
   <span>xxx</span>
    </Main>
    <Nav/>
  </LabelWrapper>
)
}
export default Label
