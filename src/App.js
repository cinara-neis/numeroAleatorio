/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  function handleNumber() {
    const newNumber = Math.floor(Math.random() * 100);

    setNumber(number + newNumber);
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{number}</Text>
      <TouchableOpacity onPress={handleNumber} style={style.botao}>
        <Text> Gerar Numero</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#ffffff',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
