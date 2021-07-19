import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {auth} from '../firebase'

const MenuScreen = ({ navigation }) => {

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
                if (!authUser) {
                    navigation.navigate("SignIn");
                }
            });
    }, [auth]);
    
    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})
