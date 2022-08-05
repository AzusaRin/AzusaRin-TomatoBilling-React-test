import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  padding-top: 55px;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const LabelWrapper = styled(Wrapper)`
  padding-top: 0;
`;

export {Wrapper, Main, LabelWrapper};