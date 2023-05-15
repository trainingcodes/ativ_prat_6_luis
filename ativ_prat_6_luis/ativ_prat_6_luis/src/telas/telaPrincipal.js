import React from 'react';
import { View, Text, Button } from 'react-native';

function telaPrincipal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Principal</Text>
      <Button title="tela1" onPress={() => navigation.navigate('tela1')} />
      <Button title="tela2" onPress={() => navigation.navigate('tela2')} />
      <Button title="tela3" onPress={() => navigation.navigate('tela3')} />
      <Button title="tela4" onPress={() => navigation.navigate('tela4')} />
      <Button title="tela5" onPress={() => navigation.navigate('tela5')} />
      <Button title="tela6" onPress={() => navigation.navigate('tela6')} />
      <Button title="tela7" onPress={() => navigation.navigate('tela7')} />
    </View>
  );
}

export default telaPrincipal;
