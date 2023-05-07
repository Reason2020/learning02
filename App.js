import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollableCards from './components/ScrollableCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ScrollableCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})