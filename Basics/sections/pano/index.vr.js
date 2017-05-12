import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View } from 'react-vr';

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
