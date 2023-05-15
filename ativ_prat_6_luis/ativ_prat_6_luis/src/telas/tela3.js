import React from 'react';
import { View, Text, Button } from 'react-native';

function tela3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>tela 3</Text>
        <Button title="Ir para a próxima tela" onPress={() => navigation.navigate('tela4')} />
        <Button title="Ir para a tela anterior" onPress={() => navigation.navigate('tela2')} />
        <Button title="Ir para a tela principal" onPress={() => navigation.navigate('telaPrincipal')} />
    </View>
  );
}

export default tela3;
