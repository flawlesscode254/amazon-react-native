import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Quantity from "./Quantity";

const Product = () => {
  const [selected, setSelected] = useState("Blue");

  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 15,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 15,
          }}
        >
          $94.00
        </Text>

        <Text
          style={{
            color: "#5b5c5c",
            marginBottom: 10,
            fontSize: 15,
          }}
        >
          No Import Fees Deposit and{" "}
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            $9.98
          </Text>{" "}
          Shipping to Spain{" "}
          <Text
            style={{
              color: "#0c8cb0",
            }}
          >
            Details
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginBottom: 15,
          }}
        >
          Available at a lower price from{" "}
          <Text
            style={{
              color: "#0c8cb0",
            }}
          >
            other sellers
          </Text>{" "}
          that may not offer Prime shipping
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginBottom: 15,
          }}
        >
          Arrives:{" "}
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Thursday, May 6
          </Text>{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Ionicons
            style={{
              marginRight: 15,
            }}
            name="location-outline"
            size={30}
            color="black"
          />
          <Text
            style={{
              fontSize: 15,
              color: "#0c8cb0",
            }}
          >
            Deliver to Spain
          </Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            color: "#ed1144",
            marginBottom: 15,
          }}
        >
          Only 6 left in stock - order soon
        </Text>

        <Text style={{
            marginBottom: 5
        }}>Colour:</Text>

        <View
          style={{
            borderWidth: 1,
            width: 314,
            borderColor: "#e3e2e1",
            backgroundColor: "#e3e2e1",
            width: "40%",
            marginBottom: 15,
            padding: 3
          }}
        >
          <Picker
            selectedValue={selected}
            onValueChange={(itemValue) => setSelected(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Red" value="Red" />
            <Picker.Item label="Green" value="Green" />
            <Picker.Item label="Yellow" value="Yellow" />
          </Picker>
        </View>

        <Quantity />

        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 5,
            backgroundColor: "#d6b23a",
            borderWidth: 0.5,
            borderColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              letterSpacing: 1,
            }}
          >
            Add to Cart
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 5,
            backgroundColor: "#d6923a",
            borderWidth: 0.5,
            borderColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              letterSpacing: 1,
            }}
          >
            Buy Now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
