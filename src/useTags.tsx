import {useState} from 'react';
import {createId} from './lib/createId';


const useTags = () =>{
  const [tags, setTags] = useState<{id:number,name:string}[]>(
    [
      {id:createId(),name:'衣'}
    ]
  );
  return{tags,setTags}
}

export {useTags}