/**
 * Cart page/screen
 * @screen
 */

import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import Header from "../../Header/Header";
import styles from "./styles";

/**
 * Cart class
 * @class
 */
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
