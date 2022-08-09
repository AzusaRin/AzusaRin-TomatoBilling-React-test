import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'}
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };

  const deleteTag = (id:number) =>{
    const index = findTagIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index,1)
    setTags(tagsClone)
  }
  return {tags, setTags, updateTag, findTagIndex,deleteTag};
};

export {useTags};