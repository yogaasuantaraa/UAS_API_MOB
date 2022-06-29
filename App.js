import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
export default function App() {
  return (
    // <SafeAreaView style={{flex : 1}}>
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Home/>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
