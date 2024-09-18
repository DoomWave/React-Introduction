import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./ProfileCard.style";
export function ProfileCard (){
    return <View Style={s.container}>
        <Text>DoomWave</Text>
        <Text>Hi I am React native inter-medium. Lets get the touch</Text>
    </View>;
}