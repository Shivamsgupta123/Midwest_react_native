import React, { Component } from "react";
import { StatusBar, AsyncStorage } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Login from "./app/components/screens/Login/Login";
import Home from "./app/components/screens/Home/Home";
import Drawer from "./app/components/Drawer/Drawer";
import PantryList from "./app/components/screens/PantryList/PantryList";
import Setting from "./app/components/screens/Setting";
import Cart from "./app/components/screens/Cart";
import AllProduct from "./app/components/screens/AllProduct";
import ProductDetail from "./app/components/screens/ProductDetail";
import SpecialProducts from "./app/components/screens/SpecialProducts";
import PantryListDragable from "./app/components/screens/PantryListDragable";

const MyApp = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    contentComponent: Drawer,
    drawerBackgroundColor: "#0008"
  }
);

const MainStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    MyApp: {
      screen: MyApp,
      navigationOptions: {
        header: null
      }
    },
    PantryList: {
      screen: PantryList,
      navigationOptions: {
        header: null
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        header: null
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        header: null
      }
    },
    AllProduct: {
      screen: AllProduct,
      navigationOptions: {
        header: null
      }
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: {
        header: null
      }
    },
    SpecialProducts: {
      screen: SpecialProducts,
      navigationOptions: {
        header: null
      }
    },
    PantryListDragable: {
      screen: PantryListDragable,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "MyApp"
  }
);
const MainStack1 = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    MyApp: {
      screen: MyApp,
      navigationOptions: {
        header: null
      }
    },
    PantryList: {
      screen: PantryList,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "MyApp"
  }
);
const RootStack = createAppContainer(MainStack);
const RootStack1 = createAppContainer(MainStack1);

export default class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBackgroundColor("red");
    this.state = {
      loggedIn: false,
      loading: false
    };
    // this.token = "";
    //   this.token = AsyncStorage.getItem("UserInfo");
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("UserInfo").then(
  //     value => this.setState({ Loading: false }),
  //     // if(value== null)
  //     // {
  //     this.setState({ loggedIn: false })
  //     // }
  //   );
  // }

  render() {
    return <RootStack />;
  }
}
