import React from "react";
import { View, Text } from "react-native";

export default function ResultadoImc(props){
    return(
        <View>
            <Text>{props.resultadoImc}</Text>
            <Text>{props.menssImc}</Text>
        </View>
    );
}