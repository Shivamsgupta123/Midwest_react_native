import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class NoticeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/notification.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              Notice Board
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("PantryList")}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/profile.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              Pantry List
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("AllProduct")}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/product.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              All Products
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("SpecialProducts")}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/specials.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              Specials
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/view_cart.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              View Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/current_order.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              Current Orders
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("Setting")}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/profile.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              Setting
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center"
            }}
          >
            <Image
              style={styles.Icon}
              source={require("../../assets/Images/history.png")}
            />
            <Text style={{ marginTop: 10, color: "white", fontWeight: "800" }}>
              Account History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
