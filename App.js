import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './app/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerStyle: {backgroundColor: '#9370DB'}}}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Expense & Waranty Tracker',
            headerTintColor: 'white',
          }}
        />

        {/* <Stack.Screen
          name="  Second"
          component={SecondScreen}
          options={{ title: 'Welcome', headerTintColor: 'white' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
