import React from 'react'
import { View, Text } from 'react-native'

export default function SubMessage(props) {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          marginTop: '3.8%',
          marginHorizontal: 14,
          fontWeight: 'bold',
          textAlign: 'center',
          marginHorizontal: 14,
          lineHeight: 21.5,
        }}
      >
        {props.text}
      </Text>
    </View>
  )
}
