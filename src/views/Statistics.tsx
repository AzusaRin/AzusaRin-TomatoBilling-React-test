import Layout from '../components/Layout';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import Icon from '../components/Icon';
import {iconSetting} from '../iconSetting';
import styled from 'styled-components';
import {TypeSection} from './Billing/TypeSection';
import dayjs from 'dayjs';
import 'antd/dist/antd.min.css'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React, {useState} from 'react';
import moment from 'moment';




const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  align-items: center;
  border-bottom: 1px solid #999;

  > .tags {
    align-items: center;

    > .icon {
      margin-right: 6px;


    }
  }

  > .note {
    margin-right: auto;
    margin-left: 16px;
    font-size: 14px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 8px 16px;
`;

function Statistics() {
  const [type, setType] = useState<'-' | '+'>('-');
  const [month,setMonth] = useState(dayjs(new Date()).format('YYYY年M月'))
  const onChange: DatePickerProps['onChange'] = (date) => {
    setMonth(moment(date).format('YYYY年M月'));
  };
  const {records} = useRecords();
  const {getName} = useTags();
  const tagNameSetting = (tag: { id: number, name: string }): string => {
    return iconSetting(tag);
  };
  const hash: { [title: string]: RecordItem[] } = {};
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

  const list = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });



  return (
    <Layout>
      <TypeSection
        selected={type}
        onChange={selected => setType(selected)}
      />
      <Space direction="vertical">
        <DatePicker onChange={onChange} picker="month"/>
      </Space>
      <span>{month}</span>
      {list.map(([date, records], index) => {
        return <div key={index}>
          <Header> {date}</Header>
          <div>
            {records.map((r, index) => {

              return <Item key={index}>
                <div className="tags">
                  {r.tagIds.map(tagId => <Icon name={tagNameSetting({id: tagId, name: getName(tagId)})} key={tagId}/>)}
                  {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount" key={r.amount}>
                  {'￥' + r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>;
      })}
    </Layout>
  );
}

export default Statistics;