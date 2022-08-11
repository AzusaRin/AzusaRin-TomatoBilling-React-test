import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import layout from '../components/Layout';
import {TagsSection} from './Billing/TagsSection';
import {NoteSection} from './Billing/NoteSection';
import {NumberPadSection} from './Billing/NumberPadSection';
import {TypeSection} from './Billing/TypeSection';
import {useRecords} from '../hooks/useRecords';
import dayjs from 'dayjs';
import moment from 'moment';
import type {DatePickerProps} from 'antd';
import {DatePicker, Space} from 'antd';


const MyLayout = styled(layout)`
  display: flex;
  flex-direction: column;
`;

type Type = '-' | '+'


function Billing() {
  const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
  const onChange: DatePickerProps['onChange'] = (date) => {
    setDate(moment(date).format('YYYY-MM-DD'));
  };

  const defaultFormData = {
    type: '-' as Type,
    tagIds: [] as number[],
    note: '',
    amount: 0,
    createdAt: date
  };


  const [value, setValue] = useState(defaultFormData);
  const Change = (obj: Partial<typeof value>) => {
    setValue({
      ...value,
      ...obj,
      createdAt: date
    });
  };
  const {addRecord} = useRecords();
  const submit = () => {
    if (addRecord(value)) {
      alert('保存成功！');
      setValue(defaultFormData);
    }

  };

  return (
    <MyLayout>
      <TypeSection
        selected={value.type}
        onChange={type => Change({type})}
      />
      <Space direction="vertical">
        <DatePicker onChange={onChange}/>
      </Space>
      <TagsSection
        selected={value.tagIds}
        onChange={tagIds => Change({tagIds})}
      />
      <NoteSection
        selected={value.note}
        onChange={note => Change({note})}
      />
      <NumberPadSection
        selected={value.amount}
        onChange={amount => Change({amount})}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Billing;