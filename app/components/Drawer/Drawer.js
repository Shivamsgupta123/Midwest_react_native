import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import styles from "./Styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loader from "../Loader/Loader";
import { changeData } from "../../Global";

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      Loading: false
    };
    this.UserInfo = "";
  }
  async componentDidMount() {
    this.UserInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));
    // this.fetchResult();
  }
  async fetchResult() {
    console.log("USER INFO", this.UserInfo);
    this.setState({ Loading: true });
    var url =
      "https://www.scmcentral.com.au/webservices_midwest/myscmapp/profile_products.php?code=" +
      this.UserInfo.Debtorid +
      "&page=1&limit=1500&warehouse=" +
      this.UserInfo.warehouse;
    console.log("pantrylist url", url);
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.profilecount != 0) {
          this.setState({
            Data: response.profile,
            Loading: false
          });
          changeData(this.state.Data);
          // console.log("drawer data", this.state.Data);
        } else {
          this.setState({ Loading: false });
        }
      })
      .catch(error => {
        this.setState({ Loading: false });
        alert("Try again Later");
        console.log(error);
      });
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
          {this.state.Loading ? (
            <Loader isGreen={true} />
          ) : (
            <TouchableOpacity
              style={{
                alignItems: "center"
              }}
              onPress={() =>
                this.props.navigation.navigate(
                  "PantryListDragable",
                  this.state.Data
                )
              } //PantryList
            >
              <Image
                style={styles.Icon}
                source={require("../../assets/Images/profile.png")}
              />
              <Text
                style={{ marginTop: 10, color: "white", fontWeight: "800" }}
              >
                Pantry List
              </Text>
            </TouchableOpacity>
          )}
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
