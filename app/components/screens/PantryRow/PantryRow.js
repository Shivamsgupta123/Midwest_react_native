import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

export default class PantryRow extends Component {
  constructor(props) {
    super(props);
    console.log("pantry row props", this.props);
    this.state = {
      Loading: false,
      Qty: 0
    };
  }
  async subQty(products) {
    if (this.state.Qty != 0) await this.setState({ Qty: this.state.Qty - 1 });
    this.props.onPress(products, this.state.Qty);
  }
  async addQty(products) {
    await this.setState({ Qty: this.state.Qty + 1 });
    this.props.onPress(products, this.state.Qty);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.HeaderContainer, styles.RowContainer]}
        activeOpacity={1}
        onLongPress={
          this.props.Lock
            ? () => this.props.navigate("ProductDetail", this.props.Details)
            : () => this.props.onLongPress()
        }
      >
        <View style={styles.ProductDescription}>
          <Text numberOfLines={1} style={{ marginLeft: 5 }}>
            {this.props.Details.DESCRIPTION}
          </Text>
        </View>
        <View
          style={[
            styles.ProductDescription,
            { width: "17%", alignItems: "center" }
          ]}
        >
          <Text>{this.props.Details.UNITS}</Text>
        </View>
        <View style={styles.QtyContainer}>
          <TouchableOpacity
            style={styles.QtyButton}
            onPress={products => this.subQty(this.props.Details)}
          >
            <Text style={{ fontSize: 22 }}>-</Text>
          </TouchableOpacity>
          <View style={[styles.QtyButton, { backgroundColor: "white" }]}>
            <Text style={{ fontSize: 18 }}>{this.state.Qty}</Text>
          </View>
          <TouchableOpacity
            style={styles.QtyButton}
            onPress={() => this.addQty(this.props.Details)}
          >
            <Text style={{ fontSize: 22 }}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}
{
  /* <View style={[styles.HeaderContainer, styles.RowContainer]}>
        <Text style={{ width: "55%", marginLeft: 5 }}>Cheese sliced 50kg</Text>
        <Text style={{ width: "20%" }}>Each</Text>
        <View style={styles.QtyContainer}>
          <TouchableOpacity style={styles.QtyButton}>
            <Text style={{ fontSize: 22 }}>-</Text>
          </TouchableOpacity>
          <View style={[styles.QtyButton, { backgroundColor: "white" }]}>
            <Text style={{ fontSize: 18 }}>0</Text>
          </View>
          <TouchableOpacity style={styles.QtyButton}>
            <Text style={{ fontSize: 22 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View> */
}
