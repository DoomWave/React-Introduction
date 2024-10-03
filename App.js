import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import {ProfileCard} from "./components/ProfileCard/ProfileCard"
import { Alert,Linking,Platform,Text } from "react-native";
import {useState} from "react";

export default function App() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {Platform.OS === "android" &&  <Text>Hi on Android</Text>}
        {Platform.OS === "ios" && <Text>Hi on IOS</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
