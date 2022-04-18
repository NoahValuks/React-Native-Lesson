import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({colorName, colorHex}) => {
   const boxColor = {
       backgroundColor: colorHex,
   }

   const textColor = {
       color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
   }
   
    return (
        <View style={[styles.boxes, boxColor]}>
      <Text style={[styles.text, textColor]}>{colorName} {colorHex}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    boxes: {
        marginVertical: 4,
        width: '100%',
        padding: 7,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1.5,
      },
        text: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
})

export default ColorBox;