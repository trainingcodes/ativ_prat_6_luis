import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tela1 from './src/telas/tela1';
import tela2 from './src/telas/tela2';
import tela3 from './src/telas/tela3';
import tela4 from './src/telas/tela4';
import tela5 from './src/telas/tela5';
import tela6 from './src/telas/tela6';
import tela7 from './src/telas/tela7';
import telaPrincipal from './src/telas/telaPrincipal';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="telaPrincipal" component={telaPrincipal} />
        <Stack.Screen name="tela1" component={tela1} />
        <Stack.Screen name="tela2" component={tela2} />
        <Stack.Screen name="tela3" component={tela3} />
        <Stack.Screen name="tela4" component={tela4} />
        <Stack.Screen name="tela5" component={tela5} />
        <Stack.Screen name="tela6" component={tela6} />
        <Stack.Screen name="tela7" component={tela7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
