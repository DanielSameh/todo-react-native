import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/homeScreen'

const Root = createStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name = "HomeScreen" component={HomeScreen} />
  
      </Root.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
})