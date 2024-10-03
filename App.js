import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import {ProfileCard} from "./components/ProfileCard/ProfileCard"
import { Alert } from "react-native";

export default function App() {
  function hello(name){
    Alert.alert("Hello "+name)
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
