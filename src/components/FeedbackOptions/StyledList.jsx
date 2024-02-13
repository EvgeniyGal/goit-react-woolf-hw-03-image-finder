const { default: styled } = require('styled-components');

const StyledList = styled.ul`
  display: flex;
  gap: 20px;

  & button {
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 15px;
    cursor: pointer;
  }
`;

export const ColorPattern = {
  good: 'green',
  neutral: 'yellow',
  bad: 'red',
};

export default StyledList;
