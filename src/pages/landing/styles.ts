import styled from 'styled-components';
import colors from '../../contants/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 9rem;
  gap: 50px;
`;
