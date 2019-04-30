import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  AsyncStorage
} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
// import { CheckBox } from "native-base";
import { StackActions, NavigationActions } from "react-navigation";
import Loader from "../../Loader/Loader";
import Header from "../../Header/Header";
import PantryRow from "../PantryRow/PantryRow";

export default class PantryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lock: true,
      Loading: false,
      UserInfo: { Description: "Cheese sliced 50kg", Unit: "Each" },
      SearchText: "",
      Data: []
    };
    this.UserInfo = "";
    console.log("pantry list props", this.props);
  }

  async componentDidMount() {
    this.UserInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));
    this.fetchResult();
  }
  logOut() {
    AsyncStorage.removeItem("UserInfo");
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  async fetchResult() {
    console.log("USER INFO", this.UserInfo);
    this.setState({ Loading: true });
    fetch(
      "https://www.scmcentral.com.au/webservices_midwest/myscmapp/profile_products.php?code=" +
        this.UserInfo.Debtorid +
        "&page=0&limit=20&warehouse=" +
        this.UserInfo.warehouse
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ Data: response.profile, Loading: false });
        console.log("Pantry List", this.state.Data);
      })
      .catch(error => {
        this.setState({ Loading: false });
        alert("Try again Later");
        console.log(error);
      });
  }

  search(value) {
    console.log("search text", this.state.SearchText);
    // <PantryRow search={this.state.SearchText} />;
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.SubConatiner}>
          <Header
            title={"Pantry List"}
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
          <View style={styles.InfoWrapper}>
            <View style={styles.InfoContainer}>
              <Text>Name:{"                "}shivam</Text>
            </View>
            <View style={styles.InfoContainer}>
              <Text>Customer ID:{"    "} abvwyz</Text>
            </View>
          </View>
          <View style={styles.SearchContainer}>
            <Image source={require("../../../assets/Images/search.png")} />
            {/* <View style={{ width: 5, backgroundColor: "red" }} /> */}
            <TextInput
              placeholder="Search Here"
              style={{ marginLeft: 5 }}
              onChangeText={text => this.setState({ SearchText: text })}
              onChange={() => {
                return <PantryRow search={this.state.SearchText} />;
              }}
            />
          </View>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>Description</Text>
            <Text
              style={{
                width: "15%",
                color: "white",
                paddingHorizontal: "3%"
              }}
            >
              UOM
            </Text>
            <Text
              style={{
                width: "15%",
                color: "white",
                marginLeft: 10
              }}
            >
              Qty
            </Text>
            {this.state.Lock ? (
              <TouchableOpacity onPress={() => this.setState({ Lock: false })}>
                <Image
                  style={{ width: 20, height: "100%" }}
                  source={require("../../../assets/Images/locked.png")}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.setState({ Lock: true })}>
                <Image
                  style={{ width: 30, height: "100%" }}
                  source={require("../../../assets/Images/unlocked.png")}
                />
              </TouchableOpacity>
            )}
          </View>
          {this.state.Loading ? (
            <Loader isGreen={true} />
          ) : (
            <FlatList
              data={this.state.Data}
              style={{ flex: 1 }}
              renderItem={({ item }) => {
                return <PantryRow {...item} {...this.props} />;
              }}
              keyExtractor={(item, index) => "" + index}
            />
          )}
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.Buttons}>
            <Text style={styles.ButtonText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AllProduct")}
            style={[styles.Buttons, { backgroundColor: "#a3d17d" }]}
          >
            <Text style={styles.ButtonText}>Search All Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

{
  /* <FlatList
data={this.state.Data.profile}
renderItem={({ item }) => (
  // <View style={{ height: "50%" }}>
  <PantryRow />
  // </View>
)}
keyExtractor={(item, index) => "" + index}
/> */
}
