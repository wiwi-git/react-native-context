import React from 'react';
import styled from 'styled-components';
import User from './components/User';
import Input from './components/Input';
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
        <Input />
      </Container>
    </UserProvider>
  );
};

export default App;
