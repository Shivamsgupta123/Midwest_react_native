import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

export default class Loader extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.props.isGreen ? (
          <ActivityIndicator size="large" color="#a3d17d" />
        ) : (
          <ActivityIndicator size="large" color="white" />
        )}
      </View>
    );
  }
}
