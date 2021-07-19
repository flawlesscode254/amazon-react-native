import React, {useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'

const CheckoutTop = ({ image, description, quantity, totalNumber, totalAmount }) => {

    const navigation = useNavigation()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
                if (!authUser) {
                    navigation.navigate("SignIn");
                }
            });
    }, [auth]);

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

            <TouchableOpacity onPress={() => {
                navigation.navigate("CheckOut", {
                    image, description, quantity, totalNumber, totalAmount
                })
            }}>
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
            </TouchableOpacity>
            
        </View>
    )
}

export default CheckoutTop

const styles = StyleSheet.create({})
