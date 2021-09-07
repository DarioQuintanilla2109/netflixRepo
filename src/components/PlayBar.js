import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function PlayBar() {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Icon name={'ios-add'} color={'white'} size={25} />
        <Text style={styles.textStyle}> My list </Text>
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.insideButton}>
          <Icon name={'ios-play'} color={'black'} size={25} />
          <Text style={[styles.textStyle, styles.colorText]}> Play </Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <Icon name={'ios-information'} color={'white'} size={25} />
        <Text style={styles.textStyle}> Info </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: 'white',
    marginTop: 3,
    fontWeight: 'bold',
  },
  iconView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colorText: {
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: 'white',
    width: 85,
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
  },
  insideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
})
