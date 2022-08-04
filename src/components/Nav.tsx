import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as React from 'react';
import Icon from './Icon';






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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="billing"/>
          <Link to="/billing">记账</Link>
        </li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计</Link>
        </li>
        <li>
          <Icon name="chart"/>
          <Link to="/myChart">图表</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;