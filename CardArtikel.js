import { StyleSheet, Text, View } from 'react-native';
import Divider from 'react-native-divider';
import { useEffect } from 'react';
export default function CardArtikel() {
  useEffect(()=> {
    //Call API Method GET
    fetch('https://gorest.co.in/public/v2/posts')
    .then(response => response.json())
    .then(json=> console.log(json))

    //Call API Method POST
    fetch('https://gorest.co.in/public/v2/posts', {
      method: 'POST',
      body: '', // The data
      headers: {
        'Content-type': '' // The type of data you're sending
      }
    });
  }, []); 
  return (
    <View style={styles.container}>
      <Divider/>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <Divider/>
      <Text style={styles.body}>Open up App.js to start working on your app!</Text>
    </View>
  );
}
   

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginBottom: 10,
    backgroundColor: '#fff',

  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24.2,
    color: '#000'

  },
  body: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 15.73,
    color: '#000'

  },
});
