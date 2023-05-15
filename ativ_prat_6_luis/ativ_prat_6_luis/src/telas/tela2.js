import React from 'react';
import { View, Text, Button } from 'react-native';

function tela2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>tela 2</Text>
        <Button title="Ir para a próxima tela" onPress={() => navigation.navigate('tela3')} />
        <Button title="Ir para a tela anterior" onPress={() => navigation.navigate('tela1')} />
        <Button title="Ir para a tela principal" onPress={() => navigation.navigate('telaPrincipal')} />
    </View>
  );
}

export default tela2;
