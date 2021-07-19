import React, {useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import Product from '../components/Product'
import {auth} from '../firebase'

const ProductScreen = ({ route, navigation }) => {
    const { description, price, image} = route.params

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
                if (!authUser) {
                    navigation.navigate("SignIn");
                }
            });
    }, [auth]);
    
    return (
        <View>
            <Product
                description={description}
                price={price}
                image={image}
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})
