import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { s } from './components/ProfileCard/ProfileCard.style';
import { useState } from "react";

export default function App() {
  const [movie, setMovie] = useState("Star Wars");

  function updateMovie(){
    setMovie("Titanic");
  }
  return(
    <SafeAreaProvider>
     <SafeAreaView style={s.container}>

      <TouchableOpacity onPress={updateMovie}>
        <Text style={{FontSize: 40}}>{movie}</Text>
      </TouchableOpacity>

     </SafeAreaView>
    </SafeAreaProvider>
  )
}
