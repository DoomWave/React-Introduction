import { StyleSheet, Text, View, Image,  } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
export default function App() {
  return(
    <SafeAreaProvider>
     <SafeAreaView style={{ flex: 1}}>
      <ProfileCard/>
     </SafeAreaView>
    </SafeAreaProvider>
  )
}
