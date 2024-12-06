
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';

const imageArray = [
    "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1474821792123-fa67193d18a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWlufGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1675629118861-dc8aa2acea74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"
]

export default function ImageGallery() {


    const [images, setImages] = useState(imageArray);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImages([result.assets[0].uri, ...images]);

        }
    };

    const pickImagefromcamera = async () => {

        const permission =  await ImagePicker.requestCameraPermissionsAsync();
        if (permission.granted){

            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
    
            console.log(result);
    
            if (!result.canceled) {
                setImages([result.assets[0].uri, ...images]);
    
            }
        }
        // No permissions request is necessary for launching the image library
        
    };

    return (
        <ThemedView style={{ flex: 1 }} >
            {/* <ThemedText type="title"> Image Gallery</ThemedText> */}
            <ThemedView style={styles.iconsView}>
                <Entypo style={styles.icons}
                    onPress={pickImage}
                    name="images" size={24} color="white" />
                <Entypo style={styles.icons}
onPress={pickImagefromcamera}
                    name="camera" size={24} color="white" />
            </ThemedView>


            <FlatList
                data={images}
                keyExtractor={(data) => data}
                renderItem={({ item, index }) => {
                    return (
                        <Image
                            source={{ uri: item }}
                            style={styles.img}


                        />
                    );
                }}
            />
        </ThemedView>

    );
}


const styles = StyleSheet.create({
    iconsView: {
        padding: 20,
        backgroundColor: "transparent",
        position: "absolute",
        right: -18,
        zIndex: 12,
        gap: 20,
        flexDirection: "column",
    },
    icons: {
        backgroundColor: "#e4eaef",
        padding: 12,
        borderRadius: 125,
    },
    img: {
        height: 230,
        marginVertical: 10,
    }

});