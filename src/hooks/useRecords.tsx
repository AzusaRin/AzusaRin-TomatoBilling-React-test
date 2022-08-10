import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';


type NewRecordItem = {
  tagIds: number[]
  note: string
  type: '+' | '-'
  amount: number
}
type RecordItem = NewRecordItem & {
  createdAt: string
}
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: NewRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('没钱不记账哦');
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date().toISOString())};
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};