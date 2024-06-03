import { View, Text } from "react-native";

export default function Inputs({id,name,text}){
    return(
        <>
         <label htmlFor="massa">Massa</label>
         <Input
          Type = {props.text}
          id ={props.id}
          name = {props.name}
         />
        </>
    );
}