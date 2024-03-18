import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ColorBox = ({colorName, hexCode}) => {
  return (
    <View style = {[styles.buttons, {backgroundColor: hexCode}]}>
        <Text style= {styles.text}>{`${colorName} ${hexCode}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttons: {
        padding: 10,
        margin: 5,
        alignItems: "center",
        borderRadius: 3
      },
    text: {
        fontWeight: "bold",
        color: "white"
    }
})

export default ColorBox