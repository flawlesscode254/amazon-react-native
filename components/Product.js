import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import CarouselImage from "./CarouselImage";
import db from '../firebase'

const Product = ({ image, description, price }) => {
  const [selected, setSelected] = useState("Blue");
  const [data, setData] = useState([])
  const [active, setActive] = useState(0)
  const [num, setNum] = useState(1)

  const addQuantity = () => {
      setNum(num + 1)
  }

  const minusQuantity = () => {
      if (num !== 0) {
          setNum(num - 1)
      }
  }

  const addToCart = () => {
    db.collection("carts").add({
      image: image,
      description: description,
      price: price,
      quantity: num
    })
  }

  const onFlatlistChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActive(viewableItems[0].index || 0)
    }
  }, [])

  useEffect(() => {
    db.collection("images").onSnapshot((snapshot) => {
      setData(snapshot.docs.map(doc => ({
          id: doc.id,
          image: doc.data().image
      })))
  })
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        marginVertical: 10,
        marginHorizontal: 15
      }}>

        <View style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <FlatList 
          data={data}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50
          }}
          onViewableItemsChanged={onFlatlistChanged}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get("window").width - 30}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CarouselImage 
              image={item.image}
            />
          )}
        />
        <View style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 10
        }}>
          {data.map((image, index) => (
            <View style={{
              borderWidth: 0.5,
              height: 10,
              width: 10,
              borderRadius: 999,
              marginRight: 15,
              backgroundColor: index === active ? "gray" : "#FFF"
            }} />
          ))}
        </View>
        
        </View>


      <View>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 15,
          }}
        >
          {`$ ${price}`}
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
          {description}
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

        <View>
            <Text style={{
            marginBottom: 5
        }}>Quantity:</Text>

        <View style={{
            marginBottom: 15,
            flexDirection: "row"
        }}>
            <TouchableOpacity onPress={minusQuantity}>
                <View style={{
                    backgroundColor: "#9d9fa1",
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                    borderWidth: 0.5,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5
                }}>
                    <Text>-</Text>
                </View>
            </TouchableOpacity>
            <View style={{
                backgroundColor: "#FFF",
                paddingVertical: 5,
                paddingHorizontal: 30,
                borderWidth: 0.5
            }}>
                <Text>{num}</Text>
            </View>
            <TouchableOpacity onPress={addQuantity}>
                <View style={{
                    backgroundColor: "#9d9fa1",
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                    borderWidth: 0.5,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                }}>
                    <Text>+</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>

      <TouchableOpacity onPress={addToCart}>
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
      </TouchableOpacity>

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
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({});
