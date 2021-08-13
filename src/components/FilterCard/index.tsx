import { ReactNode } from 'react';

import { 
  Container, 
  FacilitiesHolder,
  TitleHolder, 
  Facilities,  
  Price, 
  PriceCard,
  BlueCheck,
  Search,
  Header,
  Buttons,
  Edit,
  ResortsHolder,
  Resort,
  Swimmer,
  AC,
  Dinner, 
  Wifi,
  SearchIcon
} from './styles';

import Facilitie from '../FacilitieCard'

import resorts1 from '../../assets/resort1.jpg'
import resorts2 from '../../assets/resort2.jpg'
import resorts3 from '../../assets/resort3.jpg'
import resorts4 from '../../assets/resort4.jpg'
import resorts5 from '../../assets/resort5.jpg'


interface CardProps {
  children?: ReactNode;
}

function FilterCard({ children }: CardProps) {
  return (
    <Container>
      <FacilitiesHolder>
        <TitleHolder>
          <h1>Facilities</h1>
          <a>See More</a>
        </TitleHolder>
        <Facilities>
          <Facilitie title="Swimming">
            <Swimmer size={20} color="#00ccff"/>
          </Facilitie>
          <Facilitie title="Wi-fi">
            <Wifi size={20} color="#ff2600"/>
          </Facilitie>
          <Facilitie title="AC">
            <AC size={20} color="#2dff50" />
          </Facilitie>
          <Facilitie title="Dinner">
            <Dinner size={20} color="#f3841c" />
          </Facilitie>
        </Facilities>
      </FacilitiesHolder>
      <Price>
        <h1>Hotels For You</h1>
        <h3>5 Days 6 Nights</h3>
        <PriceCard>
          <BlueCheck/>
          <h3>USD $506.00</h3>
        </PriceCard>
      </Price>
      <Search>
        <Header>
          <h1>150 Results</h1>
          <Buttons>
            <Edit />
            <SearchIcon />
          </Buttons>
        </Header>
        <ResortsHolder>
            <Resort src={resorts1}/>
            <Resort src={resorts2}/>
            <Resort src={resorts3}/>
            <Resort src={resorts4}/>
            <Resort src={resorts5}/>
          </ResortsHolder>
      </Search>
    </Container>
  );
};

export default FilterCard;
