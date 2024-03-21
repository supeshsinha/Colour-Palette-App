import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ColorBox = ({colorName, hexCode}) => {

  const textcolor = {color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? "black" : "white"} 

  return (
    <View style = {[styles.buttons, {backgroundColor: hexCode}]}>
        <Text style= {[styles.text, textcolor]}>{`${colorName} ${hexCode}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttons: {
        padding: 10,
        margin: 5,
        alignItems: "center",
        borderRadius: 3,
        shadowRadius: 5,
        elevation: 5
      },
    text: {
        fontWeight: "bold",
    }
})

export default ColorBox