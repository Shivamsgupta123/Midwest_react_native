/**
 * ProductDetail page/screen
 * @screen
 */

import React, { Component } from "react";
import {
  Text,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";
import Header from "../../Header/Header";
import styles from "./styles";

/**
 * ProductDetail class
 * @class
 */
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Qty: 0
    };
    console.log("Product detail props", this.props);
  }
  logOut() {
    AsyncStorage.removeItem("UserInfo");
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  async subQty(products) {
    if (this.state.Qty != 0) await this.setState({ Qty: this.state.Qty - 1 });
    console.log("products - qty", products, this.state.Qty);
  }
  async addQty(products) {
    await this.setState({ Qty: this.state.Qty + 1 });
    console.log("products + qty", products, this.state.Qty);
  }
  addToCart() {}
  render() {
    const { state: { params } = {} } = this.props.navigation;

    return (
      <View style={styles.Container}>
        <View style={styles.SubConatiner}>
          <Header
            title={params.DESCRIPTION}
            leftIcon={true}
            action={() => this.props.navigation.goBack()}
            LogoutAction={() => {
              return Alert.alert(
                "Log Out",
                "Do You Want to Log Out?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    onPress: () => this.logOut()
                  }
                ],
                { cancelable: false }
              );
            }}
            CartAction={() => this.props.navigation.navigate("Cart")}
          />
          <View style={styles.ImageContainer}>
            <View style={styles.ImageWrapper}>
              <Image
                source={require("../../../assets/Images/no-image.jpeg")}
                style={styles.Image}
              />
            </View>
            <View style={styles.ProductInfo}>
              <Text style={[styles.Text, { fontSize: 13, marginTop: 5 }]}>
                Code : {params.CODE}
              </Text>
              <View style={styles.QtyContainer}>
                <TouchableOpacity
                  style={styles.QtyButton}
                  onPress={products => this.subQty(params)}
                >
                  <Text style={{ fontSize: 22 }}>-</Text>
                </TouchableOpacity>
                <View style={[styles.QtyButton, { backgroundColor: "white" }]}>
                  <Text style={{ fontSize: 18 }}>{this.state.Qty}</Text>
                </View>
                <TouchableOpacity
                  style={styles.QtyButton}
                  onPress={() => this.addQty(params)}
                >
                  <Text style={{ fontSize: 22 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.InfoContainer}>
            <Text style={styles.Text}>Price : ${params.PRICE1}</Text>
          </View>
          <View style={styles.HeadContainer}>
            <Text style={styles.Text1}>Description</Text>
          </View>
          <View style={styles.InfoContainer}>
            <Text style={styles.Text}>{params.DESCRIPTION}</Text>
          </View>
          <View style={styles.HeadContainer}>
            <Text style={styles.Text1}>Brand</Text>
          </View>
          <View style={styles.InfoContainer}>
            <Text style={styles.Text}>{params.BRAND}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.Buttons}
            onPress={() => this.addToCart()}
          >
            <Text style={styles.ButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProductDetail;
