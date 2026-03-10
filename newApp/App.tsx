import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source = {require('./assets/favicon.png')}
        source = {{uri:'https://www.pngall.com/wp-content/uploads/13/Minecraft-Logo-PNG-Pic.png'}}
        style={styles.logo}
      /> */}
      <Text style={[{color: '#ff6346'},{fontSize: 30},{marginBottom:10},{fontWeight:700}]}>🎉​Bem-Vindos à aula!🎉​</Text>
      <Text style={[styles.card1,styles.cardGeral]}>📝Vamos aprender React Native</Text>
      <Text style={[styles.card2,styles.cardGeral]}>🚀​Inline styles são faceis de entender</Text>
      <Text style={[styles.card3,styles.cardGeral]}>🌈🎨​​Alterar cores e tamanho é divertido!</Text>
      <Text style={[styles.card4,styles.cardGeral]}>✨​Desafio: Tente recriar esse layout</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#147bd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
    cardGeral:{
      marginBottom: 20,
      padding: 10,
      borderRadius: 10
    },
  card1:{
    color: '#4682b4',
    backgroundColor: '#e6f2ff',
    fontSize:20,
    padding: 5,
  },
  card2:{
    color: '#37905e',
    backgroundColor: '#d4f5e1',
    fontSize: 15,
    padding: 5
  },
  card3:{
    color: '#ffac5b',
    backgroundColor: '#fff5e6',
    padding: 10,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  card4:{
    color: '#a746aa',
    backgroundColor: '#f3e6ff',
    padding: 10,
    fontSize: 15
  },
  logo:{
    width: 100,
    height: 100
  }
});
