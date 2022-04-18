import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const SOLARIZED = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

  const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
  ];

  const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
  ];

  const BI_FLAG = [
    { colorName: 'Blue', hexCode: '#4700D8' },
    { colorName: 'Purple', hexCode: '#9900F0' },
    { colorName: 'Pink', hexCode: '#F900BF' },
    { colorName: 'Peach', hexCode: '#FF85B3' },
    { colorName: 'Orange', hexCode: '#e66225' },
  ]

  const RANDOM_COLORS = [
    { colorName: 'Isabeline', hexCode: '#F2EFEA' },
    { colorName: 'Outrageous Orange', hexCode: '#FC7753' },
    { colorName: 'Medium Turqouise', hexCode: '#66D7D1' },
    { colorName: 'Independence', hexCode: '#403D58' },
    { colorName: 'Straw', hexCode: '#DBD56E' },
  ]

  const COLOR_PALETTES = [
    { paletteName: 'Solarized', colors: SOLARIZED },
    { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
    { paletteName: 'Rainbow', colors: RAINBOW },
    { paletteName: 'Bi Flag', colors: BI_FLAG},
    { paletteName: 'Random Colours', colors: RANDOM_COLORS}
  ];

const Home = ({navigation}) => {
    return (
           <FlatList
           style={styles.list}
            data={COLOR_PALETTES}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview handlePress={() => {navigation.navigate('colorPalette', item)}} colorPalette={item} />
            )}
            />         
   )
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white',
    }
})

export default Home;