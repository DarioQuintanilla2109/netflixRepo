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
import Swiper from 'react-native-swiper'
export default function home() {
  return (
    <Swiper
      activeDotColor='red'
      dotColor='gray'
      style={styles.wrapper}
      showsPagination={true}
      paginationStyle={{
        position: 'absolute',
        top: '77%',
        right: '50%',
        left: '50%',
      }}
    >
      <View style={styles.slide1}>
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
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
    </Swiper>
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
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
})
