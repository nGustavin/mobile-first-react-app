import { ReactNode } from 'react';

import { Container } from './styles';

interface FacilitieCardProps {
  children: ReactNode;
  title: string;
}

function Facilitie({ children, title }: FacilitieCardProps) {
  return (
    <Container>
      <div>
        {children}
      </div>
      <h1>{title}</h1>
    </Container>
  );
};

export default Facilitie;
