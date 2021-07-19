import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native'
import Items from '../components/Items'
import db from '../firebase'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
    const [data, setData] = useState([])

    const navigation = useNavigation()

    useEffect(() => {
        db.collection("items").onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => ({
                id: doc.id,
                image: doc.data().image,
                description: doc.data().description,
                price: doc.data().price
            })))
        })
    }, [])

    return (
        
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate("Product", {
                    image: item.image,
                    description: item.description,
                    price: item.price
                })}>
                    <Items 
                        image={item.image}
                        description={item.description}
                        price={item.price}
                    />
                </TouchableOpacity>
                )}
            />
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
