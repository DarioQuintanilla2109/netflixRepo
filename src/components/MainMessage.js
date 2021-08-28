import React from 'react'
import { View, Text } from 'react-native'

export default function MainMessage(props) {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 34,
          textAlign: 'center',
          marginTop: '73%',
          fontWeight: 'bold',
          letterSpacing: 0.1,
          marginHorizontal: 25,
        }}
      >
        {props.text}
      </Text>
    </View>
  )
}
