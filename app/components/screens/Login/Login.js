import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "native-base";
import Loader from "../../Loader/Loader";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RememberMe: false,
      UserName: "",
      Password: "",
      Loading: false
    };
  }
  rememberUser() {
    this.setState({
      RememberMe: !this.state.RememberMe
    });
  }
  Login() {
    if (this.state.UserName == "") alert("Enter user name");
    if (this.state.Password == "") alert("Enter Password");
    else {
      let formData = new FormData();
      formData.append("username", this.state.UserName);
      formData.append("password", this.state.Password);
      formData.append("format", "json");
      this.setState({ Loading: true });

      fetch("https://www.scmcentral.com.au/webservices_midwest/login.php", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(response => {
          if (response.result === true) {
            this.setState({ Loading: false });
            console.log("success", response.members[0].Data);
            AsyncStorage.setItem(
              "UserInfo",
              JSON.stringify(response.members[0].Data)
            );
            // console.log("success69", JSON.stringify(response.members[0].Data));
            this.props.navigation.navigate("Home");
          } else {
            this.setState({ Loading: false });
            alert("invalid User name or Password");
          }
        })
        .catch(exception => {
          console.log("error", exception);
        });
    }
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.FormHolder}>
          <View style={styles.ImageContainer}>
            <Image
              source={require("../../../assets/Images/appicon.png")}
              style={styles.Image}
            />
          </View>
          <View style={styles.TextContainer}>
            <Icon name="user" size={25} style={styles.Icon} />
            <TextInput
              style={styles.TextInput}
              placeholder="User Name"
              onChangeText={text => this.setState({ UserName: text })}
            />
          </View>
          <View style={[styles.TextContainer, { marginTop: 10 }]}>
            <Icon name="lock" size={28} style={styles.Icon} />
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              onChangeText={text => this.setState({ Password: text })}
            />
          </View>
          <TouchableOpacity
            style={[styles.TextContainer, styles.LoginButton]}
            onPress={() => this.Login()}
          >
            {this.state.Loading ? (
              <Loader isGreen={false} />
            ) : (
              <Text style={styles.ButtonText}>Login</Text>
            )}
          </TouchableOpacity>
          <View style={styles.BottomContainer}>
            <CheckBox
              checked={this.state.RememberMe}
              style={{ borderRadius: 0, borderColor: "grey" }}
              onPress={() => this.rememberUser()}
            />
            <Text style={{ marginLeft: 15, fontSize: 13 }}>Remember Me</Text>
            <TouchableOpacity>
              <Text style={{ marginLeft: 45, fontSize: 13 }}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
