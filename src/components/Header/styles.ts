import styled from 'styled-components';
import colors from '../../contants/colors';

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  max-height: 7rem;
  position: fixed;
  top: 0;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.white};
  z-index: 10;

  @media (min-width: 768px) {
    height: 5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px;
  }
`;

export const Logo = styled.div`
  >h1{
    font-weight: 600;
    color: ${colors.black};
    font-size: 1.7rem;
}
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  font-size: 0.9rem;
  width: 100%;
  height: 100%;
  font-weight: 400;

  @media (min-width: 768px) {
      font-size: 1.2rem;
      width: 70%;
      justify-content: flex-end;
      gap: 6%;
    }
  
  >a{
    font-weight: 400;
    transition: opacity 0.2s;

    &:hover{
      cursor: pointer;
      opacity: 0.7;
    }
  }

  >button{
    font-weight: 600;
    width: 14%;
    height: 100%;
    background: none;
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 7px;
    max-width: 130px;
    color: ${colors.black};

    @media (min-width: 768px){
        max-height: 72%;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        border-radius: 10px;
        transition: all 0.2s;
        color: ${colors.black};

        &:hover{
          border: 1px solid rgba(0, 0, 0, 0.6);
          cursor: pointer;
          color:  rgba(0, 0, 0, 0.6);
        }
      
    }
  }
`