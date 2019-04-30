/**
 * Stylesheet for Setting
 * @styles
 * @constant
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#b8babc",
    alignItems: "center"
  },
  UserInfoContainer: {
    width: "97%",
    height: "5%",
    backgroundColor: "white",
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  PasswordContainer: {
    backgroundColor: "white",
    width: "97%",
    flexDirection: "column"
  },
  RowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  TextInput: {
    width: "55%",
    height: 25,
    borderColor: "#b8babc",
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#b8babc"
  },
  Button: {
    backgroundColor: "#efd267",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 6
  },
  ButtonText: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    fontWeight: "500"
  }
});
