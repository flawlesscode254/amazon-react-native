import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CheckoutTop = ({ totalNumber, totalAmount }) => {
    return (
        <View style={{
            marginVertical: 20,
            marginHorizontal: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
            paddingBottom: 20,
            paddingTop: 20
        }}>
            <Text>{`Subtotal ( ${totalNumber} items ):`}<Text style={{
                color: "red",
                fontWeight: "bold",
                letterSpacing: 1
            }}>{`$ ${totalAmount}`}</Text></Text>
            <View
                style={{
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderRadius: 5,
                    backgroundColor: "#ffcc00",
                    borderWidth: 0.5,
                    borderColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 15,
                    marginTop: 15
                }}
                >
                <Text
                    style={{
                    letterSpacing: 1,
                    }}
                >
                    Proceed To Checkout
                </Text>
            </View>
        </View>
    )
}

export default CheckoutTop

const styles = StyleSheet.create({})
