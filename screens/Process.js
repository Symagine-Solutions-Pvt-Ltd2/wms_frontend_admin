import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View   , TouchableOpacity} from 'react-native';  
import   Dropdown from "../customcomponent/Dropdown.js" ; 


export default function  Process(  {  route  ,  navigation  }) {
  return ( 
    <View style={styles.container}> 
       
      <StatusBar style="auto" />  
         
      <TouchableOpacity 
                 onPress = {  ( ) => { navigation.navigate("Viewlist")}}
      >
            <Text>gyutuu </Text>
           </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
