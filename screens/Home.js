import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';   
import Icon from 'react-native-vector-icons/FontAwesome'; 




export default function Home(  {  route  ,  navigation  } ) {
   

  //console.log( "Home")  ; 
  // console.log( route.params.token)  ; 


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
                   onPress = {  ( ) => { navigation.navigate("Process"   ,  {  token : route.params.token  ,   name: "Informal Waste Collector"   ,   screentype :  "iwc"}  )}} 
          >
         
          </TouchableOpacity > 
          <Text   style={styles.t1}   >
          Informal Waste Collector
          </Text>
        </View>  

        < View style={styles.v4} >  
          <TouchableOpacity  style={styles.to1}  
           onPress = {  ( ) => { navigation.navigate("Process"   ,  {     token : route.params.token  ,  name: "Unit Worker"  ,    screentype :  "uw"}  )}} >
           
          </TouchableOpacity> 
          <Text   style={styles.t1} >
          Unit Worker
          </Text>
        </View>


       </View>  


       <View style={styles.v3} >
        
        < View style={styles.v4} >  
          <TouchableOpacity  style={styles.to1}  
            onPress = {  ( ) => { navigation.navigate("Process"   ,  {   token : route.params.token ,    name: "Waste Management Unit"  ,    screentype :  "wmu"}  )}} 
          >
     
          </TouchableOpacity> 
          <Text   style={styles.t1} >
          Waste Management Unit
          </Text>
        </View>  

        < View style={styles.v4} >  
          <TouchableOpacity   style={styles.to1}  
          onPress = {  ( ) => { navigation.navigate("Process"   ,  {    token : route.params.token ,   name: "Buyers’ List" ,     screentype :  "buy"}  )}} >
                
           
           
          </TouchableOpacity> 
          <Text   style={styles.t1} >
            Buyer
          </Text>
        </View>

        </View>      
        </View>     
   




        <View  style={styles.v5} >  
           
           <TouchableOpacity   style={styles.to2} >   
              <Text style={styles.t3}>  Upload Document</Text>  
              <View  style={styles.v6} >
              <Icon  name="upload"   size={27} /> 
              </View> 
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
    backgroundColor : "#fff"  , 
    justifyContent : "flex-end" ,
    alignItems : "flex-start"  ,   

   }   ,  

   v2 : {
       
    flex:  -1 ,
    height : "60%"  , 
    width : "80%" , 
    backgroundColor : "red"  , 
    justifyContent  :  "space-evenly"  ,   
     
   }   ,  


    v3 :  {
      
            
    flex:  -1 ,
    height : "50%"  , 
    width : "100%" , 
    backgroundColor : "#fff"  , 
    justifyContent  :  "space-between"  ,  
    flexDirection  :  "row"  ,  
    alignItems : "center"

    }  , 

    v4 : {
       
      flex:  -1 ,
      height : "80%"  , 
      width : "45%" , 
      backgroundColor : "red"  , 
      justifyContent  :  "space-evenly"  ,  
      backgroundColor : "#fff"  , 
      alignItems  : "center"  , 

    }   ,   


    v5 :  {

          
    flex:  -1 ,
    height : "20%"  , 
    width : "80%" , 
    backgroundColor : "#fff"  , 
    justifyContent  :  "center"  , 
    alignItems : "center" , 


    }  ,  
    
    
      v6 : {

        flex:  -1 ,
        height : "100%"  , 
        width : "20%" , 

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
    backgroundColor : "#fff" 

  

     }  ,   

     t3 : {

       width : "80%"  , 
       height : "100%"  ,  
       textAlign : "center"  , 
       textAlignVertical : "center"  , 
       justifyContent : "center" , 

     }  , 

     to1  : {
     

      flex:  -1 ,
      height : "80%"  , 
      width : "100%" ,  
      backgroundColor  : "#FAEBEF"  , 
      borderRadius : 15 , 


     }  , 

      to2 : {

        flex:  -1 ,
      height : "23%"  , 
      width : "60%" ,  
      backgroundColor  : "#333D79"  , 
      flexDirection : "row"  , 
      borderRadius :  5 , 

      }
});
