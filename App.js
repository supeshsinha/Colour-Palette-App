import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewPaletteModal from './screens/AddNewPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();


const MainStackScreen = () => {

  return (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="ColorPalette" component={ColorPalette} options={({route}) => ({title: route.params.paletteName})} />
    </MainStack.Navigator>
  )
}

const App = () => {


  return (
    <NavigationContainer>
      <RootStack.Navigator mode = "modal">
        <RootStack.Screen name="MainStack" component={MainStackScreen} options={{headerShown: false}}/>
        <RootStack.Screen name='AddNewPalette' component={AddNewPaletteModal} options={{title: "Add New Palette"}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}


export default App;