import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ColorBox from '../components/ColorBox';



const ColorPalette = ({route}) => {
    //console.log("route.params");
    const colors = route.params.colors;
  return (
    <View style = {styles.container}>
    <Text style = {styles.header}>{route.params.paletteName}</Text>
    {/* <ColorBox colorName="Cyan" hexCode={"#2aa198"}/> */}
    <FlatList
      data={colors}
      keyExtractor={(item, index) => (index)}
      renderItem={(data) => (<ColorBox colorName={data.item.colorName} hexCode={data.item.hexCode}/>)}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    header:{
      margin: 15,
      fontSize: 18,
      fontWeight: "bold"
    }
  })
  

export default ColorPalette