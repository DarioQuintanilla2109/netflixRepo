import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import menu from '../screens/menu'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
        tabStyle: {
          paddingTop: 10,
        },

        activeTintColor: '#FFFFFF',
        keyboardHidesTabBar: true,
        safeAreaInsets: { top: 10 },
      }}
      screenOptions={({ route }) => ({})}
    >
      <Tab.Screen
        name='Home'
        component={menu}
        options={{
          tabBarIcon: () => <Icon name='ios-home' color={'white'} size={25} />,
        }}
      />
      <Tab.Screen
        name='New and Hot'
        component={menu}
        options={{
          tabBarIcon: () => (
            <Icon name='ios-folder' color={'white'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='Fast Laughs'
        component={menu}
        options={{
          tabBarIcon: () => <Icon name='ios-happy' color={'white'} size={25} />,
        }}
      />
      <Tab.Screen
        name='Search'
        component={menu}
        options={{
          tabBarIcon: () => (
            <Icon name='ios-search' color={'white'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='Downloads'
        component={menu}
        options={{
          tabBarIcon: () => (
            <Icon name='ios-download' color={'white'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
