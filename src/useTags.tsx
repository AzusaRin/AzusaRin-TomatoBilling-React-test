import {useEffect, useState} from 'react';
import {createId} from './lib/createId';
import {useUpdate} from './hooks/useUpdate';
import {defaultTags} from './lib/defaultTags';


const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);


  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = defaultTags;
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const updateTag = (id: number, obj: { name: string }) => {
    if (window.confirm('确认要修改标签名吗')) {
      if (obj.name === '') {
        window.alert('标签名不能为空');
        return;
      } else if (obj.name.length >= 10) {
        window.alert('标签名不可超过10字符');
        return;
      } else if (tags.filter(tag => tag.name === obj.name).length > 0) {
        window.alert('标签名不可重复');
        return;
      } else {
        setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
        window.history.back();
      }
    }
  };
  const deleteTag = (id: number) => {
    if (window.confirm('确定删除该标签吗？')) {
      setTags(tags.filter(tag => tag.id !== id));
      window.history.back();
    }
  };

  const addTag = () => {
    const newTagName = window.prompt('请输入标签名称');
    if (newTagName === null) {
      return;
    }
    if (newTagName === '') {
      console.log(newTagName === '');
      window.alert('标签名不能为空');
      return;
    } else if (tags.filter(tag => tag.name === newTagName).length > 0) {
      window.alert('标签名不可重复');
      return;
    } else if (newTagName.length >= 10) {
      window.alert('标签名不可超过10字符');
      return;
    } else {
      setTags([...tags, {id: createId(), name: newTagName}]);
    }
  };

  return {tags, setTags, updateTag, deleteTag, addTag};
};


export {useTags};