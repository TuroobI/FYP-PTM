import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomHeader = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 15, marginLeft:10}}>
            <TouchableOpacity onPress={() => navigation.replace('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader;
