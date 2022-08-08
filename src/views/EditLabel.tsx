import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';
import {LabelWrapper, Main} from '../components/LayoutStyle';
import Nav from '../components/Nav';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(253, 167, 168);
  line-height: 20px;
  padding: 14px;
`;


type Params = {
  id: string
}
const EditLabel: React.FunctionComponent = () => {
  const {tags} = useTags();
  let {id} = useParams<Params>();
  const tag = tags.filter(t => t.id === parseInt(id!))[0];
  return (
    <LabelWrapper>
      <Main>
        <Header>
          <Icon name="left"/>
          <span>编辑标签</span>
          <Icon/>
        </Header>
        <div>
          <label>
            <span>标签名</span>
            <input type="text" placeholder="标签名"
                   defaultValue={tag.name}
            />
          </label>
        </div>
        <Button>
          <Icon name="deleteTag"/>
          删除标签
        </Button>
      </Main>
      <Nav/>
    </LabelWrapper>
  );
};

export {EditLabel};


