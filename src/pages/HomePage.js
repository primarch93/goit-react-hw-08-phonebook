import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 80px;
  text-align: center;
  text-shadow: 2px 2px #ccc;
  position: relative;
  animation-name: move, pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes move {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Container>
        <Title>welcome and have a good time!</Title>
      </Container>
    </>
  );
}