import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";

export default (styles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    // height: "6%",
    width: "97%",
    flexDirection: "row",
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  RowContainer: {
    backgroundColor: "white",
    marginBottom: 3
  },
  QtyContainer: {
    height: "97%",
    width: "25%",
    backgroundColor: "#afaea8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#afaea8",
    borderRadius: 7
    // marginVertical: 2
  },
  QtyButton: {
    height: "100%",
    width: "33.3%",
    justifyContent: "center",
    alignItems: "center"
  },
  ProductDescription: {
    width: "58%",
    height: "100%",
    justifyContent: "center",
    paddingVertical: 7,
    borderRightWidth: 1,
    borderColor: "#afaea8"
  }
}));
