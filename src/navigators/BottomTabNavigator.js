import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import menu from '../screens/menu'
import Icon from 'react-native-vector-icons/Ionicons'
import practiceFlatlist from '../components/PracticeFlatlist'

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
      }}
    >
      <Tab.Screen
        name='Home'
        component={menu}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='New and Hot'
        component={menu}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name={focused ? 'ios-folder' : 'ios-folder-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Fast Laughs'
        component={menu}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name={focused ? 'ios-happy' : 'ios-happy-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={menu}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name={focused ? 'ios-search' : 'ios-search-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Downloads'
        component={menu}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name={focused ? 'ios-download' : 'ios-download-outline'}
              color={focused ? 'white' : 'gray'}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
