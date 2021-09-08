import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from '../components/Navbar'
import MainMessage from '../components/MainMessage'
import SubMessage from '../components/SubMessage'
import SignIn from '../components/SignIn'
export default function device() {
  return (
    <View style={styles.container}>
      <Navbar rightIcon={'About'} farRightIcon={'Privacy'} />
      <View style={styles.mainMessage}>
        <MainMessage text={'Watch on any device'} />
      </View>
      <SubMessage
        text={
          'Stream on your phone, tablet, laptop, and TV without paying more.'
        }
      />
      <View style={styles.spacer}>
        <SignIn />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  spacer: {
    marginTop: 40,
  },
  mainMessage: {
    marginTop: '73%',
  },
})
