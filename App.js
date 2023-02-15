import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';   



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Logo from './screens/Logo';
import  Process from './screens/Process' ;
import Login from './screens/Login';
import   Home from './screens/Home' ;
import Viewlist from './screens/Viewlist' ;


export default function App() { 
 

  const Stack =  createNativeStackNavigator()  ;   

  return (
  

     <NavigationContainer>
         <Stack.Navigator initialRouteName= "LogIn" > 

    {/*      
         <Stack.Screen name="Logo" component={Logo}  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />
             */}  

  
      <Stack.Screen name="Login"  component={Login }  options={{    headerStyle: {
      backgroundColor: '#fff'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />
           

           <Stack.Screen name="Home" component={ Home }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />
           

           <Stack.Screen name="Process" component={ Process }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />
  

        <Stack.Screen name="Viewlist" component={ Viewlist }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />

      </Stack.Navigator>

      </NavigationContainer>
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
