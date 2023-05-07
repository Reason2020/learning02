import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText} >Unscrollable</Text>

      {/* card ui */}
      <View style={styles.cardContainer} >
        <View style={[styles.card, styles.red]} >
          <Text style={styles.cardText} >Red</Text>
        </View>
        <View style={[styles.card, styles.green]} >
          <Text style={styles.cardText} >Green</Text>
        </View>
        <View style={[styles.card, styles.blue]} >
          <Text style={styles.cardText} >Blue</Text>
        </View>
        <View style={[styles.card, styles.blue]} >
          <Text style={styles.cardText} >Blue</Text>
        </View>
      </View>

    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 4
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 8
  },
  cardText: {
    color: '#fff'
  },
  red: {
    backgroundColor: '#ef5354'
  },
  green: {
    backgroundColor: '#50dbb4'
  },
  blue: {
    backgroundColor: '#5da3fa'
  }
})