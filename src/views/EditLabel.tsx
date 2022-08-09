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
  font-size: 18px;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Params = {
  id: string
}
const EditLabel: React.FunctionComponent = () => {
  const {tags, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = tags.filter(t => t.id === parseInt(idString!))[0];

  const onclickBack = () => {
    window.history.back();
  };

  return (
    <LabelWrapper>
      <Main>
        <Header>
          <Icon name="left" onClick={onclickBack}/>
          <span>编辑标签</span>
          <Icon/>
        </Header>
        {tag ? <div>
          <InputWrapper>
            <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                   onChange={(event) => updateTag(tag.id, {name: event.target.value})}/>
          </InputWrapper>
          <ButtonWrapper>
            <Button onClick={() => deleteTag(tag.id)}>
              <Icon name="deleteTag"/>
              <span>删除标签</span>
            </Button>
          </ButtonWrapper>
        </div> : <div>标签不存在</div>}
      </Main>
      <Nav/>
    </LabelWrapper>


  );

};

export {EditLabel};


