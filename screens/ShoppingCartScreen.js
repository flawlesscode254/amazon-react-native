import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import CartItems from '../components/CartItems'
import db from '../firebase'
import CheckoutTop from '../components/CheckoutTop'

const ShoppingCartScreen = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        db.collection("carts").onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => ({
                id: doc.id,
                image: doc.data().image,
                description: doc.data().description,
                price: doc.data().price,
                quantity: doc.data().quantity
            })))
        })
    }, [])

    const totalPrice = data.reduce((summedPrice, datas) => (
            summedPrice + datas.price * datas.quantity
        ), 
    0)

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >

            <CheckoutTop 
                totalNumber={data.length} 
                totalAmount={totalPrice} 
            />

            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CartItems 
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        id={item.id}
                        num={item.quantity}
                    />
                )}
            />

        </ScrollView>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({})
