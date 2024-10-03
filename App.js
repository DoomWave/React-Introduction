import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import {ProfileCard} from "./components/ProfileCard/ProfileCard"
import { Alert } from "react-native";
import {useState} from "react";
import { Text } from "react-native";

export default function App() {
  const [countClick, setCountClick] = useState(0)
  function hello(name){
    Alert.alert("Hello "+ name);
    setCountClick(countClick + 1)
  }
  return(
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard 
         onPressTitle={hello} 
         firstName={"Doom"} 
         lastName={"Wave"} 
         age={30} 
        />
        <Text>You clicked {countClick} times on the title</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
