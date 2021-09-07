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
import Device from '../screens/device'
import Countdown from './countdown'

export default function home({ navigation }) {
  return (
    <Swiper
      loop={false}
      activeDotColor='red'
      dotColor='gray'
      showsPagination={true}
      paginationStyle={{
        position: 'absolute',
        top: '77%',
      }}
    >
      <View style={styles.homeScreen}>
        <ImageBackground
          style={styles.image}
          source={display}
          resizeMode='cover'
          imageStyle={{ opacity: 0.8 }}
        >
          <Navbar rightIcon={'About'} farRightIcon={'Privacy'} />
          <MainMessage text={'Trying to join Netflix?'} />
          <SubMessage
            text={` You cant sign up for NetFlix in the\napp. We know its a hassle. After\nyoure a member, you can start\n watching in the app.`}
          />
          <SignIn navigation={navigation} />
        </ImageBackground>
      </View>
      <View style={styles.deviceScreen}>
        <Device />
      </View>
      <View style={styles.deviceScreen}>
        <Countdown />
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
  },
  mainText: {
    textAlign: 'center',
  },
  homeScreen: {
    flex: 1,
  },
  deviceScreen: {
    flex: 1,
  },
})
