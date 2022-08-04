import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  
  .output {
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25),
    inset 0 3px 3px -3px rgba(0, 0, 0, 0.25);
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-content: stretch;
    padding-left: 6px;

    > button {
      color: #000000;
      flex-grow: 1;
      flex-basis: 20%;
      height: 3.5rem;
      background-color: white;
      border-radius: 8px;
      border: none;
      margin: 0 6px 6px 0;
      font-family: Consolas, monospace;
      font-size: 28px;

      &:nth-child(4) {
        font-family: "Arial Black", serif;
      }

      &:nth-child(8) {
        font-family: "Arial Black", serif;
      }

      &:active {
        background-color: rgb(234, 236, 239);
      }
    }
  }
`;
const NumberPadSection: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div className="output">output</div>
      <div className="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>.</button>
        <button>0</button>
        <button className="ok">OK</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};