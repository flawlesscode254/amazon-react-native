import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import CartQuantity from './CartQuantity'

const CartItems = ({ image, description, price, id, num }) => {
    return (
        <View style={{
            marginHorizontal: 15,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#c9c9c9",
            borderRadius: 7,
            backgroundColor: "#ededed",
            paddingVertical: 20,
            paddingHorizontal: 5
        }}>
        <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
        }}>

            <View style={{
                marginRight: 10
            }}>
                <ImageBackground style={{
                    width: 150,
                    aspectRatio: 3 / 2
                }} resizeMode="cover" source={{ uri: image }} >
                    <View style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexDirection: "row",
                        backgroundColor: "black",
                        paddingVertical: 2,
                        paddingHorizontal: 10,
                        width: "80%"
                    }}>
                        <Text style={{
                            color: "#FFF",
                            marginRight: 5
                        }}>Amazon's</Text>
                        <Text style={{
                            color: "orange"
                        }}>Choice</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={{
                width: "50%",
                marginBottom: 5
            }}>
                <Text>
                    {description}
                </Text>
                <View style={{
                    flexDirection: "row",
                    marginBottom: 5
                }}>
                    <Ionicons name="star" size={25} color="#e47911" />
                    <Ionicons name="star" size={25} color="#e47911" />
                    <Ionicons name="star" size={25} color="#e47911" />
                    <Ionicons name="star" size={25} color="#e47911" />
                    <Ionicons name="star-half" size={25} color="#e47911" />
                </View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20
                }}>{`$ ${price}`}</Text>
                
            </View>
        </View>

        <View style={{
            marginTop: 10
        }}>
            <CartQuantity id={id} num={num} />
        </View>

        </View>
    )
}

export default CartItems

const styles = StyleSheet.create({})
