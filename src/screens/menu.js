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

import MainMessage from '../components/MainMessage'
import SubMessage from '../components/SubMessage'
import PracticeFlatlist from '../components/PracticeFlatlist'

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
          imageStyle={{ opacity: 0.8 }}
        >
          <Navbar
            rightIcon={<Icon name='ios-albums' size={25} />}
            farRightIcon={<Icon name='ios-square' color='purple' size={25} />}
          />
          <SubNavBar />
          <View style={styles.messageSpacer}>
            <MainMessage text={'New Movies'} />
          </View>
          <SubMessage text={'# 2 in the U.S. Today'} />
        </ImageBackground>
        <View>
          <PlayBar />
        </View>
        <View>
          <Text style={styles.flatListText}>New Releases</Text>
        </View>
        <View>
          <PracticeFlatlist />
        </View>
        <View>
          <Text style={styles.flatListText}> Trending Now</Text>
        </View>
        <View>
          <PracticeFlatlist />
        </View>
        <View>
          <Text style={styles.flatListText}> Watch It Again</Text>
        </View>
        <View>
          <PracticeFlatlist />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: 550,
  },
  scrollView: {
    flexGrow: 1,
  },
  messageSpacer: {
    marginTop: 50,
  },
  flatListText: {
    color: 'white',
    marginTop: 14,
    marginLeft: 2,
    fontWeight: 'bold',
  },
})
