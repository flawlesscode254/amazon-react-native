import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import db from '../firebase'
import firebase from 'firebase'

const CartQuantity = ({ id, num }) => {
    const increment = firebase.firestore.FieldValue.increment(1)
    const decrement = firebase.firestore.FieldValue.increment(-1)

    const addQuantity = () => {
        db.collection("carts").doc(id).update({
            quantity: increment
        })
    }

    const minusQuantity = () => {
        db.collection("carts").doc(id).update({
            quantity: decrement
        })
    }

    return (
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
    )
}

export default CartQuantity

const styles = StyleSheet.create({})
