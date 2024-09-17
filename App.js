import { StyleSheet, Text, View, Image,  } from 'react-native';
// import { Profile } from './components/Profile/Profile';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { style } from './App.Style';
export default function App() {
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={style.title}>Hi</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
