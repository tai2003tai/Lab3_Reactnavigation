import React from "react";
import GioHang from "./GioHang";
import { Image, StyleSheet, View } from "react-native";

const ListCategory = () =>{
    return(
        <>
        <View>
            <GioHang tile="Danh Mục" />
            <View><Image source={require('../../hinhanh/logo.png')}/></View>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    conatiner:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    item:{
        Width:'20%',
        padding:10,
        overflow:'hidden',
        borderRadius:10,
        borderWidth:3,
        borderColor:'#000',
    }
})
export default ListCategory;