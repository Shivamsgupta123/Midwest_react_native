/**
 * Stylesheet for SpecialProducts
 * @styles
 * @constant
 */

import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  SubConatiner: { flex: 1, backgroundColor: "#d8d5cb", alignItems: "center" },
  ButtonContainer: {
    flexDirection: "row",
    height: "6%"
  },
  Buttons: {
    width: "100%",
    backgroundColor: "#efd267",
    justifyContent: "center",
    alignItems: "center"
  },
  ButtonText: {
    color: "white",
    fontSize: 18
  },
  HeaderContainer: {
    height: "5%",
    width: "97%",
    backgroundColor: color.LightGreen,
    marginVertical: 5,
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  HeaderText: {
    width: "56%",
    color: "white",
    marginLeft: 5
  },
  LoaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "4%",
    backgroundColor: "transparent"
  },
  Text: {
    backgroundColor: "#d8d5cb",
    height: "100%",
    paddingTop: 5,
    paddingHorizontal: 5,
    fontWeight: "500"
  }
});
