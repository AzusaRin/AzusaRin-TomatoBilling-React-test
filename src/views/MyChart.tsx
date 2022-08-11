import Layout from '../components/Layout';
import * as React from 'react';
import {useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {TypeSection} from './Billing/TypeSection';
import dayjs from 'dayjs';
import {DatePicker, DatePickerProps, Space} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.min.css';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
  padding-right: 64px;
  font-size: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`

const Chart = styled.div`
overflow: auto;
  margin-top: 5rem;
`

const MyChart: React.FunctionComponent = () => {
  const [type, setType] = useState<'-' | '+'>('-');
  const [month, setMonth] = useState(dayjs(new Date()).format('YYYY年M月'));
  const onChange: DatePickerProps['onChange'] = (date) => {
    setMonth(moment(date).format('YYYY年M月'));
  };
  const {getName} = useTags();
  const {records} = useRecords();
  const hash: { [title: string]: RecordItem[] } = {};
  const tagHash: { [key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.type === type
    && dayjs(r.createdAt, 'month').format('YYYY年M月') === month
  );

  selectedRecords.map(r => {
      const title = dayjs(r.createdAt).format('YYYY年M月D日');
      if (!(title in hash)) {
        hash[title] = [];
      }
      return hash[title].push(r);
    }
  );

  selectedRecords.map(r => {
    const key = r.tagIds.toString();
    if (!(key in tagHash)) {
      tagHash[key] = [];
    }
   return  tagHash[key].push(r);
  });




  const list = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  const array = Object.entries(tagHash).sort((a,b)=>{
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  })
  const totalList = list.map(([date, records]) => records.reduce((sum, r) => sum + r.amount, 0));
  const tagList = array.map(([id,records])=>parseInt(id))
  const tagTotalList = array.map(([date, records]) => records.reduce((sum, r) => sum + r.amount, 0));



  const arrayTag = [];
  const arrayDate = [];
  const dataDate = [];
  for (let i = 0; i < list.length; i++) {
    arrayDate.push({
      value: totalList[i],
      name: list[i][0]
    });
    dataDate.push(list[i][0]);
  }

  for (let i = 0; i <array.length; i++) {
    arrayTag.push({
      value: tagTotalList[i],
      name: getName(tagList[i])
    });

  }

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: dataDate
    },
    series: [
      {
        name: '标签合计',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: arrayTag
      },
      {
        name: '日期合计',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
          length: 30
        },
        data: arrayDate
      }
    ]
  };
  return (
    <Layout>
      <TypeSection
        selected={type}
        onChange={selected => setType(selected)}
      />
      <Wrapper>
      <Space direction="vertical">
        <DatePicker onChange={onChange} picker="month"/>
      </Space>
      <span>{month}</span>
      </Wrapper>
      <Chart>
      <ReactECharts option={options}/>;
      </Chart>
    </Layout>
  );
};

export default MyChart;