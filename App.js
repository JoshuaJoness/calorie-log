import React, { useState, useEffect } from 'react';
import { AsyncStorage, Dimensions } from 'react-native'
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import GetStarted from './components/getStarted';
import Age from './components/age';
import Gender from './components/gender';
import Height from './components/height';
import Weight from './components/weight';
import ActivityLevel from './components/activityLevel';
import Results from './components/results';
import Log from './components/log';
import Goal from './components/goal';
import CalorieCam from './components/camera';
import Micros from './components/micros';
import { StateProvider } from './store.js';

const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
    return (
        <Tab.Navigator
        tabBarOptions={{
          style: windowHeight <= 667 ? { paddingBottom: 15 } : { marginBottom: 5}
        }}
        >
            <Tab.Screen name="Goal" component={Goal} />
            <Tab.Screen name="Camera" component={CalorieCam} />
            <Tab.Screen name="Log" component={Log} />
            <Tab.Screen name="Micros" component={Micros} />
        </Tab.Navigator>
    );
}

function App() {
    const [loaded] = useFonts({
        Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
        MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
        MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf')
    });

    const [goal, setGoal] = useState(null);

    useEffect(() => {
      const getData = async () => {
          try {
            const goal = await AsyncStorage.getItem('goal');
            await setGoal(goal);
          } catch (err) {
            console.log(err);
          }
      }
      getData();
    }, []);

  if (!loaded)
      return null

  return (
      <StateProvider>
          <NavigationContainer>
              <Stack.Navigator initialRouteName={goal ? "Home" : "GetStarted"}>
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
                      name="Height" 
                      component={Height} 
                      options={{
                        title: '',
                        headerStyle: {
                          backgroundColor: '#ffe8d6'
                        }
                    }}/>
                    <Stack.Screen 
                      name="Weight" 
                      component={Weight} 
                      options={{
                        title: '',
                        headerStyle: {
                          backgroundColor: '#ffe8d6'
                        }
                    }}/>
                    <Stack.Screen 
                      name="ActivityLevel" 
                      component={ActivityLevel} 
                      options={{
                        title: '',
                        headerStyle: {
                          backgroundColor: '#ffe8d6'
                        }
                    }}/>
                    <Stack.Screen 
                      name="Results" 
                      component={Results} 
                      options={{
                        title: '',
                        headerStyle: {
                          backgroundColor: '#ffe8d6'
                        }
                    }}/>
                    <Stack.Screen 
                      name="Home" 
                      component={Home} 
                      options={{
                        title: '',
                        headerStyle: {
                          backgroundColor: '#ffe8d6'
                        }
                    }}/>
              </Stack.Navigator> 
          </NavigationContainer>
      </StateProvider>
  );
}

export default App;