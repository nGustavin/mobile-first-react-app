import React from 'react';

import Resort from '../../assets/resort.jpg'

import { Button, CalendarIcon, Container, Description, HostName, Local, Title, CardImage, Info } from './styles';


const Section: React.FC = () => {
  return(
    <Container>
      <CardImage src={Resort} alt="Resort" objectFit="contain" />
      <Info>
      <Title>Enjoy Your Dream Vacation</Title>
      <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor delectus cupiditate veritatis necessitatibus accusantium?</Description>
  
      <Local>
      <Button>
        <CalendarIcon />
        <h4>Check-ins</h4>
      </Button>
      <HostName>Warwick Hotels {'&'} Resorts</HostName>
      </Local>
      </Info>

    </Container>
  );
}

export default Section;