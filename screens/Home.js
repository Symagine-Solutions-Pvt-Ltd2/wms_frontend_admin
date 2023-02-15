import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';  


export default function Home(  {  route  ,  navigation  } ) {
  return (
    <View style={styles.container}> 
       <StatusBar style="auto" />  

       <View style={styles.v1}>   

        <Text  style={styles.t2} >Registrations</Text>
       </View>

         

       <View style={styles.v2}>
       
       <View style={styles.v3} >
        
        < View style={styles.v4}   >  
          <TouchableOpacity   style={styles.to1}   
                   onPress = {  ( ) => { navigation.navigate("Process")}} 
          >
          <Text>jagjgxha</Text>
          </TouchableOpacity > 
          <Text   style={styles.t1}   >
          Informal Waste Collector
          </Text>
        </View>  

        < View style={styles.v4} >  
          <TouchableOpacity  style={styles.to1} >
           
          </TouchableOpacity> 
          <Text   style={styles.t1} >
          Unit Worker
          </Text>
        </View>


       </View>  


       <View style={styles.v3} >
        
        < View style={styles.v4} >  
          <TouchableOpacity  style={styles.to1} >
           
          </TouchableOpacity> 
          <Text   style={styles.t1} >
          Waste Management Unit
          </Text>
        </View>  

        < View style={styles.v4} >  
          <TouchableOpacity   style={styles.to1} >
           
          </TouchableOpacity> 
          <Text   style={styles.t1} >
            Buyer
          </Text>
        </View>

        </View>      
        </View>     
   




        <View  style={styles.v5} >  
           
           <TouchableOpacity   style={styles.to2} >   
              <Text>  Upload Document</Text>  
            
              </TouchableOpacity>
     
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems  : "center"  , 
  },  
   
   v1 : {  

    flex:  -1 ,
    height : "10%"  , 
    width : "80%" , 
    backgroundColor : "red"  , 
    justifyContent : "flex-end" ,
    alignItems : "flex-start"  ,   

   }   ,  

   v2 : {
       
    flex:  -1 ,
    height : "60%"  , 
    width : "80%" , 
    backgroundColor : "pink"  , 
    justifyContent  :  "space-evenly"  ,   
     
   }   ,  


    v3 :  {
      
            
    flex:  -1 ,
    height : "40%"  , 
    width : "100%" , 
    backgroundColor : "red"  , 
    justifyContent  :  "space-evenly"  ,  
    flexDirection  :  "row"  ,  
    alignItems : "center"

    }  , 

    v4 : {
       
      flex:  -1 ,
      height : "80%"  , 
      width : "40%" , 
      backgroundColor : "red"  , 
      justifyContent  :  "space-evenly"  ,  
      backgroundColor : "pink"  , 
      alignItems  : "center"  , 

    }   ,   


    v5 :  {

          
    flex:  -1 ,
    height : "20%"  , 
    width : "80%" , 
    backgroundColor : "red"  , 
    justifyContent  :  "space-evenly"  , 


    }  ,  


     t1 :{

     fontWeight: '400' ,
     fontStyle: 'normal'  , 
    fontSize: 12 , 
     lineHeight: 34 ,
     letterSpacing: -0.408 , 
     textAlign : "left"
  }  , 
    
        

     t2 : {
           

    
     fontWeight: '500' ,
     fontStyle: 'normal'  , 
      fontSize: 30 , 
     lineHeight: 34 ,
     letterSpacing: -0.408 , 
    backgroundColor : "pink" 

  

     }  ,  

     to1  : {
     

      flex:  -1 ,
      height : "80%"  , 
      width : "100%" ,  
      backgroundColor  : "blue"  , 


     }  , 

      to2 : {

        flex:  -1 ,
      height : "20%"  , 
      width : "60%" ,  
      backgroundColor  : "blue"  , 


      }
});
