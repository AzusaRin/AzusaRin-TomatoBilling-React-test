import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Billing from 'views/Billing';
import MyChart from 'views/MyChart';
import Statistics from 'views/Statistics';
import NotFound from 'views/NotFound';
import  Label  from 'views/Label';





function App() {
  return (
        <Routes>
          <Route path="/" element={<Billing/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="billing" element={<Billing/>}/>
          <Route path="myChart" element={<MyChart/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="label" element={<Label/>}/>
        </Routes>
  );
}


export default App;
