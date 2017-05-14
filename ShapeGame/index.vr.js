import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-vr';

class ShapeGame extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Find the Odd Shape!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  }
});

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);
