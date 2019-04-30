/**
 * AllProduct page/screen
 * @screen
 */

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
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import ProductRow from "../ProductRow";
import _ from "lodash";
import styles from "./styles";

/**
 * AllProduct class
 * @class
 */
class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      SearchText: "",
      Data: [],
      TotalProduct: 1,
      MaxPage: "",
      Page: 1,
      Limit: 0,
      Search: false
    };
    this.UserInfo = "";
    this.productsArray = [];
    this.index = -1;
    this.products = {
      ALT_UNITS: "",
      AVAILABLE: "",
      BRAND: "",
      CODE: "",
      CONVERSATION_FACTOR: "",
      DESCRIPTION: "",
      DISCOUNT: "",
      LOCATION: "",
      ON_HAND: "",
      ORIGINAL_PRICE: "",
      PICTURE_FIELD: "",
      PRICE1: "",
      PROD_CLASS: "",
      PROD_GROUP: "",
      REWARDS: "",
      SUBSTITUTE: "",
      TAX_CODE1: "",
      UNITS: "",
      WAREHOUSE: "",
      WEIGHT_SENSITIVE: "",
      flag_cc: "",
      QUANTITY: ""
    };
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
      console.log("fetched called");
      this.setState({ Loading: true });
      const { TotalProduct, MaxPage, Page } = this.state;
      var url =
        "https://www.scmcentral.com.au/webservices_midwest/myscmapp/list_products_new.php?code=" +
        this.UserInfo.Debtorid +
        "&page=" +
        this.state.Page +
        "&limit=20&warehouse=" +
        this.UserInfo.warehouse;
      console.log("all peoduct url", url);
      fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log("URL", url);
          if (response.total != 0) {
            this.setState({
              Data: this.state.Data.concat(response.products),
              Loading: false,
              TotalProduct: response.total,
              Page: this.state.Page + 1,
              Limit: this.state.Limit + 20
            });
          } else {
            this.setState({ Loading: false, TotalProduct: 0 });
          }
          console.log("All product List response", response.total);
        })
        .catch(error => {
          this.setState({ Loading: false });
          alert("Try again Later");
          console.log(error);
        });
    } else alert("No more product to show");
  }

  async search(text) {
    await this.setState({ SearchText: text });
    console.log(
      "search text",
      this.state.SearchText + this.state.SearchText.length
    );
    if (this.state.SearchText.length >= 3) {
      this.setState({ search: true });
      console.log("search called");
    } else {
      this.setState({ search: false });
      console.log("no search called");
    }
  }

  addToCart() {
    alert("your cart has been updated");
    // return (
    //   <View style={{ flex: 1, backgroundColor: "red" }}>
    //     <Text>Shivam</Text>
    //   </View>
    // );
  }

  editQty(products, QTY) {
    console.log("All product increase qty", products, QTY);
    this.products.ALT_UNITS = products.ALT_UNITS;
    this.products.AVAILABLE = products.AVAILABLE;
    this.products.BRAND = products.BRAND;
    this.products.CODE = products.CODE;
    this.products.CONVERSATION_FACTOR = products.CONVERSATION_FACTOR;
    this.products.DESCRIPTION = products.DESCRIPTION;
    this.products.DISCOUNT = products.DISCOUNT;
    this.products.LOCATION = products.LOCATION;
    this.products.ON_HAND = products.ON_HAND;
    this.products.ORIGINAL_PRICE = products.ORIGINAL_PRICE;
    this.products.PICTURE_FIELD = products.PICTURE_FIELD;
    this.products.PRICE1 = products.PRICE1;
    this.products.PROD_CLASS = products.PROD_CLASS;
    this.products.PROD_GROUP = products.PROD_GROUP;
    this.products.REWARDS = products.REWARDS;
    this.products.SUBSTITUTE = products.SUBSTITUTE;
    this.products.TAX_CODE1 = products.TAX_CODE1;
    this.products.UNITS = products.UNITS;
    this.products.WAREHOUSE = products.WAREHOUSE;
    this.products.WEIGHT_SENSITIVE = products.WEIGHT_SENSITIVE;
    this.products.flag_cc = products.flag_cc;
    this.products.QUANTITY = QTY;

    this.productsArray = this.productsArray.concat(this.products);
    console.log("productsArray", this.productsArray);
    this.index = _.findIndex(this.productsArray, function(o) {
      return o.DESCRIPTION == products.DESCRIPTION;
    });
    console.log("index of repeated product:  ", this.index);
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.SubConatiner}>
          <Header
            title={"All Products"}
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
          <View style={styles.SearchContainer}>
            <View style={{ flex: 1 }}>
              <Image source={require("../../../assets/Images/search.png")} />
            </View>
            <View style={{ flex: 9 }}>
              <TextInput
                placeholder="Search Here"
                style={{}}
                onChangeText={text => this.setState({ SearchText: text })}
                // onChange={text => this.search(text)}
                numberOfLines={1}
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
          </View>
          <FlatList
            // bounces={false}
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
              return (
                <ProductRow
                  {...item}
                  {...this.props}
                  onPress={(products, QTY) => this.editQty(products, QTY)} // receiving data(products, QTY)    from child (for increase qty)
                  // onPress1={(products, QTY) => this.editQty(products, QTY)} //(for increase qty)
                />
              );
            }}
            keyExtractor={(item, index) => "" + index}
          />
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

export default AllProduct;
