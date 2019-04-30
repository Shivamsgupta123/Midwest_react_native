import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.BackButtonView}>
          <TouchableOpacity onPress={this.props.action}>
            {this.props.menuBar ? (
              <Icon name="bars" size={20} style={styles.BackButton} />
            ) : null}
            {this.props.leftIcon ? (
              <Icon name="angle-left" size={30} style={styles.BackButton} />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderTextView}>
          <Text numberOfLines={1} style={styles.HeaderText}>
            {this.props.title}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.Icon1View}
          onPress={this.props.CartAction}
        >
          <Image
            style={{ height: 20, width: 20, position: "absolute" }}
            source={require("../../assets/Images/cart_icon.png")}
          />
          <View style={styles.CartView}>
            <Text>5</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.Icon1View]}>
          <TouchableOpacity onPress={this.props.LogoutAction}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../assets/Images/logout.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
