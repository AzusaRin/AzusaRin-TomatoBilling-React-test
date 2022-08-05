import Nav from './Nav';
import * as React from 'react';
import {Main, Wrapper} from './LayoutStyle';



const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
export default Layout;