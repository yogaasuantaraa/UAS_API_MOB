import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CardArtikel from '../component/CardArtikel';
export default function Home() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
        <FlatList data={[1,2,3,4,5,6]}
        keyExtractor ={(it,key)=> key.toString()}
            renderItem={({item})=> <CardArtikel/> }
/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
