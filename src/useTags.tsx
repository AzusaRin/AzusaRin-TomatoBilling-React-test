import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id:createId(),name:'衣'}
]
const useTags = () =>{
  const [tags, setTags] = useState<{id:number,name:string}[]>(defaultTags);
  return{tags,setTags}
}

export {useTags}