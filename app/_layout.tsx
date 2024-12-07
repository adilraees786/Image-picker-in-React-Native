import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='index'>
        
        <Stack.Screen name="index" 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
  );
}



// cloudinary

// const uploadImageToCloudinary = async (obj: any) => {
//   const cloudName = "dxc9gtsl2";
//   const apiKey = "425621276711985";
//   const apiSecret = "-BBUPHUpD0ylxw0nF1Jwfuw52as";

//   const timestamp = Math.floor(Date.now() / 1000);
//   const signature = generateSignature(timestamp, apiSecret);

//   const formData = new FormData();
//   console.log("obj=>", obj);

//   formData.append("file", {
//     uri: obj.uri,
//     name: obj.fileName,
//     type: obj.mimeType,
//   });

//   formData.append("api_key", apiKey);
//   formData.append("timestamp", timestamp.toString());
//   formData.append("signature", await signature);

//   console.log("formData=>", formData);

//   const response = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   const data = await response.json();

//   if (response.ok) {
//     console.log("data=>", data.secure_url);
//     return data.secure_url;
//   } else {
//     console.log("error=>", data.error.message);
//     return data.error.message;
//   }
// };
// async function generateSignature(timestamp: any, apiSecret: any) {
//   const signatureString = `timestamp=${timestamp}${apiSecret}`;
//   const digest = await Crypto.digestStringAsync(
//     Crypto.CryptoDigestAlgorithm.SHA256,
//     signatureString
//   );

//   return digest;
// }