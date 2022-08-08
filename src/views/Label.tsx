import * as React from 'react';
import {LabelWrapper, Main} from '../components/LayoutStyle';
import Nav from '../components/Nav';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';


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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Label() {
  const {tags} = useTags();
  return (
    <LabelWrapper>
      <Main>
        <TagList>
          {tags.map(tag =>
            <li key={tag.id}>
              <Link to={'/label/' + tag.id}>
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
