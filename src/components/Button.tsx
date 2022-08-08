import styled from 'styled-components';

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

export {Button}