import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import PalettePreview from '../components/PalettePreview';


const Home = ({ navigation, route }) => {

    const newPalette = route.params ? route.params.newPalette : null;
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

    useEffect(() => {
        if (newPalette) {
          setColorPalettes(current => [newPalette, ...current]);
        }
      }, [newPalette]);

    return (
           <FlatList
           style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <PalettePreview handlePress={() => {navigation.navigate('ColorPalette', item)}} colorPalette={item} />
            )} refreshing={isRefreshing} onRefresh={handleRefresh}
            ListHeaderComponent={
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('ColorPaletteModal')}}>
                    <Text style={styles.buttonText}>Add a Color Scheme</Text>
                </TouchableOpacity>
            }
            />         
   )
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        borderColor: '#53777A',
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#7FC7AF',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#53777A',
        fontWeight: 'bold',
        paddingBottom: 6,
        fontSize: 35,
        textAlign: 'center'
    }
})

export default Home;