import React from 'react'
import { View, Text } from 'react-native'

export default function SubMessage() {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          marginTop: '7%',
          marginHorizontal: 14,
          fontWeight: 'bold',
          textAlign: 'center',
          marginHorizontal: 14,
          lineHeight: 21.5,
        }}
      >
        You cant sign up for NetFlix in the {'\n'}app. We know its a hassle.
        After{'\n'}
        youre a member, you can start{'\n'} watching in the app.
      </Text>
    </View>
  )
}
