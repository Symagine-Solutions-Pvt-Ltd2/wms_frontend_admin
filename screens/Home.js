
import { StyleSheet, Text, TouchableOpacity, View   , Image  , StatusBar  , Modal  , Dimensions  , BackHandler  , Alert  } from 'react-native';   
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";


import iwcollector from '../assets/iwcollector.jpg'  ;   // icons 
import unitworker  from '../assets/unitworker.png'  ; 
import  wastemanagementunit from '../assets/wastemanagementunit.png'  ; 
import buyer from '../assets/buyer.png'  ; 



const windowWidth = Dimensions.get('window').width;

export default function Home(  {  route  ,  navigation  } ) {
   

  //console.log( "Home")  ; 
  // console.log( route.params.token)  ; 
  
  const [ modalVisible, setModalVisible ] = React.useState( false  ); 


       
  const backAction = () => {
    Alert.alert("Hold on!", "Do you want to exit from app ?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
       


  const handler1 = () => {

    navigation.navigate("About"  )  ; 
    setModalVisible(  !modalVisible) ; 

  }
  
 

  const handler2 = () => {

    navigation.navigate("Sign Up Request"   , {   token : route.params.token   } )  ; 
    setModalVisible(  !modalVisible) ; 

  }
  
  return (
    <View style={styles.container}>  


        <StatusBar 
            barStyle="light-content"  
            backgroundColor = '#333D79'
           />  

<Modal 

transparent={true}
  visible={modalVisible}
  animationType="slide" 
 onRequestClose={() => {
     setModalVisible(!modalVisible);
      }}
>   

<View  style={styles.m1}>
  

       <View   style={  styles.to4}>        
      <TouchableOpacity  
         onPress = {  ()  =>  { setModalVisible( !modalVisible) }} >
       <MaterialCommunityIcons name="window-close" size={30} color="#fff" />
     </TouchableOpacity>  

     </View>  


     <TouchableOpacity  style={ styles.to3} 
              onPress = { () => { handler1()}}
     >
         <Text style={ styles.t4}>About</Text>
     </TouchableOpacity>  
   
     
     <TouchableOpacity  style={ styles.to3} 
              onPress = { () => { handler2()}}
     >
         <Text style={ styles.t4}>Sign Up Request</Text>
     </TouchableOpacity>  

     
     
     <TouchableOpacity  style={ styles.to3} 
       onPress = { () => {  navigation.navigate( "Login")}}
     >
         <Text  style={ styles.t4} >Log Out</Text>
    </TouchableOpacity>  
      
   
  </View>
</Modal>



         
        <View style={styles.v7}>
    
   <TouchableOpacity 
        onPress={() => { setModalVisible( true)}  }  
   >              
    <MaterialCommunityIcons name="menu" size={30} color="#000000" />
    </TouchableOpacity>  
   </View>

       <View style={styles.v1}>   

        <Text  style={styles.t2} >Registrations</Text>
       </View>


       <View style={styles.v2}>
       
       <View style={styles.v3} >
        
        < View style={styles.v4}   >  
          <TouchableOpacity   style={styles.to1}   
                   onPress = {  ( ) => { navigation.navigate("Process"   ,  {  token : route.params.token  ,   name: "Informal Waste Collector"   ,   screentype :  "iwc"}  )}} 
          >
          <Image  
            style= {{ height : "100%", width : "100%"  ,       borderRadius : 15   } }
            source={ iwcollector } 
          /> 
          </TouchableOpacity > 
          <Text   style={styles.t1}   >
          Informal Waste Collector
          </Text>
        </View>  

        < View style={styles.v4} >  
          <TouchableOpacity  style={styles.to1}  
           onPress = {  ( ) => { navigation.navigate("Process"   ,  {     token : route.params.token  ,  name: "Unit Worker"  ,    screentype :  "uw"}  )}} >
             

             <Image  
            style= {{ height : "100%", width : "100%"  ,     borderRadius : 15   } }
            source={ unitworker }  
          /> 
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
             
             <Image  
            style= {{ height : "100%", width : "100%"  ,     borderRadius : 15   } }
            source={ wastemanagementunit}  
          /> 
     
          </TouchableOpacity> 
          <Text   style={styles.t1} >
          Waste Management Unit
          </Text>
        </View>  

        < View style={styles.v4} >  
          <TouchableOpacity   style={styles.to1}  
          onPress = {  ( ) => { navigation.navigate("Process"   ,  {    token : route.params.token ,   name: "Buyers’ List" ,     screentype :  "buy"}  )}} >
                
                <Image  
            style= {{ height : "100%", width : "100%"  ,     borderRadius : 15   } }
            source={ buyer }   
          /> 
           
          </TouchableOpacity> 
          <Text   style={styles.t1} >
            Buyer
          </Text>
        </View>

        </View>      
        </View>     
   




        <View  style={styles.v5} >  
           
        {/*    <TouchableOpacity   style={styles.to2} >   
              <Text style={styles.t3}>  Upload Document</Text>  
              <View  style={styles.v6} >
              <Icon  name="upload"   size={27} /> 
              </View> 
              </TouchableOpacity>
      */}
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
    width : "83%" , 
    backgroundColor : "#fff"  , 
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
      width :  windowWidth/2.6 , 
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

      v7 : {
         
        width : "80%"  , 
        height: "6%" , 
         alignItems : "flex-end"  ,
    
           backgroundColor : '#fff' ,
           justifyContent : "center"

      }
  , 

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

     t4 : {
      color : "#FFFFFF"  , 
      width : "100%" , 
      fontWeight: '600' ,
     fontStyle: 'normal'  , 
     fontSize: 20 , 
     lineHeight: 22 , 
     textAlign: 'center' , 
     letterSpacing: -0.408 ,
   

     }  , 

     to1  : {
     

      flex:  -1 ,
      height : windowWidth/2.6   , 
      width :windowWidth/2.6  ,  
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

      }  ,  

       to3 : {

        width : "100%"  , 
        height : "13%"  ,


       }  ,  

        to4: {
          width : "100%"  , 
          height : "10%"  ,
     alignItems : "flex-end"  ,

     paddingLeft : 15 , 
        }  , 

      m1 : {

        flex : -1 , 
        width : "80%" , 
        height : "60%" , 
     position : 'absolute'  , 
    backgroundColor: "#333D79",  
      top :  "10%" , 
    borderTopRightRadius : 10 , 
      borderBottomRightRadius : 10 , 
    
      

      }
});
