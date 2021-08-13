import { Container, Logo, Buttons } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <h1>MRstudio</h1>
      </Logo>

      <Buttons>
        <a>Home</a>
        <a>About</a>
        <a>Type of house</a>
        <a>Contact</a>
        <button>Login</button>
      </Buttons>
      
    </Container>
  );
};

export default Header;
