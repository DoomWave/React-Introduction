import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import {ProfileCard} from "./components/ProfileCard/ProfileCard"
import { Alert,Linking,Text } from "react-native";
import {useState} from "react";

export default function App() {
  // Linking.openURL("http://")

  function goToSocialMedia(socialMedia) {
    let url
    switch(socialMedia){
      case "twitter" :
        url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        break;
      case "github":
        url = "https://github.com/DoomWave";
        break;
      case "linkedin":
        url = "https://github.com/DoomWave";
        break;
    }
    Linking.openURL(url);
  }
  return(
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard 
         onPressSocialMediaIcon={goToSocialMedia}
         firstName={"Doom"} 
         lastName={"Wave"} 
         age={30} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
