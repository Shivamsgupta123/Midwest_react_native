import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  AsyncStorage,
  ActivityIndicator
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
      Data: [],
      TotalProduct: 1,
      MaxPage: "",
      Page: 1,
      Limit: 0
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
    if (this.state.Limit <= this.state.TotalProduct) {
      console.log("USER INFO", this.UserInfo);
      this.setState({ Loading: true });
      var url =
        "https://www.scmcentral.com.au/webservices_midwest/myscmapp/profile_products.php?code=" +
        this.UserInfo.Debtorid +
        "&page=" +
        this.state.Page +
        "&limit=20&warehouse=" +
        this.UserInfo.warehouse;
      console.log("pantrylist url", url);
      fetch(url)
        .then(response => response.json())
        .then(response => {
          if (response.profilecount != 0) {
            this.setState({
              Data: this.state.Data.concat(response.profile),
              Loading: false,
              Page: this.state.Page + 1,
              Limit: this.state.Limit + 20,
              TotalProduct: response.profilecount
            });
          } else {
            this.setState({ Loading: false, TotalProduct: 0 });
          }
        })
        .catch(error => {
          this.setState({ Loading: false });
          alert("Try again Later");
          console.log(error);
        });
    } else alert("No more product to show");
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
            <View style={{ flex: 1 }}>
              <Image source={require("../../../assets/Images/search.png")} />
            </View>
            {/* <View style={{ width: 5, backgroundColor: "red" }} /> */}
            <View style={{ flex: 9 }}>
              <TextInput
                placeholder="Search Here"
                style={{ marginLeft: 5 }}
                onChangeText={text => this.setState({ SearchText: text })}
                onChange={() => {
                  return <PantryRow search={this.state.SearchText} />;
                }}
              />
            </View>
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

          <FlatList
            onMomentumScrollBegin={() => {
              this.onEndReachedCalledDuringMomentum = false;
            }}
            onEndReached={() => {
              if (!this.onEndReachedCalledDuringMomentum) {
                this.fetchResult();
                this.onEndReachedCalledDuringMomentum = true;
              }
            }}
            onEndReachedThreshold={0.5}
            data={this.state.Data}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
              return <PantryRow {...item} {...this.props} />;
            }}
            keyExtractor={(item, index) => "" + index}
          />
        </View>
        <View style={styles.LoaderContainer}>
          {this.state.Loading ? (
            <ActivityIndicator color="#a3d17d" size="large" />
          ) : (
            <Text style={styles.Text}>
              Total Products {this.state.TotalProduct}
            </Text>
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
