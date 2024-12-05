import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

 const imageArray=[
  "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1675629118861-dc8aa2acea74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"
 ]

export default function ImageGallery(){
    return(
        <ThemedView style={{flex:1}} >
            <ThemedText type="title"> Image Gallery</ThemedText>
        </ThemedView>

    )
}