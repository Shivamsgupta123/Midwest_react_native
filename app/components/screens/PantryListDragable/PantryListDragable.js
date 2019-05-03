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
import DraggableFlatList from "react-native-draggable-flatlist";

export default class PantryListDragable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lock: true,
      Loading: false,
      SearchText: "",
      data: [...this.props.navigation.state.params].map((d, index) => ({
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
    console.log("pantry list drag props", this.props);
  }
  async addQty(item, index) {
    console.log("addqty", item, index);
    await this.setState({ Qty: this.state.Qty + 1 });
  }
  subQty(item, index) {
    console.log("subqty", item, index);
    this.setState({ Qty: this.state.Qty - 1 });
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    console.log("length", this.state.Qty.length);
    // console.log("item", item);
    // console.log("index", index);
    return (
      <TouchableOpacity
        style={[styles.HeaderContainer2, styles.RowContainer2]}
        activeOpacity={1}
        onLongPress={move}
        onPressOut={moveEnd}
        // onLongPress={() =>
        //   this.props.navigation.navigate("ProductDetail", this.props.Details)
        // }
      >
        <View style={styles.ProductDescription2}>
          <Text numberOfLines={1} style={{ marginLeft: 5 }}>
            {item.label.Details.DESCRIPTION}
          </Text>
        </View>
        <View
          style={[
            styles.ProductDescription2,
            { width: "17%", alignItems: "center" }
          ]}
        >
          <Text>{item.label.Details.UNITS}</Text>
        </View>
        <View style={styles.QtyContainer2}>
          <TouchableOpacity
            style={styles.QtyButton2}
            onPress={() => this.subQty(item, index)}
          >
            <Text style={{ fontSize: 22 }}>-</Text>
          </TouchableOpacity>
          <View style={[styles.QtyButton2, { backgroundColor: "white" }]}>
            <Text style={{ fontSize: 18 }}>{index}</Text>
          </View>
          <TouchableOpacity
            style={styles.QtyButton2}
            onPress={() => this.addQty(item, index)}
          >
            <Text style={{ fontSize: 22 }}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

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
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState({ data })}
          />
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
