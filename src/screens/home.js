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
export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={display} resizeMode='cover'>
        <Navbar />
      </ImageBackground>
    </SafeAreaView>
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
})
