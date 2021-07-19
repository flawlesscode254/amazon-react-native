import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import countryList from "country-list";
import {auth} from '../firebase'

const countries = countryList.getData();

const CheckOutScreen = ({ navigation }) => {
  const [country, setCountry] = useState(countries[0].code);
  const [name, setName] = useState("")
  const [number, setNumber] = useState()
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
            if (!authUser) {
                navigation.navigate("SignIn");
            }
        });
}, [auth]);

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={110}
    >
    <ScrollView>
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 20,
            marginTop: 50,
          }}
        >
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                  letterSpacing: 2,
                }}
              >
                Enter a shipping address
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#bfbfbd",
                padding: 10,
                marginBottom: 15,
              }}
            >
              <Picker
                selectedValue={country}
                onValueChange={setCountry}
                mode="dropdown"
              >
                {countries.map((country) => (
                  <Picker.Item label={country.name} value={country.code} />
                ))}
              </Picker>
            </View>

            <Text
              style={{
                marginBottom: 10,
              }}
            >
              Full name (First and Last name)
            </Text>
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Full name"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "#FFF",
                borderWidth: 0.5,
                paddingLeft: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
                marginBottom: 20,
              }}
            />

            <Text
              style={{
                marginBottom: 10,
              }}
            >
              Phone number
            </Text>
            <TextInput
              value={number}
              onChangeText={text => setNumber(text)}
              keyboardType="phone-pad"
              placeholder="Phone number"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "#FFF",
                borderWidth: 0.5,
                paddingLeft: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
                marginBottom: 20,
              }}
            />

            <Text
              style={{
                marginBottom: 10,
              }}
            >
              Address
            </Text>
            <TextInput
              value={address}
              onChangeText={text => setAddress(text)}
              placeholder="Street address or P.O. Box"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "#FFF",
                borderWidth: 0.5,
                paddingLeft: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
                marginBottom: 20,
              }}
            />

            <Text
              style={{
                marginBottom: 10,
              }}
            >
              City
            </Text>
            <TextInput
              value={city}
              onChangeText={text => setCity(text)}
              placeholder="City"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "#FFF",
                borderWidth: 0.5,
                paddingLeft: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
                marginBottom: 20,
              }}
            />

            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 5,
                backgroundColor: "#d6b23a",
                borderWidth: 0.5,
                borderColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  letterSpacing: 1,
                }}
              >
                Check Out
              </Text>
            </View>
          </View>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({});
