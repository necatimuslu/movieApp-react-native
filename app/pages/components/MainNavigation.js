import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Home';
import Detail from '../Detail';
import Navbar from './Navbar';
import Search from '../Search';

const Stack = createStackNavigator();
class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Anasayfa"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
