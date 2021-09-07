import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import MOVIE_DATA from '../../assets/MOVIE_DATA'

export default function FlatlistMovies() {
  const renderMovies = ({ item, index }) => {
    return (
      <Image
        key={index}
        source={item}
        style={{
          width: 160,
          height: 120,
          borderWidth: 2,
          borderColor: '#d35647',
          resizeMode: 'contain',
          margin: 8,
        }}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={MOVIE_DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderMovies}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})
