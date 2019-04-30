import React, { Component } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./styles";
// import Loader from "../../Loader/Loader";

export default class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Data: [],
      Qty: 0,
      count: 0
    };
  }

  async subQty(products) {
    if (this.state.Qty != 0) await this.setState({ Qty: this.state.Qty - 1 });
    this.props.onPress1(products, this.state.Qty);
  }

  async addQty(products) {
    await this.setState({
      Qty: this.state.Qty + 1
    });
    this.props.onPress(products, this.state.Qty); // passing data to Parents
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.HeaderContainer, styles.RowContainer]}
        activeOpacity={1}
        onLongPress={
          // () => console.log("longed pressed", this.props.Data.DESCRIPTION)
          () => this.props.navigation.navigate("ProductDetail", this.props.Data)
        }
      >
        <View style={styles.ProductDescription}>
          <Text numberOfLines={1} style={{ marginLeft: 5 }}>
            {this.props.Data.DESCRIPTION}
          </Text>
        </View>
        <View
          style={[
            styles.ProductDescription,
            { width: "17%", alignItems: "center" }
          ]}
        >
          <Text>{this.props.Data.UNITS}</Text>
        </View>
        <View style={styles.QtyContainer}>
          <TouchableOpacity
            style={styles.QtyButton}
            onPress={() => this.subQty(this.props.Data)}
          >
            <Text style={{ fontSize: 22 }}>-</Text>
          </TouchableOpacity>
          <View style={[styles.QtyButton, { backgroundColor: "white" }]}>
            <Text style={{ fontSize: 18 }}>{this.state.Qty}</Text>
          </View>
          <TouchableOpacity
            style={styles.QtyButton}
            onPress={() => this.addQty(this.props.Data)}
          >
            <Text style={{ fontSize: 22 }}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}
// var arr=[{code:"shivam"},{code:"swapnil"},{code:"shubham"}]
// var index= arr.findIndex(function(o) { return o.code == 'shivam'; })
// console.log(index)
