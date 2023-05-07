import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ScrollableCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Scrollable</Text>

      {/* UI */}
      <ScrollView horizontal contentContainerStyle={styles.cardContainer} showsHorizontalScrollIndicator={false} >
        <View style={[styles.card, styles.red]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.grey]}>
            <Text style={styles.cardText}>Grey</Text>
        </View>
        <View style={[styles.card, styles.red]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.grey]}>
            <Text style={styles.cardText}>Grey</Text>
        </View>
        <View style={[styles.card, styles.red]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.grey]}>
            <Text style={styles.cardText}>Grey</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ScrollableCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardContainer: {
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 8,
        elevation: 4,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 2
    },
    cardText: {
        color: "#fff"
    },
    red: {
        backgroundColor: '#ef5354'
    },
    green: {
        backgroundColor: '#50dbb4'
    },
    blue: {
        backgroundColor: '#5da3fa'
    },
    grey: {
        backgroundColor: '#cad5e2'
    }
})