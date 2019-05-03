/**
 * Cart page/screen
 * @screen
 */

import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import Header from "../../Header/Header";
import styles from "./styles";
const Realm = require("realm");
/**
 * Cart class
 * @class
 */
class Cart extends Component {
  constructor(props) {
    super(props);

    this.ProductSchema = {
      name: "Product",
      properties: {
        ALT_UNITS: "string",
        AVAILABLE: "string",
        BRAND: "string",
        CODE: "string",
        CONVERSATION_FACTOR: "string",
        DESCRIPTION: "string",
        DISCOUNT: "string",
        LOCATION: "string",
        ON_HAND: "string",
        ORIGINAL_PRICE: "string",
        PICTURE_FIELD: "string",
        PRICE1: "string",
        PROD_CLASS: "string",
        PROD_GROUP: "string",
        REWARDS: "string",
        SUBSTITUTE: "string",
        TAX_CODE1: "string",
        UNITS: "string",
        WAREHOUSE: "string",
        WEIGHT_SENSITIVE: "string",
        flag_cc: "int",
        QUANTITY: "int"
      }
    };
  }

  componentDidMount() {
    console.log("8");
    Realm.open({ schema: [this.ProductSchema] })
      .then(realm => {
        console.log("realm.length", realm);
      })
      .catch(error => {
        console.log("realm error", error);
      });
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.SubConatiner}>
          <Header
            title={"Cart"}
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
            CartAction={() => null}
          />
        </View>
      </View>
    );
  }
}

export default Cart;
