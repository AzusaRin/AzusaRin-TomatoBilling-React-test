import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 16px;
    background-color: white;

    .noteName {
      padding-right: 16px;
    }

    input {
      height: 3.5rem;
      flex-grow: 1;
      background-color: transparent;
      border: none;
      padding-right: 16px;
      font-size: 14px;
    }
  }
`;

const NotesSection: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <label className="notes">
        <span className="noteName">备注</span>
        <input type="text" placeholder="placeHolder"/>
      </label>
    </Wrapper>
  );
};

export {NotesSection};