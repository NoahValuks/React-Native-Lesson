import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import PalettePreview from '../components/PalettePreview';


const Home = ({navigation}) => {

    const [colorPalettes, setColorPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleFetchColorPalettes = useCallback(async () => {
        const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
        if (response.ok) {
            const palettes = await response.json();
            setColorPalettes(palettes);
        }
    }, []);

    useEffect(() => {
        handleFetchColorPalettes()
    }, [])

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await handleFetchColorPalettes;
        setTimeout(() => {
            setIsRefreshing(false)
        }, 10000)
        // setIsRefreshing(false);
    }, [])

    return (
           <FlatList
           style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <PalettePreview handlePress={() => {navigation.navigate('Color Palette', item)}} colorPalette={item} />
            )} refreshing={isRefreshing} onRefresh={handleRefresh}
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