import {defaultTags} from './lib/defaultTags';

export const iconSetting=(tag:{id:number,name:string}) =>{
  const defaultTagsName =defaultTags.map(n => n.name);
  if (tag.id <= 21 && defaultTagsName.includes(tag.name)) {
    return tag.name;
  } else {
    return 'tag';
  }
}