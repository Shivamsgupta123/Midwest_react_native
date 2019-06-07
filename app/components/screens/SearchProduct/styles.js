/**
 * Stylesheet for SearchProduct
 * @styles
 * @constant
 */

import { StyleSheet } from "react-native";
import * as color from "../../../utils/Color";
export default StyleSheet.create({
  Container: {
    flex: 1
  },
  SearchView: {
    backgroundColor: color.LightGreen,
    height: "12%",
    justifyContent: "center",
    alignItems: "center"
  },
  SearchBox: {
    backgroundColor: "white",
    height: "50%",
    width: "95%",
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center"
    // justifyContent: "space-between"
  },
  Icon: {
    color: color.LightGrey,
    marginHorizontal: 5
  },
  HeaderContainer: {
    height: "5%",
    width: "97%",
    backgroundColor: color.LightGreen,
    marginVertical: 5,
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "1.5%"
  },
  HeaderText: {
    width: "56%",
    color: "white",
    marginLeft: 5
  }
});
