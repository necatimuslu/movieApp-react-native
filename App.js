import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './app/pages/components/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
