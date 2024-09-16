import React from "react";
import Header from "./components/Header";
import { View } from "react-native";
import ListCategory from "./components/ListCategory";
const HomeScreen = () => {
    return (
        <View style={{paddingHorizontal :15}}>
        <Header />
        <ListCategory/>
        </View>
    )
};

export default HomeScreen;