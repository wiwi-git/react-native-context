import React from 'react';
import styled from 'styled-components';
import User from './components/User';
import {UserProvider} from './contexts/User';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <UserProvider>
      <Container>
        <User />
      </Container>
    </UserProvider>
  );
};

export default App;
