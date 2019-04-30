import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../../utils/Color";

export default (styles = StyleSheet.create({
  Container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  TabStyle: {
    backgroundColor: "#b8babc"
  },
  ActiveTabStyle: {
    backgroundColor: "white"
  },
  TabTextStyle: {
    color: "white",
    fontWeight: "600"
  }
}));
