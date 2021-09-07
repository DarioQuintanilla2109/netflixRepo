import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

export default function Navbar(props) {
  return (
    <SafeAreaView
      style={{
        height: '60%',

        marginTop: 0,
        paddingTop: 0,
      }}
    >
      <View style={styles.container}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.textStyle}>TV Shows</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Movies</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Categories</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: 'white',
    marginTop: 12,
    marginRight: 20,
    fontWeight: 'bold',
  },
  spacing: {
    marginTop: 10,
  },
})
