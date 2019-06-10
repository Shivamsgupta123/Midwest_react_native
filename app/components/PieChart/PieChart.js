/**
 * PieChart component
 * @component
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import Pie from "react-native-pie";
import styles from "./styles";

/**
 * PieChart class
 * @class
 */
class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("pie chart props", this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Pie
          radius={70}
          innerRadius={40}
          series={[100]}
          colors={[this.props.color]}
        />
      </View>
    );
  }
}

export default PieChart;
