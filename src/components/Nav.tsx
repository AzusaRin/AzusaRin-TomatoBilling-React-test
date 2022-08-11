import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import * as React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 470px;
  height: 60px;
  
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
  
    
    > li {
      text-align: center;
      flex-grow: 1;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;

        .icon {
          width: 32px;
          height: 32px;
          padding: 2px;
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
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "rgb(253,167,168)" : "",
                fill:isActive ? "rgb(253,167,168)" : ""
              };
            }}
            to="/billing">
            <Icon name="billing"/>
            记一笔</NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "rgb(253,167,168)" : "",
                fill:isActive ? "rgb(253,167,168)" : ""
              };
            }}
            to="/statistics" >
            <Icon name="statistics"/>
            账本</NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "rgb(253,167,168)" : "",
                fill:isActive ? "rgb(253,167,168)" : ""
              };
            }}
            to="/myChart">
            <Icon name="chart"/>
            图表</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;