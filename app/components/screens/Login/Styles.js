import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";

export default (styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#a3d17d",
    alignItems: "center",
    justifyContent: "center"
  },
  FormHolder: {
    height: "90%",
    width: "90%",
    backgroundColor: "white",
    // justifyContent: "center",
    alignItems: "center"
  },
  TextContainer: {
    height: 40,
    width: "80%",
    //   backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  Icon: {
    paddingRight: 10,
    color: "grey"
  },
  TextInput: {
    width: "85%",
    height: 30
  },
  LoginButton: {
    marginTop: 10,
    backgroundColor: "#a3d17d",
    borderWidth: 0
  },
  ButtonText: {
    fontSize: font.RegularFont,
    color: color.White
  },
  ImageContainer: {
    height: 150,
    width: "80%",
    marginVertical: 20,
    // backgroundColor: "yellow",
    alignItems: "center"
  },
  Image: {
    height: 150,
    width: 150
    // marginLeft: 60
  },
  BottomContainer: {
    width: "86%",
    marginTop: 10,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center"
  }
}));
