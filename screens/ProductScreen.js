import React from 'react'
import { StyleSheet, View } from 'react-native'
import Product from '../components/Product'

const ProductScreen = ({ route }) => {
    const { description, price, image} = route.params

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
