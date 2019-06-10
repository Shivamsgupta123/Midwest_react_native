import React, { Component } from "react";
import {
  View,
  Button,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  Animated
} from "react-native";
import PieChart from "../../PieChart";
import styles from "./Styles";

export default class NoticeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Color: "#A52A2A",
      Value: 201145,
      Current: 3000,
      Over30: 5000,
      Over60: 9500,
      Over90: 8045,
      top: 10
    };

    // this.top = new Animated.Value(0); // Contain animation object
  }
  setValue(index, colorCode) {
    // Animations using Animated.

    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    this.setState({ Value: index, Color: colorCode, top: 20 }, () =>
      console.log(this.state.Value)
    );
  }

  render() {
    console.log("from render", this.state.Value);

    return (
      <View style={styles.container}>
        <View style={styles.PieChartContainer}>
          <View style={styles.ChartWrapper}>
            <PieChart color={this.state.Color} />
            <Text style={styles.Total}>{this.state.Value}</Text>
            {this.state.Color == "#A52A2A" ? (
              <View
                style={[
                  styles.triangle,
                  { borderBottomColor: this.state.Color }
                ]}
              />
            ) : this.state.Color == "#25ed36" ? (
              <View
                style={[
                  styles.triangleCur,
                  { borderBottomColor: this.state.Color }
                ]}
              />
            ) : this.state.Color == "#f2a202" ? (
              <View
                style={[
                  styles.triangleOv30,
                  { borderBottomColor: this.state.Color }
                ]}
              />
            ) : this.state.Color == "#960672" ? (
              <View
                style={[
                  styles.triangleOv60,
                  { borderBottomColor: this.state.Color }
                ]}
              />
            ) : this.state.Color == "#3f107c" ? (
              <View
                style={[
                  styles.triangleOv90,
                  { borderBottomColor: this.state.Color }
                ]}
              />
            ) : null}
          </View>

          <View
            style={[styles.ChartWrapper, { justifyContent: "space-around" }]}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ButtonWrapper}
              onPress={() => this.setValue(3000, "#25ed36")}
            >
              <View
                style={[styles.ColorIndicator, { backgroundColor: "#25ed36" }]}
              />
              <Text>CURRENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ButtonWrapper}
              onPress={() => this.setValue(5000, "#f2a202")}
            >
              <View
                style={[styles.ColorIndicator, { backgroundColor: "#f2a202" }]}
              />
              <Text>OVER 30</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ButtonWrapper}
              onPress={() => this.setValue(9500, "#960672")}
            >
              <View
                style={[styles.ColorIndicator, { backgroundColor: "#960672" }]}
              />
              <Text>OVER 60</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ButtonWrapper}
              onPress={() => this.setValue(8450, "#3f107c")}
            >
              <View
                style={[styles.ColorIndicator, { backgroundColor: "#3f107c" }]}
              />
              <Text>OVER 90</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ButtonWrapper}
              onPress={() => this.setValue(201145, "#A52A2A")}
            >
              <View
                style={[styles.ColorIndicator, { backgroundColor: "#A52A2A" }]}
              />
              <Text>TOTAL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
