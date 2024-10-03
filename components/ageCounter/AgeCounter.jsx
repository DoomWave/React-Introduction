import { useState } from "react";
import { Text,TouchableOpacity } from "react-native";

export function AgeCounter() {
    const [age, setAge ]= useState(19)

    function increaseAge(){
     setAge(age + 1)
    }

    console.log("I render", age);
    return (
    <>
        <TouchableOpacity onPress={increaseAge} style={{backgroundColor: "#00A2FF"}}>
          <Text style={{ fontSize: 40, color: "white"}}>Increase age</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 40 }}>I am {age} years old</Text>
    </>
    )
}
