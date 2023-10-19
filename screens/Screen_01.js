import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity
} from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontFamily: "VT323",
            fontSize: 26,
            fontWeight: "400",
            textAlign: "center"
          }}
        >
          A premium online store for {"\n"} sporter and their stylish choice
        </Text>
      </View>

      <View
        style={{
          flex: 7,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            width: "95%",
            backgroundColor: "#E941411A",
            justifyContent: "flex-end",
            alignItems: "center",
            borderRadius: 50,
            margin: 15
          }}
        >
          <Image
            source={require("../assets/bifour_-removebg-preview.png")}
            style={{
              resizeMode: "contain",
              flex: 1,
              width: 292,
              height: 270
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 2
        }}
      >
        <View
          style={{
            flex: 2
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontFamily: "Ubuntu",
              fontSize: 26,
              fontWeight: "700",
              textAlign: "center",
              margintop:50
            }}
          >
            POWER BIKE {"\n"} SHOP
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            height: 61,
            width: 350,
            justifyContent: "center",
            backgroundColor: "#E94141",
            borderRadius: 30
          }}
          onPress={() => navigation.navigate("Screen_02")}
        >
          <Text
            style={{
              fontFamily: "VT323",
              fontSize: 27,
              fontWeight: 400,
              textAlign: "center",
              color: "white",
              alignItems: "center"
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
