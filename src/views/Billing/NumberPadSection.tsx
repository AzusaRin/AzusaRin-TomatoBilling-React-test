import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {inputToOutput} from './NumberPadSection/inputToOutput';


const NumberPadSection: React.FunctionComponent = () => {
  const [output, setOutput] = useState('0');
  const _setOutput = (output: string) => {
    if (output.length >= 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    setOutput(output.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3'));
  };
  const onClickButtonWrapper = (event: React.MouseEvent) => {
    const innerText = (event.target as HTMLButtonElement).textContent;
    if (innerText === null) {return;}
    if (innerText === 'OK') {
      //TODO
      console.log('记录');
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).includes(innerText)) {
      _setOutput(inputToOutput(innerText, output));
    }

  };

  return (<Wrapper>
    <div className="output">{output}</div>
    <div className="buttons" onClick={onClickButtonWrapper}>
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
  </Wrapper>);
};

export {NumberPadSection};