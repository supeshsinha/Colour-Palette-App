import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PaletteView from '../components/PaletteView';


const Home = ({navigation}) => {

  const [pallets, setPallets] = useState([]);

  const fetchColors = useCallback(async() => {
    const res = await fetch("https://color-palette-api.kadikraman.now.sh/palettes");

    if(res.ok){
      const fcolours = await res.json();
      setPallets(fcolours);
    }
  }, [])

  useEffect(() => {fetchColors()}, []);

  return (
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

  )
}


export default Home