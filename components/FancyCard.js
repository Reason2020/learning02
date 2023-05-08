import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText} >Trending Places</Text>
      <View style={styles.cardContainer} >
        <Image 
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mahalaxmi_Temple.jpg/250px-Mahalaxmi_Temple.jpg'}}
            style={styles.cardImage}
        />
        <View style={styles.cardBody} >
            <Text style={styles.cardTitle} >The Mahalakshmi-Mahabhairav Temple</Text>
            <Text style={styles.cardLabel} >In ancient time, Lubhu was hit by disease. Ganga Maharani, the ruler of the city, sold her golden plate and resettles the city. So, the city was called Lubhu which means Golden Plate.</Text>
            <Text style={styles.cardFooter} >Population(2011): 10,374</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    cardContainer: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        elevation: 4
    },
    cardImage: {
        height: 280,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        resizeMode: 'cover'
    },
    cardBody: {},
    cardTitle: {
        fontSize: 20
    },
    cardLabel: {
        fontSize: 14
    },
    cardFooter: {
        fontSize: 12,
        textAlign: 'right'
    }
})