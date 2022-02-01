
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import ProfileScreen from './components/ProfileScreen';
import ApiScreen from './components/ApiScreen';
import ReactDom from 'react-dom';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerLayoutPreset: 'center' }, { alignSelf: 'center' }, { headerShown: false }}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: true }} />
        <Stack.Screen name="API" component={ApiScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>

  );


};


