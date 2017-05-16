import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View, Text, Animated } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      zValue: new Animated.Value(-2)
    }
  }

  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
