import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from '../components/Navbar'
import MainMessage from '../components/MainMessage'
import SubMessage from '../components/SubMessage'
import Button from '../components/SignIn'

export default function countdown(props) {
  return (
    <View style={styles.container}>
      <Navbar rightIcon={'About'} farRightIcon={'Privacy'} />
      <View style={styles.mainMessage}>
        <MainMessage text={'3, 2, 1... Download!'} />
      </View>
      <SubMessage text={'Always have something to watch offline.'} />
      <View style={styles.spacer}>
        <Button />
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
    marginTop: 60,
  },
  mainMessage: {
    marginTop: '73%',
  },
})
