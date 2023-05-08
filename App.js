import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollableCards from './components/ScrollableCards'
import FancyCard from './components/FancyCard'
import YoutubeStyledCardWIthLink from './components/YoutubeStyledCardWIthLink'
import MessengerStyleUIWithList from './components/MessengerStyleUIWithList'

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View>
            <FlatCards />
            <ScrollableCards />
            <FancyCard />
            <YoutubeStyledCardWIthLink />
            <MessengerStyleUIWithList />
          </View>
        </ScrollView>
        
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})