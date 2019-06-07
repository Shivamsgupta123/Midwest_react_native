import { Platform, StyleSheet, Dimensions } from "react-native";
import * as color from "../../../utils/Color";
import * as font from "../../../utils/FontSize";
import { IS_IPHONE_X } from "../../../utils/Phone_Info";
import { Button } from "native-base";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dee0e2"
  },
  PieChartContainer: {
    width: "96%",
    backgroundColor: "white",
    top: 5,
    height: "30%",
    flexDirection: "row",
    alignItems: "center"
  },
  ChartWrapper: {
    // backgroundColor: "white",
    width: "50%",
    height: "94%",
    justifyContent: "center",
    alignItems: "center"
  },
  Total: { position: "absolute", top: 70 },
  ButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    alignItems: "center"
    // backgroundColor: "red"
  },
  ColorIndicator: { height: 15, width: 15 },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#A52A2A",
    transform: [{ rotate: "120deg" }],
    position: "absolute",
    left: 120,
    top: 100
  },
  triangleCur: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#25ed36",
    transform: [{ rotate: "60deg" }],
    position: "absolute",
    left: 135,
    top: 10
  },
  triangleOv60: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#A52A2A",
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    left: 140
  },
  triangleOv30: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#f2a202",
    transform: [{ rotate: "79deg" }],
    position: "absolute",
    left: 140,
    top: 30
  },
  triangleOv90: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    transform: [{ rotate: "102deg" }],
    position: "absolute",
    left: 130,
    top: 83
  }
}));

//for over 60
// triangle: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderLeftWidth: 30,
//     borderRightWidth: 30,
//     borderBottomWidth: 60,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#A52A2A",
//     transform: [{ rotate: "90deg" }],
//     position: "absolute",
//     left: 140
//   }

// for total
// triangle: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderLeftWidth: 30,
//     borderRightWidth: 30,
//     borderBottomWidth: 60,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#A52A2A",
//     transform: [{ rotate: "120deg" }],
//     position: "absolute",
//     left: 120,
//     top: 100
//   }

//over 90
// triangle: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderLeftWidth: 30,
//     borderRightWidth: 30,
//     borderBottomWidth: 60,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "red",
//     transform: [{ rotate: "102deg" }],
//     position: "absolute",
//     left: 130,
//     top: 83
//   }

// for over 30
// triangle: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderLeftWidth: 30,
//     borderRightWidth: 30,
//     borderBottomWidth: 60,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#f2a202",
//     transform: [{ rotate: "79deg" }],
//     position: "absolute",
//     left: 140,
//     top: 30
//   }

// for current
// triangle: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderLeftWidth: 30,
//     borderRightWidth: 30,
//     borderBottomWidth: 60,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#25ed36",
//     transform: [{ rotate: "60deg" }],
//     position: "absolute",
//     left: 135,
//     top: 10
//   }
