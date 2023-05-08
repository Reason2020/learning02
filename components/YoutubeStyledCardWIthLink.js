import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const YoutubeStyledCardWIthLink = () => {
    function openLink(videoLink) {
        Linking.openURL(videoLink);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>YoutubeStyledCardWIthLink</Text>
      <TouchableOpacity style={styles.cardContainer} onPress={() => openLink('https://www.youtube.com/watch?v=2iOOgc0EsmQ')}>
        <Image 
            source={{uri: 'https://i.ytimg.com/vi/2iOOgc0EsmQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkZSoOG8CMiUT_zYlbIBZ8UHulBw'}}
            style={styles.cardThumbnail}
        />
        <View style={styles.cardDescription}>
            <Image 
                source={{uri: 'https://yt3.googleusercontent.com/ytc/AGIKgqPyeCumoQ-U03IPQK63roYkc-7vsua_zLZ2cXLXnw=s176-c-k-c0x00ffffff-no-rj'}}
                style={styles.channelLogo}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode='tail'>1 AMAZING Signing from Every Premier League Team...</Text>
                <Text style={styles.cardLabel} >S2G     225K views      1 day ago</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default YoutubeStyledCardWIthLink

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333"
    },
    headingText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardContainer: {
        paddingHorizontal: 5,
        backgroundColor: '#000',
        elevation: 1,
        marginHorizontal: 5,
        marginBottom: 5,
        borderRadius: 5,
    },
    cardThumbnail: {
        height: 200,
        resizeMode: 'contain',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    cardDescription: {
        flexDirection: 'row',
        gap: 15,
        marginVertical: 10,
        paddingHorizontal: 5
    },
    channelLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    cardBody: {
        flex: 1,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    cardLabel: {
        color: '#fff',
        fontSize: 11
    }
})