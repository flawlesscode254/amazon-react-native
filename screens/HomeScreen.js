import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Items from '../components/Items'
import db from '../firebase'

const HomeScreen = () => {
    const [data, setData] = useState([])

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
        <View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Items 
                        image={item.image}
                        description={item.description}
                        price={item.price}
                    />
                )}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
