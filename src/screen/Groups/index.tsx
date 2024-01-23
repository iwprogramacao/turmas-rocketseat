import React from "react"
import { View, Text, StyleSheet } from 'react-native';
export function Groups() {
  return (
    <View>
      <Text style={styles.text}>Digite o seu e-mail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "red"
  },
});