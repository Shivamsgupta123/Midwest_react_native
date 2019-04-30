/**
 * SpecialProducts page/screen
 * @screen
 */

import React, { Component } from "react";
import {
  Text,
  View,
  AsyncStorage,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
import Header from "../../Header/Header";
import styles from "./styles";
import ProductRow from "../ProductRow/ProductRow";

/**
 * SpecialProducts class
 * @class
 */
class SpecialProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      SearchText: "",
      Data: [],
      TotalProduct: 1,
      MaxPage: "",
      Page: 1,
      Limit: 0
    };
    this.UserInfo = "";
  }
  async componentDidMount() {
    this.UserInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));
    this.fetchResult();
  }
  async fetchResult() {
    if (this.state.Limit <= this.state.TotalProduct) {
      console.log("fetched called");
      this.setState({ Loading: true });
      const { TotalProduct, MaxPage, Page } = this.state;
      var url =
        "https://www.scmcentral.com.au/webservices_midwest/myscmapp/profile_products.php?code=" +
        this.UserInfo.Debtorid +
        "&page=0&limit=20&warehouse=" +
        this.UserInfo.warehouse;
      fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log("URL", url);
          if (response.specialcount != 0) {
            this.setState({
              Data: this.state.Data.concat(response.specials),
              Loading: false,
              TotalProduct: response.specialcount,
              Page: this.state.Page + 1,
              Limit: this.state.Limit + 20
            });
          } else this.setState({ Loading: false, TotalProduct: 0 });
          console.log(
            "Special List response",
            response.specials,
            response.specialcount
          );
        })
        .catch(error => {
          this.setState({ Loading: false });
          alert("Try again Later");
          console.log(error);
        });
    } else alert("No more product to show");
  }
  logOut() {
    AsyncStorage.removeItem("UserInfo");
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  addToCart() {}
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.SubConatiner}>
          <Header
            title={"Specials"}
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
          </View>
          {this.state.TotalProduct == 0 ? (
            <View>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                No special product found
              </Text>
            </View>
          ) : (
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
                return <ProductRow {...item} {...this.props} />;
              }}
              keyExtractor={(item, index) => "" + index}
            />
          )}
        </View>
        <View style={styles.LoaderContainer}>
          {this.state.Loading ? (
            <ActivityIndicator color="#a3d17d" size="large" />
          ) : (
            <Text style={styles.Text}>
              {this.state.Limit} of {this.state.TotalProduct}
            </Text>
          )}
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

export default SpecialProducts;

// Data:
// ALT_UNITS: "PKT"
// AVAILABLE: "61.0000"
// BRAND: "A&T"
// CODE: "AT-CRS8"
// COLOUR: "green"
// CONVERSATION_FACTOR: "1.00000000"
// DESCRIPTION: "CALAMARI Squid Rings Crumbed Large Formed 1kg(5)"
// DISCOUNT: ""
// LOCATION: "FC.01.1.4"
// ON_HAND: "170.0000"
// ORIGINAL_PRICE: "12.00"
// PICTURE_FIELD: "AT-CRS8.bmp"
// PRICE1: "12.00"
// PROD_CLASS: "F"
// PROD_GROUP: "FINF"
// REWARDS: "GOLD"
// SUBSTITUTE: ""
// TAX_CODE1: "-1"
// UNITS: "PKT"
// WAREHOUSE: "00"
// WEIGHT_SENSITIVE: "N"
// flag_cc: 1
