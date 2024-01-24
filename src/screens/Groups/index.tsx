import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container } from './styles'
export function Groups() {
  return (
    <Container>
      <Text style={styles.text}>Digite o seu e-mail</Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'red',
  },
})
