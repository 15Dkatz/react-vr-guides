import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View, Text, Animated } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();

    this.state = {
      zValue: new Animated.Value(-2)
    }
  }

  moveForward() {
    Animated.spring(this.state.zValue, {
      toValue: -1
    }).start();
  }

  moveBack() {
    Animated.spring(this.state.zValue, {
      toValue: -2
    }).start()
  }

  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <Animated.Image
          onEnter={() => this.moveForward()}
          onExit={() => this.moveBack()}
          source={asset('moon.jpg')}
          style={{
            width: 1,
            height: 1,
            layoutOrigin: [0.5, 0.5],
            transform: [
              {translateZ: this.state.zValue}
            ]
          }}
          >
        </Animated.Image>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);
