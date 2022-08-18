import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform, StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from '../utils/getImageForWeather';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View
          style={styles.detailsContainer}
        >
          <Text
            style={[styles.largeText, styles.textStyle]}
          >San Francisco</Text>
          <Text
            style={[styles.smallText, styles.textStyle]}
          >Light Cloud</Text>
          <Text
            style={[styles.largeText, styles.textStyle]}
          >24°</Text>
          <SearchInput placeholder='Search any city' />
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  detailsContainer: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    //paddingHorizontal: 20,
    paddingTop: Dimensions.get('screen').height / 2.5,
  },
  imageContainer: {
    Flex: 1,
  },
  image: {
    Flex: 1,
    Width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'red',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
