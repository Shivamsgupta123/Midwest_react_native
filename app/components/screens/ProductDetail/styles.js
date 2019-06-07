import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";

export default (styles = StyleSheet.create({
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
  InfoContainer: {
    height: "7%",
    borderColor: "black",
    borderWidth: 1,
    width: "97%",
    marginTop: 5,
    backgroundColor: "white",
    justifyContent: "center"
  },
  ImageContainer: {
    height: "30%",
    borderColor: "black",
    borderWidth: 1,
    width: "97%",
    marginTop: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  Text: { marginLeft: 5, fontSize: 16, fontWeight: "500" },
  Image: {
    // top: 0,
    height: "100%",
    width: "100%"
  },
  ImageWrapper: {
    width: "60%",
    height: "95%",
    marginLeft: 5
  },
  QtyContainer: {
    height: "20%",
    width: "95%%",
    backgroundColor: "#afaea8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#afaea8",
    borderRadius: 7,
    marginBottom: 5
    // marginVertical: 2
  },
  QtyButton: {
    height: "100%",
    width: "33.3%",
    justifyContent: "center",
    alignItems: "center"
  },
  ProductInfo: {
    width: "35%",
    height: "95%",
    marginRight: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  Text1: { fontSize: 17, fontWeight: "600" },
  HeadContainer: {
    width: "97%",
    justifyContent: "flex-start",
    marginVertical: 5
  }
}));
