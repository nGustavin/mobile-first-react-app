import styled from 'styled-components';
import Image from 'next/image'
import colors from '../../contants/colors';
import {BiWifi} from 'react-icons/bi'
import {FaSwimmer} from 'react-icons/fa'
import {SiApacheairflow} from 'react-icons/si'
import {DiBackbone} from 'react-icons/di'
import {HiCheckCircle} from 'react-icons/hi'
import {GrEdit} from 'react-icons/gr'
import {FiSearch} from 'react-icons/fi'

export const Container = styled.div`
  width: 90%;
  height: auto;
  padding: 20px;
  background: ${colors.white};
  box-shadow: 0px 20px 40px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FacilitiesHolder = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TitleHolder = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >h1{
    font-weight: 500;
  }

  >a{
    font-size: 15px;
    color: #F3841C;
  }
`

export const Facilities = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 10px;
`

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  >h1{
    font-weight: 500;
  }

  >h3{
    font-weight: 500;

  }
`
export const PriceCard = styled.div`
  height: 70px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 50px;

  >h3{
    color: rgba(0, 0, 0, 0.9);
    font-weight: 300;
    font-size: 25px;
  }
`

export const BlueCheck = styled(HiCheckCircle).attrs({
  size: 35,
  color: "#1901F8"
})``

export const Search = styled.div`

`

export const SearchIcon = styled(FiSearch)`

`

export const Edit = styled(GrEdit)`
  
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`

export const Buttons = styled.div`
  display: flex;

`

export const ResortsHolder = styled.div`
  
`

export const Resort = styled(Image).attrs({
  height: 50,
  width: 50,
  objectFit: "cover",
})``

export const Swimmer = styled(FaSwimmer)``

export const Wifi = styled(BiWifi)``

export const AC = styled(SiApacheairflow)``

export const Dinner = styled(DiBackbone)``