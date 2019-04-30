/**
 * Setting page/screen
 * @screen
 */

import React, { Component } from "react";
import { Text, View, Alert, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import Header from "../../Header/Header";
import styles from "./Styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

/**
 * Setting class
 * @class
 */
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logOut() {
    AsyncStorage.removeItem("UserInfo");
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <View style={styles.Container}>
        <Header
          title={"Setting"}
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
        <View style={styles.UserInfoContainer}>
          <Text style={{ marginLeft: 5 }}>Version {"            : "}14.2</Text>
        </View>
        <View style={styles.UserInfoContainer}>
          <Text style={{ marginLeft: 5 }}>
            Name :{"             : "}Shivam Gupta
          </Text>
        </View>
        <View style={styles.UserInfoContainer}>
          <Text style={{ marginLeft: 5 }}>CustomerID :{"   : "}01250</Text>
        </View>
        <View style={styles.PasswordContainer}>
          <Text style={{ marginLeft: 5, fontWeight: "700" }}>
            Change Password
          </Text>
          <View style={styles.RowContainer}>
            <Text style={{ marginLeft: 5 }}>Old Password:</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.RowContainer}>
            <Text style={{ marginLeft: 5 }}>New Password:</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.RowContainer}>
            <Text style={{ marginLeft: 5 }}>Confirm Password:</Text>
            <TextInput style={styles.TextInput} />
          </View>
        </View>
        <View style={[styles.PasswordContainer, styles.ButtonContainer]}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PasswordContainer}>
          <Text style={{ marginLeft: 5, fontWeight: "700" }}>
            Change/Add Email
          </Text>
          <View style={styles.RowContainer}>
            <Text style={{ marginLeft: 5 }}>Email Address:</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <Text style={{ marginLeft: 5, marginVertical: 5 }}>
            Note: You can add multiple email addresses seprated by comma's.
          </Text>
        </View>
        <View style={[styles.PasswordContainer, styles.ButtonContainer]}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Setting;
