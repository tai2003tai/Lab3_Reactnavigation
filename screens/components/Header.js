import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title} >Nguyễn Tấn Tài</Text>
            </View>
            <View>
                <Image Souce={require('../../hinhanh/logo.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        backgroundColor:'yellow',
        flexDirection :'row',
        justifyContent :'space-between',
        alignItems:'center',
        
    },
    title:{
        color:'red',
        FontWeight:700,
        fontSize:16,
        textTransform:'uppercase',
        paddingVertical: 15,
         fontWeight: 'bold',
       }
})
export default Header ;