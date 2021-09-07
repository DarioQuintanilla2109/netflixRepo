import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native'
import Navbar from '../components/Navbar'
import SubNavBar from '../components/SubNavBar'
import Icon from 'react-native-vector-icons/Ionicons'
import movieDisplay from '../../assets/movieDisplay.jpg'
import PlayBar from '../components/PlayBar'
export default function menu(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={movieDisplay}
        resizeMode='cover'
        imageStyle={{ opacity: 0.5 }}
      >
        <Navbar
          rightIcon={<Icon name='ios-albums' size={25} />}
          farRightIcon={<Icon name='ios-square' color='purple' size={25} />}
        />
        <SubNavBar />
      </ImageBackground>
      <View style={{ flex: 2 }}>
        <PlayBar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 5,
  },
})
