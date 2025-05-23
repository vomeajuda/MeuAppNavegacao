import React, { useEffect } from 'react';
import { BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.titleStyle,
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'blue',
  },
  titleStyle: {
    color: 'white',
  },
});