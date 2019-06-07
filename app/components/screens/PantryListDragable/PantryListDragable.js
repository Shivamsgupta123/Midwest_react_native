import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import styles from "./Styles";
import { StackActions, NavigationActions } from "react-navigation";
import Header from "../../Header/Header";
import PantryRow from "../PantryRow/PantryRow";
import DraggableFlatList from "react-native-draggable-flatlist";
import { ProductList, changeData } from "../../../Global";
import * as color from "../../../utils/Color";

export default class PantryListDragable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lock: true,
      Loading: false,
      SearchText: "",
      data: [...ProductList].map((d, index) => ({
        key: `item-${index}`,
        label: d,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
          5}, ${132})`
      })),
      TotalProduct: 1,
      Page: 1,
      Qty: 1
    };
    this.UserInfo = "";
    console.log("ProductList", ProductList);
    // console.log("pantry list drag props", this.props);
  }
  addQty(item, index) {
    console.log("addqty", item, index);
    this.setState({ Qty: this.state.Qty + 1 });
  }
  subQty(item, index) {
    console.log("subqty", item, index);
    this.setState({ Qty: this.state.Qty - 1 });
  }

  logOut() {
    AsyncStorage.removeItem("UserInfo");
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  async isLock() {
    await this.setState({ Lock: !this.state.Lock });
    console.log("lock", this.state.Lock);
  }

  search(value) {
    console.log("search text", this.state.SearchText);
    // <PantryRow search={this.state.SearchText} />;
  }
  editQty(products, QTY) {
    console.log("All product increase qty", products, QTY);
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.SubConatiner}>
          <Header
            title={"Pantry List Dragable"}
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

            <TouchableOpacity
              style={{ flex: 9 }}
              onPressOut={() => this.props.navigation.navigate("SearchProduct")}
              activeOpacity={1}
            >
              <Text style={{ color: color.ProductlistFont }}>Search here</Text>
            </TouchableOpacity>
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
              <TouchableOpacity onPress={() => this.isLock()}>
                <Image
                  style={{ width: 20, height: "100%" }}
                  source={require("../../../assets/Images/locked.png")}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.isLock()}>
                <Image
                  style={{ width: 30, height: "100%" }}
                  source={require("../../../assets/Images/unlocked.png")}
                />
              </TouchableOpacity>
            )}
          </View>
          <DraggableFlatList
            data={this.state.data}
            renderItem={({ item, index, move, moveEnd, isActive }) => {
              return (
                <PantryRow
                  {...item.label}
                  {...this.props.navigation}
                  onLongPress={move}
                  onPress={(products, QTY) => this.editQty(products, QTY)} // receiving data(products, QTY)    from child (for increase qty)
                  Lock={this.state.Lock}
                />
              );
            }}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => {
              // this.setState({ data });
              // changeData(data.label);
            }}
          />
          {/* {console.log("data", this.state.data)} */}
        </View>
        <View style={styles.LoaderContainer}>
          {this.state.Loading ? (
            <ActivityIndicator color="#a3d17d" size="large" />
          ) : (
            <Text style={styles.Text}>
              Total Products {this.props.navigation.state.params.length}
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
