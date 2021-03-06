import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './ButtonComponent.style';

export default class ButtonComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
};