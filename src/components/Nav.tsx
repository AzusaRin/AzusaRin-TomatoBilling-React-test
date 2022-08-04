import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as React from 'react';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;

    > li {
      flex-grow: 1;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li><Link to="billing">记账</Link></li>
        <li><Link to="myChart">图表</Link></li>
        <li><Link to="statistics">统计</Link></li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;