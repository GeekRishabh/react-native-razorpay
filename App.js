import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            var options = {
              description: "Credits for Medlife",
              image:
                "https://media.licdn.com/dms/image/C4E03AQEqwKxcpDWaCQ/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=ZT6t5qps4mFO3w_kDJRYpZdJK4YWCtymFphffX-c-NU",
              currency: "INR",
              key: "rzp_test_6VzgO1ZpjFuSUy",
              amount: "500",
              external: {
                wallets: ["paytm"]
              },
              name: "foo",
              prefill: {
                email: "rishabh@geekyants.com",
                contact: "9066274428",
                name: "Rishabh Pandey"
              },
              theme: { color: "#F37254" }
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
            RazorpayCheckout.onExternalWalletSelection(data => {
              alert(`External Wallet Selected: ${data.external_wallet} `);
            });
          }}
        >
          <Text style={styles.text}>Pay Here</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
