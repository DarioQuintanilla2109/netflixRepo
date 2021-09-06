import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function menu(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text> menu screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})
