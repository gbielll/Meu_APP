import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultadoImc from "../ResultadoImc";

export default function Form(){
    return(
        <View>
          <View>
            <Text>Altura</Text>
            <TextInput
            placeholder="Informe sua altura"
            keyboardType="numeric"
            ></TextInput>

            <Text>Peso</Text>
            <TextInput
            placeholder="Informe seu peso"
            keyboardType="numeric"
            ></TextInput>

           <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            /> 

          </View>
           
           <ResultadoImc  resultadoImc={imc} menssImc={messageImc} />

        </View>
    );
}