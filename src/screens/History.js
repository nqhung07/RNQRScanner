/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class History extends Component {
    render() {
        return (
            <View>
                <Text> Home </Text>
                <TouchableOpacity
                onPress={()=>{}}>
                    <Text>Click</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
