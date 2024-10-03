import { Text,TouchableOpacity } from "react-native";

export function AgeCounter() {
    let age = 19
    function increaseAge(){
        age++;
        console.log(age);
    }

    return (
    <>
        <TouchableOpacity onPress={increaseAge} style={{backgroundColor: "#00A2FF"}}>
          <Text style={{ fontSize: 40, color: "white"}}>Increase age</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 40 }}>I am {age} years old</Text>
    </>
    )
}
