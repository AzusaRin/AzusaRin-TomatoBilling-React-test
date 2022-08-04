import styled from 'styled-components';
import React from 'react';
import Icon from 'components/Icon';

const Wrapper = styled.section`
  flex-grow: 1;
  height: 5rem;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    > ul {
      overflow: auto;
    }

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

        > .tagIcon {
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
          background-color: #71C9CE;
          @-webkit-keyframes shake {
            10% {
              transform: rotate(15deg);
            }
            20% {
              transform: rotate(-10deg);
            }
            30% {
              transform: rotate(5deg);
            }
            40% {
              transform: rotate(-5deg);
            }
            50%,
            100% {
              transform: rotate(0deg);
            }
          }
          -webkit-animation: shake 1s 0.15s linear infinite;
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
  }
`;
const TagsSection: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div className="new">
        <button>
          <svg className="icon">
            <Icon name="createTag"/>
          </svg>
          新增标签
        </button>
        <button>
          <svg className="icon">
            <Icon name="labels"/>
          </svg>
          管理标签
        </button>
      </div>
      <div>
        <ul className="current">
          <li>
            <span>ssss</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};


export {TagsSection};