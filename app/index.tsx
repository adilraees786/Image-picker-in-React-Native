
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { FlatList, Image } from "react-native";

const imageArray = [
    "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1474821792123-fa67193d18a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWlufGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1675629118861-dc8aa2acea74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"
]

export default function ImageGallery() {


    const [images, setimages] = useState(imageArray);

    return (
        <ThemedView style={{ flex: 1 }} >
            {/* <ThemedText type="title"> Image Gallery</ThemedText> */}
        <FlatList
        data={imageArray}
        keyExtractor={(data) => data}
        renderItem={({item, index}) => {
            return (
         <Image
         source={{uri: item}}
         style={{height: 230, marginVertical: 10,}}
         
    
         />
            );
        }}
        />
        </ThemedView>

    );
}

