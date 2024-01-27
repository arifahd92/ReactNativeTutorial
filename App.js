import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , ImageBackground} from 'react-native';
const imageLink="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
const logoImg= require("./assets/icon.png")
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"red", justifyContent:"center", alignItems:"center"}}>

    
        <Text style={{justifyContent:"center", alignItems:"center"}}>im arif phone</Text>
   
      {/* <Image source={logoImg} style={{height:300, width:300}}/> */}
    
   {/* i m going to use network image for network images inside source uri object will be used and adding
    style and inside style height width is necessory */}
      

      <ImageBackground source={{uri:imageLink}} style={{height:500, width:400}}>
        <Text>top on back ground image ok888888888888 llllllllllllllllllllllllllllllllllllllllllllllllllllll</Text>
        <Image source={{uri:imageLink}} style={{height:300, width:300, marginTop:60}}/>
      </ImageBackground>
    </View>
  ); 
}


