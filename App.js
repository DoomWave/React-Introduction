import { StyleSheet, Text, View, Image,  } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { AgeCounter } from './components/ageCounter/AgeCounter';
export default function App() {
  return(
    <SafeAreaProvider>
     <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <AgeCounter/>
      {/* <ProfileCard 
       firstName={"Doom"} 
       lastName={"Wave"} 
       age={19}
       isOpenToWork={true}
      /> */}
     </SafeAreaView>
    </SafeAreaProvider>
  )
}
