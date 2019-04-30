
/**
 * Footer component
 * @component
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from './styles';

/**
 * Footer class
 * @class
 */
class Footer extends Component {
  constructor(props){
      super(props);
      this.state = {}
  }

  render() {
    return (
      <View>
        <Text> Hey There </Text>
      </View>
    );
  }
}   

export default Footer;
  