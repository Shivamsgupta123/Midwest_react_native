import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  WebView
} from "react-native";
import styles from "./Styles";

export default class Special extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pdf = null;
  }
  render() {
    return (
      <WebView
        source={{
          uri:
            "https://www.scmcentral.com.au/webservices_midwest/../public/upload_pdf/100119+weekly+specials.pdf"
        }}
      />
    );
  }
}
