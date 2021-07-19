import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

const CarouselImage = ({ image }) => {
    return (
        <View>
            <Image style={{
                width: Dimensions.get("window").width - 30,
                height: 200,
                borderWidth: 0.5,
                borderColor: "black",
                borderRadius: 5
            }} source={{ uri: image }} />
        </View>
    )
}

export default CarouselImage

const styles = StyleSheet.create({})
