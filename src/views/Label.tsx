import * as React from 'react';
import {LabelWrapper, Main} from '../components/LayoutStyle';
import Nav from '../components/Nav';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';


const TagList = styled.ol`
  font-size: 16px;
  background: white;

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
const Button = styled.button`
  margin-top: 20px;
  background-color: white;
  padding: 8px 20px 8px 8px;
  color: #333333;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  display: flex;

  > svg {
    height: 24px;
    width: 24px;
    padding: 2px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: #333333;
    margin-right: 16px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Label() {
  const {tags, setTags} = useTags();
  return (
    <LabelWrapper>
      <Main>
        <TagList>
          {tags.map(tag =>
            <li key={tag.id}>
              <Link to={'/label/' + tag}>
                <span>{tag.name}</span>
                <Icon name="right"/>
              </Link>
            </li>
          )}
        </TagList>
        <ButtonWrapper>
          <Button>
            <Icon name="createTag"/>
            新增标签
          </Button>
        </ButtonWrapper>
      </Main>
      <Nav/>
    </LabelWrapper>
  );
}

export default Label;
