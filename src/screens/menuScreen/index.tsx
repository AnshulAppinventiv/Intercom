import {Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class FavouriteScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.text}>MenuScreen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
});
