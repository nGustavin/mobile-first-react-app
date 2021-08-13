import styled from 'styled-components';
import {RiCalendarCheckFill} from 'react-icons/ri'
import Image from 'next/image'
import colors from '../../contants/colors';

export const Container = styled.div`
  width: 90%;
  border-radius: 15px;
  min-height: 70%;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 20px 40px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600;
  line-height: 1.3;
`

export const Description = styled.p``

export const Local = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
` 

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  width: 70px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;


  >h4{
    font-size: 0.6em;
    font-weight: 400;
  }
`

export const CalendarIcon = styled(RiCalendarCheckFill).attrs({
  size: 24
})`

`

export const HostName = styled.h3`
  font-weight: 500;
  font-size: 19px;
`
export const CardImage = styled(Image).attrs({
  objectFit: "contain",
})``

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  gap: 20px;
  background: #B4EABB;
  box-shadow: -1px -13px 39px 50px #B4EABB;
  z-index: 5;
`