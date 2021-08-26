import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

export default function Navbar() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ marginLeft: 15 }}>
          <Image
            source={require('../../assets/netflix.png')}
            style={{ width: 100, height: 50, borderRadius: 100 }}
          />
        </View>
        <View style={styles.alignRight}>
          <Text style={{ color: 'white', marginTop: 22, marginRight: 20 }}>
            Help
          </Text>
        </View>
        <View>
          <Text style={{ color: 'white', marginTop: 22, marginRight: 20 }}>
            Privacy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  alignRight: {
    marginLeft: 'auto',
  },
  spacing: {
    marginTop: 10,
  },
})
