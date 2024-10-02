import { StyleSheet, Text, View, Image,  } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
export default function App() {
  return(
    <SafeAreaProvider>
     <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <ProfileCard firstName={"Doom"} lastName={"Wave"}  age={19}>
        <View style={{ height: 30, width: 30, backgroundColor: "red"}}/>
      </ProfileCard>
     </SafeAreaView>
    </SafeAreaProvider>
  )
}
