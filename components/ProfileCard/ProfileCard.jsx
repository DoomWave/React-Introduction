import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./ProfileCard.style";
export function ProfileCard (){
    return (
    <View Style={s.container}>
        <View style={s.header}>
         <View>
          <Image style={s.avatar} source={{ uri: 'https://i.pravatar.cc/300'}}/>
         </View>
         <View style={s.texts}>
          <Text style={s.name}>DoomWave</Text>
          <Text>Hi I am React native inter-medium. Lets get the touch, and soon</Text>
         </View>
        </View>
        <View style={s.social}>

        </View>
    </View>
    )
}