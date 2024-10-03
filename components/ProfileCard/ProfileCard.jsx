import { View, Text, Image, Icons, TouchableOpacity } from "react-native";
import { s } from "./ProfileCard.style";
import {FontAwesome} from '@expo/vector-icons'
export function ProfileCard 
    ({
     firstName, 
     lastName, 
     age, 
     isOpenToWork, 
     onPressTitle
    }) {
function onPressTitle_(){
    onPressTitle(firstName+lastName)
}
    return (
    <View Style={s.container}>
        <View style={s.header}>
         <View>
          <Image 
          style={s.avatar} 
          source={{ uri: 'https://i.pravatar.cc/300'}}
          />
         </View>
         <View style={s.texts}>
            <TouchableOpacity onPress={onPressTitle_}>
          <Text style={s.name}>
            {firstName}
            {lastName}
            </Text>
            </TouchableOpacity>
           <Text>
             Hi I am React native inter-medium, I am {age} years old, Lets get the 
             touch, and soon.
           </Text>

            <Text style={{backgroundColor: isOpenToWork ? "green": 
            "red", color: "white"}}>
            {isOpenToWork ? "I am open to work" : "Not looking for a job"}
            </Text>

         </View>
        </View>
        <View style={s.social}>
            <TouchableOpacity style={s.socialBtn}>
            <FontAwesome name="twitter" size={24} color="#1DA1F2"/>
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn}>
            <FontAwesome name="linkedin-square" size={24} color="#0A66C2"/>
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn}>
            <FontAwesome name="github" size={24} color="#333"/>
            </TouchableOpacity>
        </View>
    </View>
    )
}