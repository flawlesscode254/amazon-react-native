import React from 'react'
import { StyleSheet, View } from 'react-native'
import Product from '../components/Product'

const ProductScreen = ({ route }) => {
    const {id, description, price} = route.params

    return (
        <View>
            <Product 
                id={id}
                description={description}
                price={price}
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})
