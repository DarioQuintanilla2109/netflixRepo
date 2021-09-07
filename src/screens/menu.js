import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native'
import Navbar from '../components/Navbar'
import SubNavBar from '../components/SubNavBar'
import Icon from 'react-native-vector-icons/Ionicons'
import movieDisplay from '../../assets/movieDisplay.jpg'
import PlayBar from '../components/PlayBar'
import FlatlistMovies from '../components/FlatlistMovies'

export default function menu(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        scrollEnabled={true}
      >
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
        <View>
          <PlayBar />
        </View>
        <View>
          <FlatlistMovies />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 550,
  },
  scrollView: {
    flexGrow: 1,
  },
})
