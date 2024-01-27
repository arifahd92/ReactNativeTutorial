import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const logoImg= require("./assets/icon.png")
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"red", justifyContent:"center", alignItems:"center"}}>
      <View>
    
        <Text style={{justifyContent:"center", alignItems:"center"}}>im arif phone</Text>
   
      <Image source={logoImg} style={{height:300, width:300}}/>
      </View>
   
    </View>
  ); 
}


