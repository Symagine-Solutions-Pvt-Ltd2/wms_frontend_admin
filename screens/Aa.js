import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View   , TextInput , KeyboardAvoidingView  , ScrollView  , Dimensions  } from 'react-native';   
import   React  , { useState , useEffect  , useRef,  useCallback   }   from 'react';   
import { useHeaderHeight } from '@react-navigation/elements';

const WindowWidth  = Dimensions.get("window").width ; 
const WindowHeight = Dimensions.get("window").height ;  



  export default function Aa(  {  route , navigation  } ) { 
     
    /*    const [ dimensions , setDimensions ] = useState({width:0, height:0});
        const [size, onLayout] = useComponentSize();
       
    
                const onLayout=(event)=> {  
                 
                        event.persist() ;
                       // const {x, y, height, width} = event.nativeEvent.layout;
                        console.log( event.nativeEvent.layout.height) ; 
                        console.log(  event.nativeEvent.layout.width ) ; 
                         
                       
                      }    
            
         
 */

        
       

     return( 
   
  // <KeyboardAvoidingView  style= { styles.container}  
   //onLayout={ onLayout
        //(event) => { 
        //event.persist() ; 
       // const {x, y, width, height} = event.nativeEvent.layout;
        //console.log(  event.nativeEvent.layout  ) ; 
        //setDimensions({width:width, height:height}); } 
// >
   < ScrollView  contentContainerStyle = { styles.v1}  >
    
    
{/* 
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

    

  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />    


   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Wjkjkjhjka bza "  />    

        

  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />    


   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Waste Management Unit"  />  


   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
        placeholder="Code of Wjkjkjhjka bza "  />   */}   
        <View style={styles.v5} >
        <Text>jhcks jahxjaghjx </Text>
         </View> 
         <View  style={styles.v2} >
          
        <Text>jhcks jahxjaghjx </Text>
         </View>
  </ScrollView>
 //  </KeyboardAvoidingView>
   

     )  ; 

  }  

  
const styles = StyleSheet.create({   

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center', 

    },  

    v1 : {
        backgroundColor : "red"  ,  
        flex : 1 ,  
       
    }  , 
    
    v2 : {
        
         flex : 1 , 
        backgroundColor : "grey"  , 
    }  , 

    v3 : {

         flex : 2 , 
        backgroundColor : "purple"  , 

    }  , 

    v4 : {
        flex : 3,
        
        backgroundColor : "green"  , 

    }  ,  

    v5 : {

        flex : 1 ,
        backgroundColor : "#fff" , 

    }
  , 
    t1 : {
         
        position : "absolute" ,

    }
    
  });