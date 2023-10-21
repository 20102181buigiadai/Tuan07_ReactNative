import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function BikeDetails({ route, navigation }) {
  const { bike } = route.params;
  // const [like, setLike] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E941411A",
          borderRadius: 15,
          margin: 10
        }}
      >
        <Image
          source={bike.image}
          style={{ width: 320, height: 340, resizeMode: "contain" }}
        />
      </View>

      <View style={{ flex: 1, gap: 10, alignItems: "flex-start", margin: 10 }}>
        <Text style={styles.title}>{bike.name}</Text>
        <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
          <Text style={styles.discountPrice}>
            {bike.discount}%   OFF {bike.price}$
          </Text>
          <Text style={styles.originalPrice}>
            ${Math.floor(bike.price- bike.price*bike.discount/100)}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          margin: 10
        }}
      >
        <Text style={styles.title}>description</Text>
        <Text style={styles.description}>{bike.description}</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 10,
          gap: 5
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
          // onPress={() => {
          //   setLike("true");
          // }}
          >
            <Image
              source={require("../assets/akar-icons_heart.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5 }}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => navigation.navigate("Screen_02")}
          >
            <Text style={styles.addToCartButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  title: {
    fontFamily: "Voltaire",
    fontSize: 25,
    fontWeight: 600
  },
  discountPrice: {
    fontFamily: "Voltaire",
    fontSize: 25,
    fontWeight: 400,
    color: "#00000096"
  },
  originalPrice: {
    fontFamily: "Voltaire",
    fontSize: 25,
    fontWeight: 400,
    textDecorationLine: "line-through"
  },
  description: {
    fontFamily: "Voltaire",
    fontSize: 22,
    fontWeight: 400,
    color: "#00000091"
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    tintColor: "black"
  },
  addToCartButton: {
    width: 274,
    height: 54,
    backgroundColor: "#E94141",
    borderRadius: 50,
    justifyContent: "center"
  },
  addToCartButtonText: {
    height: 25,
    fontFamily: "Voltaire",
    fontSize: 25,
    fontWeight: 400,
    color: "white",
    textAlign: "center"
  }
};
