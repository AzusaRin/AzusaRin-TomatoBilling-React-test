import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
    <Wrapper>
      <Main>
        <Routes>
          <Route path="/" element={<Billing/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="billing" element={<Billing/>}/>
          <Route path="myChart" element={<MyChart/>}/>
          <Route path="statistics" element={<Statistics/>}/>
        </Routes>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

function Billing() {
  return (
    <div>
     记账
      </div>
  );
}

function MyChart() {
  return (
    <div>图表</div>
  );
}

function NotFound() {
  return (
    <div>
      404
    </div>);
}

function Statistics() {
  return (
    <div>
      统计
    </div>
  );
}

export default App;
