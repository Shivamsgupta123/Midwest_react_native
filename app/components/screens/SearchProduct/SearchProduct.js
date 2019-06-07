/**
 * SearchProduct page/screen
 * @screen
 */

import React, { Component } from "react";
import { Text, View, FlatList, AsyncStorage, alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Loader from "../../Loader/Loader";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ProductRow from "../ProductRow";

/**
 * SearchProduct class
 * @class
 */
class SearchProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      Data: [],
      Loading: false,
      Total: 1
    };
    this.UserInfo = "";
  }
  async componentDidMount() {
    this.UserInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));
  }
  changeText = text => {
    this.setState({
      searchText: text
    });
    if (this.state.searchText.length <= 3) return;
    else {
      this.setState({ Loading: true });
      var url =
        "https://www.scmcentral.com.au/webservices_midwest/myscmapp/search_products_new.php?code=" +
        this.UserInfo.Debtorid +
        "&page=1&limit=1500&term=" +
        this.state.searchText +
        "&warehouse=" +
        this.UserInfo.warehouse;
      console.log("pantrylist search url", url);
      fetch(url)
        .then(response => response.json())
        .then(response => {
          if (response.result) {
            this.setState({
              Data: response.products,
              Loading: false,
              Total: 1
            });
          } else {
            console.log("no prod");
            this.setState({ Loading: false, Total: 0 });
          }
        })
        .catch(error => {
          this.setState({ Loading: false });
          alert("Try again Later");
          console.log(error);
        });
    }
  };

  editQty(products, QTY) {
    console.log("search product edit qty:", products, QTY);
  }

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.SearchView}>
          <View style={styles.SearchBox}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" size={23} style={styles.Icon} />
            </TouchableOpacity>
            <View style={{ width: "83%" }}>
              <TextInput
                placeholder="Seach here"
                value={this.state.searchText}
                onChangeText={this.changeText}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                this.setState({ searchText: "", Data: "", Total: 1 })
              }
            >
              <Icon name="times" size={23} style={styles.Icon} />
            </TouchableOpacity>
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
              marginLeft: 20
            }}
          >
            Qty
          </Text>
        </View>
        {this.state.Loading ? (
          <Loader isGreen={true} />
        ) : (
          <FlatList
            data={this.state.Data}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
              return (
                <ProductRow
                  {...item}
                  onPress={(products, QTY) => this.editQty(products, QTY)} // receiving data(products, QTY)    from child (for increase qty)
                />
              );
            }}
            keyExtractor={(item, index) => "" + index}
          />
        )}
        {this.state.Total == 0 ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "80%"
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 20 }}>
              No product found
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}

export default SearchProduct;
