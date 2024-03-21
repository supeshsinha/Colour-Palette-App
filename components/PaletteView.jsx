import React from 'react'
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'

const PaletteView = ({item, handlePress}) => {
  return (
    <View>
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{item.paletteName}</Text>
            <FlatList 
            style = {styles.container}
                data = {item.COLORS.slice(0,Math.min(5, item.COLORS.length))}
                keyExtractor={(item, ind) => (ind)}
                renderItem={({item}) => (
                    <View style={[{backgroundColor: item.hexCode}, styles.colorbox]}></View>
                )}
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 10
    },

    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginBottom: 8
    },

    colorbox: {
        height: 35,
        width: 35,
        borderRadius: 5,
        margin: 5,
        shadowRadius: 5,
        elevation: 5
    },
})

export default PaletteView