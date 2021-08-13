import React from 'react';
import FilterCard from '../../components/FilterCard';
import Header from '../../components/Header';
import Section from '../../components/Section';

import { Container } from './styles';

const Landing: React.FC = () => {
  return(
    <Container>
      <Header/>
      <Section/>
      <FilterCard/>
    </Container>
  )
}

export {Landing}; 