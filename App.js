import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [palavra, setPalavra] = useState([
    "raquete",
    "segurança",
    "sol"
  ]);

  const [palavraSecreta, setPalavraSecreta] = useState('');
  const [palavraOculta, setPalavraOculta] = useState('');


  function verificaPalavra() {

  };

  function montaPalavra() {

    setPalavraSecreta(palavra[Math.floor(Math.random() * palavra.length)])

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, color: '#4169E1' }}>Jogo da Forca</Text>
      <Text>
        {montaPalavra()}
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
