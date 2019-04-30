import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../utils/Color";
import * as font from "../../utils/FontSize";
import { IS_IPHONE_X } from "../../utils/Phone_Info";

export default (styles = StyleSheet.create({
  Container: {
    flex: 1
    // backgroundColor: color.LightGreen
  },
  ImageContainer: {
    height: "12.5%",
    // backgroundColor: color.LightGreen,
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: { height: 35, width: 35 }
}));
