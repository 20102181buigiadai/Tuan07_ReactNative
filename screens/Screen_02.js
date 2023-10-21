import { Pressable } from "react-native";
import React, { useState } from "react";
import { Text, View, Image, FlatList } from "react-native";

const arrBikes = [
  {
    id: 1,
    image: require("../assets/bifour_-removebg-preview.png"),
    name: "Pinarello",
    price: 1800,
    type: "Roadbike",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    like: false,
    discount: 100
  },
  {
    id: 2,
    image: require("../assets/bione-removebg-preview.png"),
    name: "Pina Mountai",
    price: 1700,
    type: "Roadbike",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    like: false,
    discount: 70
  },
  {
    id: 3,
    image: require("../assets/bithree_removebg-preview.png"),
    name: "Pina Bike",
    price: "1500",
    type: "Roadbike",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    like: false,
    discount: 10
  },
  {
    id: 4,
    image: require("../assets/bitwo-removebg-preview.png"),
    name: "Pinarello",
    price: 1900,
    type: "Mountain",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    like: false,
    discount: 20
  },
  {
    id: 5,
    image: require("../assets/bithree_removebg-preview.png"),
    name: "Pinarello",
    price: 2700,
    type: "Mountain",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    like: false,
    discount: 80
  },
  {
    id: 6,
    name: "Pinarello",
    image: require("../assets/bitwo-removebg-preview.png"),
    price: 1350,
    type: "Mountain",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    like: false,
    discount: 60
  }
];

export default function App({ navigation }) {
  const [color, setColor] = useState("all");
  const [arrView, setArrView] = useState(arrBikes);

  function changeType(type) {
    if (type === "all") {
      setArrView(arrBikes);
    } else {
      setArrView(arrBikes.filter((value) => value.type === type));
    }
    setColor(type);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "Ubuntu",
            fontSize: 25,
            fontWeight: 700,
            color: "#E94141",
            marginLeft: 20
          }}
        >
          The world’s Best Bike
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "90%",
          marginHorizontal: "auto"
        }}
      >
        {[
          { text: "All", type: "all" },
          { text: "Roadbike", type: "Roadbike" },
          { text: "Mountain", type: "Mountain" }
        ].map((item) => (
          <Pressable
            key={item.text}
            style={[
              {
                width: 100,
                height: 25,
                borderWidth: 2,
                borderColor: item.type === color ? "#E94141" : "#E9414187",
                borderRadius: 5
              }
            ]}
            onPress={() => changeType(item.type)}
          >
            <Text
              style={[
                {
                  flex: 1,
                  height: 25,
                  fontFamily: "Voltaire",
                  fontSize: 20,
                  fontWeight: 400,
                  color: item.type === color ? "#E94141" : "#E9414187",
                  textAlign: "center"
                }
              ]}
            >
              {item.text}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={{ flex: 7, alignItems: "center" }}>
        <FlatList
          numColumns={2}
          data={arrView}
          renderItem={({ item }) => (
            <Pressable
              style={{
                height: 200,
                width: 167,
                borderWidth: 1,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 10,
                borderRadius: 10,
                backgroundColor: "#F7BA8326",
                alignItems: "center"
              }}
              onPress={() => navigation.push("Screen_03", { bike: item })}
            >
              <Image
                source={item.image}
                style={{
                  flex: 1,
                  width: 135,
                  height: 127,
                  resizeMode: "contain"
                }}
              />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    fontFamily: "Voltaire"
                  }}
                >
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../assets/$.png")}
                    style={{ width: 15, height: 15, resizeMode: "contain" }}
                  />
                  <Text style={{ fontSize: 20, fontWeight: 400 }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
