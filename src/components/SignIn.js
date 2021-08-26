import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default function SignIn() {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>SIGN IN</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: '60%',
    height: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    backgroundColor: '#e50914',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})
