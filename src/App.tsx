import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from 'components/Layout';





function App() {
  return (
        <Routes>
          <Route path="/" element={<Billing/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="billing" element={<Billing/>}/>
          <Route path="myChart" element={<MyChart/>}/>
          <Route path="statistics" element={<Statistics/>}/>
        </Routes>
  );
}

function Billing() {
  return (
    <Layout>
    <div>记账</div>
    </Layout>
  );
}

function MyChart() {
  return (
    <Layout>
      <div>图表</div>
    </Layout>
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
    <Layout>
      <div>统计</div>
    </Layout>
  );
}

export default App;
