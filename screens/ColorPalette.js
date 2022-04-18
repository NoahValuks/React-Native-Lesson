import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route}) => {
    return(
            <View style={styles.container}>
                <FlatList data={route.params.colors} renderItem={({item}) => <ColorBox colorName={item.colorName} colorHex={item.hexCode}/>} keyExtractor={item => item.colorName}
                ListHeaderComponent={<Text style={styles.mainText}>{route.params.paletteName}</Text>}/>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 18,
      paddingTop: 40,
      backgroundColor: 'white',
    },
    mainText: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
  });

export default ColorPalette;