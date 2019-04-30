import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../utils/Color";
import * as font from "../../utils/FontSize";
import { IS_IPHONE_X } from "../../utils/Phone_Info";

export default (styles = StyleSheet.create({
  Container: {
    backgroundColor: color.LightGreen,
    ...Platform.select({
      ios: {
        height: IS_IPHONE_X ? "10%" : "8%",
        paddingTop: 12
      },
      android: {
        height: 50
      }
    }),
    justifyContent: "center",
    width: "100%",
    flexDirection: "row"
  },
  BackButtonView: {
    // backgroundColor: "red",
    width: "30%",
    justifyContent: "center"
  },
  BackButton: {
    color: color.White,
    paddingLeft: "20%",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginTop: IS_IPHONE_X ? 15 : 0
  },
  HeaderTextView: {
    // backgroundColor: "blue",
    width: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  HeaderText: {
    color: color.White,
    fontSize: font.RegularFont,
    fontWeight: font.HeaderTextFontWeight,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginTop: IS_IPHONE_X ? 15 : 0
  },
  Icon1View: {
    width: "15%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  icon1: {
    paddingLeft: "30%",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  CartView: {
    backgroundColor: "#b8babc",
    height: 17,
    width: 17,
    borderRadius: 8.5,
    borderColor: "blue",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -23,
    marginLeft: 20
  }
}));
