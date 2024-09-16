import React from "react";
import { Text, View } from "react-native";

type GioHangProps = {
    tile: string;
};

const GioHang = ({ tile }: GioHangProps) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ color: 'red', fontWeight: 'bold', paddingVertical: 15 }}>
                    {tile}
                </Text>
            </View>
        </View>
    );
};

export default GioHang;
