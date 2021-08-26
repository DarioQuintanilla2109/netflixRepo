import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import Navbar from '../components/Navbar'
import display from '../../assets/display.jpg'
import MainMessage from '../components/MainMessage'
import SubMessage from '../components/SubMessage'
import SignIn from '../components/SignIn'
export default function home() {
  return (
    <ImageBackground
      style={styles.image}
      source={display}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Navbar />
      <MainMessage />
      <SubMessage />
      <SignIn />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  mainText: {
    textAlign: 'center',
  },
})
