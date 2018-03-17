import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import MainApp from './src/MainApp';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText="Header"/>
        <MainApp/>
        <Footer footerText="Footer"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#2196F3'
  }
});
