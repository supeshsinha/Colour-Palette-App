import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PaletteView from '../components/PaletteView';
import style from '../css/common';


const Home = ({navigation, route}) => {

  console.log("hihi");

  const newPalette = route.params? route.params: null;
  console.log(newPalette);

  const [pallets, setPallets] = useState([]);

  const fetchColors = useCallback(async() => {
    const res = await fetch("https://color-palette-api.kadikraman.now.sh/palettes");

    if(res.ok){
      let fcolours = await res.json(); 
      setPallets(fcolours);
    }
  }, [])
  useEffect(() => {
    fetchColors();
    
  }, []);

  useEffect(() => {
    if(newPalette){
      setPallets([newPalette, ...pallets]);
    }
  }, [newPalette]);

  return (
    <>
      <TouchableOpacity onPress={() => {navigation.navigate("AddNewPalette")}}>
        <View><Text style={style.button}>Add New Palette</Text></View>
      </TouchableOpacity>
      <FlatList
        data = {pallets}
        keyExtractor={(item) => (item.paletteName)}
        renderItem={({item}) => (
          <PaletteView 
            item={item}
            handlePress={() => {navigation.navigate("ColorPalette", item)}}
            />
            )} 
            />
    </>

  )
}


export default Home