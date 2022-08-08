import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';
import {LabelWrapper, Main} from '../components/LayoutStyle';
import Nav from '../components/Nav';
import {Input} from '../components/FormItem';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(253, 167, 168);
  line-height: 20px;
  padding: 14px;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`;

type Params = {
  id: string
}
const EditLabel: React.FunctionComponent = () => {
  const {tags, updateTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = tags.filter(t => t.id === parseInt(idString!))[0];
  return (
    <LabelWrapper>
      <Main>
        <Header>
          <Icon name="left"/>
          <span>编辑标签</span>
          <Icon/>
        </Header>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                 onChange={(event) => updateTag(tag.id, {name: event.target.value})}/>
        </InputWrapper>
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


