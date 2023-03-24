import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View   , TextInput , KeyboardAvoidingView  , ScrollView  , Dimensions  } from 'react-native';   
import   React  , { useState , useEffect    }   from 'react';   
import { useHeaderHeight } from '@react-navigation/elements';



import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
      

const WindowWidth  = Dimensions.get("window").width ;
const WindowHeight = Dimensions.get("window").height ;  



  export default function Hm(  {  route , navigation  } ) {     

  const sh  =   Dimensions.get("screen").height; 
  console.log( sh) ;
  const headerHeight = useHeaderHeight();
  const  wh =    Dimensions.get("window").height - headerHeight  ;
 console.log(  wh)  ; 
  
  console.log( headerHeight ) ; 
    return(  

  // <KeyboardAwareScrollView    ={styles.container}   extraScrollHeight ={  130  } enableOnAndroid = { true}>  
    <ScrollView  contentContainerStyle = {  styles.v1 }>
      
<View   style={styles.v2} >

<Text>bhgh nhzjhgj </Text>
<Text>bhgh nhzjhgj </Text>
 </View>
  <View  style={styles.v3}  >


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />     


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />     


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />    


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  



<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />     


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />     


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />    


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />     
 


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Wjkjkjhjka bza "  />  

</View> 
</ScrollView>
  // </KeyboardAwareScrollView > 
  


    ) ; 
  }




const styles = StyleSheet.create({   
    
        
    container: {
        
       flex :  1 ,  
       backgroundColor: 'green',
   
    }, 

     v1 : {
          
        flex : 1 , 
         backgroundColor: 'purple', 
     }  , 

     v2 : {

    
         flex : 2  , 
        backgroundColor: 'grey',
  
     } , 

     v3 : {

         flex : 1 ,  
        backgroundColor: 'red',  

     }
  });
  