import React from 'react';
import {Text, TouchableOpacity, StyleSheet, FlatList, View } from 'react-native';

const PalettePreview = ({handlePress, colorPalette}) => {

    return(
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View style={[styles.color, { backgroundColor: item.hexCode }]} />
                )}
                horizontal={true}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    color: {
        margin: 2,
        width: 50,
        height: 50,
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 1.5,
    }
})

export default PalettePreview;