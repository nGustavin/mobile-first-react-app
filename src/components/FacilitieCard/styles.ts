import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  gap: 15px;

  >div{
    height:50px;
    width:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  >h1{
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1)
  }
`;
