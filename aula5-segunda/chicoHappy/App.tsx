import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import chicoHappy from './assets/chico-happy.jpg'
import chicoSad from './assets/chico-sad.jpg'


export default function App() {
  const [isHappy, setEmotion] = useState(false); //Usa o gerenciamento de estado
  const [contador, setContador] = useState(0);
  const bgColor = isHappy ? '#ff9500' : '#00bbff'

  function handleMood(){ //COmo altera algo, normalmente tem o handle
    console.log(isHappy,contador)
    setEmotion (emotion => !emotion) //Muda o valor do componente
    setContador(cont => cont+1)
  }

  function reset(){
    setContador(cont => 0)
  }

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      {/*<Text>Open up App.tsx to start working on your app!</Text>*/}

      
      <View style={styles.areaImagem}>
        <TouchableOpacity onPress={handleMood}>
        <Image
          source={isHappy ? chicoHappy : chicoSad}
          style={isHappy ? styles.imageHappy : styles.imageSad}
        />
        </TouchableOpacity>
      </View>

      <Text style={styles.std}>{isHappy ? "Feliz" : "Triste"}</Text>
      <Text style={styles.std}>Cliques:{contador}</Text>
      
      {contador > 10 ? <Text style={styles.std}>
        CHEGA DE CLICAR!</Text>: null}
      
      {isHappy? <Text>Que bom que está feliz!</Text>:null}

      <Button title={isHappy ? "Ficar Triste" : "Ficar Feliz"} onPress={handleMood}/>
      <Text>             </Text>
      <Button title="Resetar" onPress={reset}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  std:{
    fontSize: 25,
    marginTop: 10
  },
  imageHappy:{
    width:300,
    height:300,
    borderWidth: 10,
    borderColor: 'green'
  },
  imageSad:{
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: 'red'

  },
  areaImagem:{
    width:400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  }
  }

);
