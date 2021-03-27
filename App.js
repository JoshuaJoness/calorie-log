import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import GetStarted from './components/getStarted';
import Age from './components/age';
import Gender from './components/gender';
import BodyStats from './components/bodyStats';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen 
          name="GetStarted" 
          component={GetStarted} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffe8d6'
            }
          }}/>
        <Stack.Screen 
          name="Age" 
          component={Age} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffe8d6'
            }
          }}/>
          <Stack.Screen 
            name="Gender" 
            component={Gender} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffe8d6'
              }
          }}/>
          <Stack.Screen 
            name="BodyStats" 
            component={BodyStats} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffe8d6'
              }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;