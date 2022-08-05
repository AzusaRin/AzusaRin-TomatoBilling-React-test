import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ul {
    height: 55px;
    max-width: 470px;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgb(253, 167, 168);
    display: flex;
    font-size: 18px;

    .type {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      padding: 20px 16px 8px 16px;
      position: relative;

      &.selected {
        box-shadow: none;
        font-weight: bolder;

        &::after {
          content: "";
          width: 100%;
          height: 2px;
          background: #000;
          position: absolute;
          left: 0;
          bottom: 1px;
        }
      }
    }

    .null {
      width: 100px;
    }
  }
`;
type Props = {
  selected: '-' | '+'
  onChange: (selected: '-' | '+') => void
}
const TypeSection: React.FunctionComponent<Props> = (props) => {
  const typeMap = {'-': '支出', '+': '收入'};
  type TypeList = keyof typeof typeMap
  const [typeList] = useState<TypeList[]>(['-', '+']);
  const type = props.selected
    return(
    <Wrapper>
      <ul>
        <li className="null"></li>
        {typeList.map(t =>
          <li key={t} className={`type ${type === t ? 'selected' : ''}`}
              onClick={() => props.onChange(t)}
          >{typeMap[t]}</li>
        )}
        <li className="null"></li>
      </ul>
    </Wrapper>
  );
};

export {TypeSection};