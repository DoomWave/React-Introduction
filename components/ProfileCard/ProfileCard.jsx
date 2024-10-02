import { View, Text, Image, Icons, TouchableOpacity } from "react-native";
import { s } from "./ProfileCard.style";
import {FontAwesome} from '@expo/vector-icons'
export function ProfileCard (){
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
          <Text style={s.name}>DoomWave</Text>
           <Text>
             Hi I am React native inter-medium. Lets get the touch, and soon
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