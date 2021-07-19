import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {auth} from '../firebase'

const ProfileScreen = ({ navigation }) => {

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
                if (!authUser) {
                    navigation.navigate("SignIn");
                }
            });
    }, [auth]);
    
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
