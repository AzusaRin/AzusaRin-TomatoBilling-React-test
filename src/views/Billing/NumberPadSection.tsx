import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {inputToOutput} from './NumberPadSection/inputToOutput';

type Props = {
  selected: number
  onChange: (selected: number) => void
  onOk?: () => void
}
const NumberPadSection: React.FunctionComponent<Props> = (props) => {
  const [output, setOutput] = useState(props.selected.toString());

  const _setOutput = (output: string) => {
    let newOutput;
    if (output.length >= 16) {
      newOutput = output.slice(0, 16).replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    }
    setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onClickButtonWrapper = (event: React.MouseEvent) => {
    const innerText = (event.target as HTMLButtonElement).textContent;
    if (innerText === null) {return;}
    if (innerText === 'OK') {
      if (props.onOk) {
        props.onOk();
      }
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