import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollableCards from './components/ScrollableCards'
import FancyCard from './components/FancyCard'

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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})