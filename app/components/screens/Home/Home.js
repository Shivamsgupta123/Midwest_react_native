import React, { Component } from "react";
import { View, Text, Alert, AsyncStorage } from "react-native";
import styles from "./Styles";
import Header from "../../Header/Header";
import { StackActions, NavigationActions } from "react-navigation";
import { Container, Content, Tab, Tabs } from "native-base";
import Special from "../Special/Special";
import NoticeBoard from "../NoticeBoard/NoticeBoard";

export default class Home extends Component {
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
          title={"Dashboard"}
          menuBar={true}
          action={() => this.props.navigation.openDrawer()}
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
        <Tabs locked={true}>
          <Tab
            activeTabStyle={styles.ActiveTabStyle}
            tabStyle={styles.TabStyle}
            textStyle={styles.TabTextStyle}
            heading={"Special"}
          >
            <Special />
          </Tab>
          <Tab
            activeTabStyle={styles.ActiveTabStyle}
            tabStyle={styles.TabStyle}
            textStyle={styles.TabTextStyle}
            heading={"NoticeBoard"}
          >
            <NoticeBoard />
          </Tab>
        </Tabs>
      </View>
    );
  }
}
