import React, { Component } from "react";
import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
// import styles from "./Styles";
import Pdf from "react-native-pdf";

export default class Special extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pdf = null;
  }
  render() {
    let yourPDFURI = {
      uri:
        "https://www.scmcentral.com.au/webservices_midwest/../public/upload_pdf/100119+weekly+specials.pdf",
      cache: true
    };
    return (
      <View style={{ flex: 1 }}>
        <Pdf
          ref={pdf => {
            this.pdf = pdf;
          }}
          source={yourPDFURI}
          style={{ flex: 1 }}
          onError={error => {
            console.log(error);
          }}
        />
      </View>
    );
  }
}
