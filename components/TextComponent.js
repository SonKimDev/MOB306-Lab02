import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../styles/TextComponentStyle'

export default function TextComponent(props) {
  return (
    <View>
      <Text onPress={props.press} style={styles.text}>{props.text}</Text>
    </View>
  )
}

