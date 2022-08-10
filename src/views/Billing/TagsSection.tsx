import styled from 'styled-components';
import React from 'react';
import Icon from 'components/Icon';
import {useTags} from '../../hooks/useTags';
import {Link} from 'react-router-dom';
import {iconSetting} from '../../iconSetting';


const Wrapper = styled.section`
  flex-grow: 1;
  height: 5rem;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > ul {
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;


      > .svgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        background-color: white;
        border-radius: 50%;
        padding: 0 16px;
        margin: 8px;

        > .icon {
          height: 60px;
          width: 60px;
          fill: currentColor;
          overflow: hidden;
          vertical-align: middle;
          padding: 2px;
        }
      }

      &.selected {

        > .svgWrapper {
          background-color: rgb(253, 167, 168);
        }
      }
    }
  }

}

.new {
  display: flex;
  justify-content: space-between;

  button {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
    background-color: white;
    padding: 8px 20px 8px 8px;
    color: #333333;
    border-radius: 8px;
    border: none;

    &:active {
      background-color: rgb(234, 236, 239);
    }
  }

  .icon {
    height: 22px;
    width: 22px;
    fill: currentColor;
    overflow: hidden;
    vertical-align: middle;
    padding-left: 2px;
    padding-bottom: 4px;
  }
`;
type Props = {
  selected: number[]
  onChange: (selected: number[]) => void
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
  const selectedTag = props.selected;
  const {tags, addTag} = useTags();

  const onToggleTag = (tagId: number) => {
    if (selectedTag.includes(tagId)) {
      props.onChange(selectedTag.filter(t => t !== tagId));
    } else if (selectedTag.length >= 1) {
      selectedTag.splice(0, 1);
      props.onChange([...selectedTag, tagId]);
    } else {
      props.onChange([...selectedTag, tagId]);
    }
  };

  const tagNameSetting = (tag: { id: number, name: string }):string => {
   return  iconSetting(tag);
  };
  const getClass = (tagId: number) => {
    return selectedTag.includes(tagId) ? 'selected' : '';
  };
  return (
    <Wrapper>
      <div className="new">
        <button onClick={addTag}>
          <svg className="icon">
            <Icon name="createTag"/>
          </svg>
          新增标签
        </button>
        <button>
          <Link to={'/label'}>
            <svg className="icon">
              <Icon name="labels"/>
            </svg>
            管理标签
          </Link>
        </button>
      </div>
      <ul>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={() => {onToggleTag(tag.id);}}
              className={getClass(tag.id)}
          >
            <div className="svgWrapper">
              <Icon name={tagNameSetting(tag)}/>
            </div>
            {tag.name}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};


export {TagsSection};