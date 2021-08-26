import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import home from '../screens/home'

const HomeStack = createStackNavigator()

function HomeStackNavigator(props) {
  return (
    <HomeStack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name='home' component={home} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
