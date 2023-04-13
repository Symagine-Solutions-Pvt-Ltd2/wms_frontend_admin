import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';   



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Logo from './screens/Logo'; 
import Hm from './screens/Hm'  ; 
import  Process from './screens/Process' ;
import Login from './screens/Login';
import   Home from './screens/Home' ;
import Viewlist from './screens/Viewlist' ;
import Aa from  "./screens/Aa" ;
import About from  "./screens/About" ;
import UserRequest from './screens/UserRequest';


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



         
       <Stack.Screen name="Aa"  component={  Aa }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />
    

        
      <Stack.Screen name="Hm"  component={  Hm }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />


           <Stack.Screen name="Home" component={ Home }  options={{    headerStyle: {
      backgroundColor: '#333D79'    } ,   headerBackVisible : false ,     headerTintColor:  '#333D79'   , headerShadowVisible : false  }}   
       />
            

            <Stack.Screen name="About" component={ About }  options={{    headerStyle: {
      backgroundColor: '#333D79'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />  


        
        <Stack.Screen name="Sign Up Request" component={ UserRequest }  options={{    headerStyle: {
      backgroundColor: '#333D79'    } ,     headerTintColor:  '#fff'   , headerShadowVisible : false  }}   
       />
            

           <Stack.Screen name="Process" component={ Process }  options={  ({ route }) => ({   headerTitle : route.params.name   , 
           headerStyle: {
      backgroundColor: '#fff'       }   
               })}   
       />
  

        <Stack.Screen name="Viewlist" component={ Viewlist }  options={ ({ route }) => ({   headerTitle : route.params.name   , 
           headerStyle: {
      backgroundColor: '#fff'   }   
               })}   
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
