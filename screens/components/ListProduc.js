    import React from "react";
    import GioHang from "./GioHang";
    import { Image, StyleSheet, Text, View } from "react-native";
    const ListProduc =() =>{
        return(
            <>
                <GioHang tile={"sản phẩm "}/>
                <View style={style.container}>
                    <View style={style.item}> 
                        <Image source={require('../../hinhanh/logo.png')} style={{width:'100%',height:150}}/>
                        <View style={style.dess}>
                            <Text style={style.dess_text}></Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }

    const style = StyleSheet.create({
        container:{
            flexDirection:'row',
            flexWrap :'wrap',
            justifyContent:'space-between',
        },
        item:{
            width:'40%'
        },
        dess:{
            backgroundColor:'black',
            paddingVertical:5,
        },
        dess_text:{
            color:'white',
            textAlign:'center',
        }
    })
    export default ListProduc;  