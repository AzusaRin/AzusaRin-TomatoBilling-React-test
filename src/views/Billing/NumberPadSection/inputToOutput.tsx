const inputToOutput = (innerText: string, output='0') => {
  switch (innerText) {
    case'0':
    case'1':
    case'2':
    case'3':
    case'4':
    case'5':
    case'6':
    case'7':
    case'8':
    case'9':
      if (output === '0') {
        return innerText;
      } else {
        return output + innerText;
      }
    case'.':
      if (output.includes('.')) {
        return output;
      } else {
        return output + innerText;
      }
    case'删除':
      if (output.length === 1) {
        return '';
      } else {
        return output.slice(0, -1);
      }
    case '清空':
      return '';
    default:
      return '';
  }

};

export {inputToOutput};