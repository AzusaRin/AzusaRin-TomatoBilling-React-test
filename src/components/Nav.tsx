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
      text-align: center;
      flex-grow: 1;

      > a {
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/billing">
            <Icon name="billing"/>
            记账</Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            统计</Link>
        </li>
        <li>
          <Link to="/myChart">
            <Icon name="chart"/>
            图表</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;