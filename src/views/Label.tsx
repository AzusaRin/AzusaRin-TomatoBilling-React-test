import * as React from 'react';
import {LabelWrapper, Main} from '../components/LayoutStyle';
import Nav from '../components/Nav';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {iconSetting} from '../iconSetting';
import {defaultTags} from '../lib/defaultTags';


const TagList = styled.ol`
  font-size: 16px;
  background: white;
  overflow: auto;
  height: 30rem;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-top: 20px;
`;

function Label() {
  const {tags, addTag, setTags} = useTags();
  const tagNameSetting = (tag: { id: number, name: string }): string => {
    return iconSetting(tag);
  };
  const tagReset = () => {
    if (window.confirm('确定要初始化所有标签吗？')) {
      setTags(defaultTags);
    }
  };
  return (
    <LabelWrapper>
      <Main>
        <TagList>
          {tags.map(tag =>
            <li key={tag.id}>
              <Link to={'/label/' + tag.id}>
                <Icon name={tagNameSetting(tag)}/>
                <span>{tag.name}</span>
                <Icon name="right"/>
              </Link>
            </li>
          )}
        </TagList>
        <ButtonWrapper>
          <Button onClick={addTag}>
            <Icon name="createTag"/>
            新增标签
          </Button>
          <Button onClick={tagReset}>
            <Icon name="tagReset"/>
            初始化标签
          </Button>
        </ButtonWrapper>
      </Main>
      <Nav/>
    </LabelWrapper>
  );
}

export default Label;
