import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar } from 'react-native';
import   React  , { useState , useEffect }   from 'react';  
import axios from  "axios"  ; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function LogIn(   {  route  ,  navigation  }) {  
  

  

  const [ login  , onChangeLogin ] = React.useState(  false  );

    
  const [ visible  ,   onChangeVisibility ] = React.useState( true ); 
  
  

  const [   name , onChangeName ] = React.useState("");     // password   
  const [  email , onChangeEmail ] = React.useState("");  // email 
  const [ password , onChangePassword ] = React.useState("");     // password   
  const [ password1 , onChangePassword1  ] = React.useState("");     // set password   
 

  const [ icon , onChangeIcon] = React.useState( 'eye-slash');  





   const handlePasswordVisibility   = ()  => {
            
    if(  icon == 'eye-slash') {
     
      onChangeIcon('eye')  ; 
      onChangeVisibility( false) ; 

    }else if(    icon == 'eye') {

      onChangeIcon('eye-slash')  ; 
      onChangeVisibility( true ) ; 
    }
        
   }  ; 
  
   const handler1   = ()  => {
               
        onChangeLogin( true)  ;
   }  ; 

   const handler2   = ()  => {
            
    onChangeLogin(  false)  ; 
        
   }  ; 
    return (
      <View style={styles.container}>
          

       <StatusBar  barStyle="light-content" 
       backgroundColor="#78AFEA"  />   


   {( login )
  ? 
    
<View style={styles.v1} > 
   
   <View style={styles.v2} >

   <Text style={styles.t1}>Welcome Back!</Text>
    
    
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Email Address"   value= { email}  />


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
            placeholder="Password"  value= { password } />      

  <View  style={styles.v3}>
      
<Text> Remember me</Text>      

<TouchableOpacity >
<Text>Forgot Password?</Text>
</TouchableOpacity>
    
  </View > 
  

      <TouchableOpacity style={styles.to1}  
             
             onPress = {  ( ) => { navigation.navigate("Home")}}
       >
        <Text>Log In</Text>
      </TouchableOpacity>
    
      <Text  style={styles.t2}>  
      Don’t have an account?
      </Text>    

     <TouchableOpacity style={styles.to2}  
         onPress = {  ()  =>  { handler2() }} >
       <Text >Sign Up here.</Text>
      </TouchableOpacity>    


   </View>  
  
    
</View>

:

<View style={styles.v1} >
   
   
<View style={styles.v2} >

<Text style={styles.t1}> Hello Admin!</Text>  


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
         placeholder="Name"  value= { password } />      

 
<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
                   placeholder="Email Address"   value= { email}  />


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
         placeholder="Password"  value= { password } />        



<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip4} 
         placeholder="Re-enter  Password"  value= { password } />      


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip5} 
         placeholder="Organisation Name"  value= { password } />      





   <TouchableOpacity style={styles.to3}>
     <Text>Sign Up</Text>
   </TouchableOpacity>  


 
   <Text  style={styles.t4}>  
   Already have an account?
   </Text>    

  <TouchableOpacity style={styles.to4}   
           onPress = {  ()  =>  { handler1() }}
  >
    <Text >Login here.</Text>
   </TouchableOpacity>    


</View>  

 


</View>

}

    </View>
        
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1 ,
    },

    v1 : {
        
      flex:  1 ,  
       backgroundColor : '#fff'  , 
        alignItems: "center"  , 
        justifyContent : "center"  , 
       
    }
   , 
      

   v2 :  {

    flex:  -1 ,
    height : "90%"  , 
    width : "80%" , 
    backgroundColor : "#fff"  , 
   


   }    , 
   
   
   v3 :  {
    

    position : "absolute"  , 
    flex:  -1 ,
    height : "5%"  , 
    width : "100%" ,  
    top : "34%"  ,  
    backgroundColor : "red"  ,  
    flexDirection : "row"  ,
     justifyContent : "space-between"  ,  
     alignItems : 'center'  , 

   }  
   ,    

   t1 : {
    
    position : "absolute"  , 
    top : "2%"  , 
     fontWeight: '600' ,
   fontStyle: 'normal'  , 
    fontSize: 30 , 
   lineHeight: 34 ,
   letterSpacing: -0.408 ,
  }  , 
    

  t2 : {
     
    flex : -1 , 
    position : "absolute"  , 
    top : "55%" ,    
    width : "50%" , 
    left : "12%" , 
     fontWeight: '600' ,
   fontStyle: 'normal'  , 
   letterSpacing: -0.408 ,

  }   , 
  
  t4 : {
      
    flex : -1 , 
    position : "absolute"  , 
    top : "77%" ,    
    width : "50%" , 
    left : "12%" , 
     fontWeight: '600' ,
   fontStyle: 'normal'  , 
   letterSpacing: -0.408 ,


  }  , 

  ip1 : {
      
    position : "absolute"  , 
    top : "15%"  , 
    flex : -1 ,
    width : "100%" ,
    height : "7%" ,  
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,  

  }  ,   

  ip2 : {
     
    position : "absolute"  , 
    top : "25%"  ,
    flex : -1 ,
    width : "100%" ,
    height : "7%" ,  
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,  
   

  }  ,  
  
   
  ip3 : {
     
    position : "absolute"  , 
    top : "35%"  ,
    flex : -1 ,
    width : "100%" ,
    height : "7%" ,  
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,  
   

  }  ,    


  ip4 : {
     
    position : "absolute"  , 
    top : "45%"  ,
    flex : -1 ,
    width : "100%" ,
    height : "7%" ,  
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,  
   

  }  ,    

  ip5 : {
     
    position : "absolute"  , 
    top : "55%"  ,
    flex : -1 ,
    width : "100%" ,
    height : "7%" ,  
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,  
   

  }  ,  
   

    to1 : {
      
      
    position : "absolute"  , 
    top : "47%" ,
    flex : -1 ,
    width : "70%" ,
    height : "7%" ,  
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,    
    backgroundColor : "#333D79"
   

    }    , 

       
    to2 : {
      
      position : "absolute"  , 
      top : "55%" ,
      flex : -1   , 
      left : "50%"  , 
      width : "100%" ,
      height : "7%" ,  
      paddingLeft : 15 , 
      textAlign : "left"  ,  

      }    , 
      

              
    to3 : {
      
      position : "absolute"  , 
      top : "69%" ,
      flex : -1   , 
      width : "80%" ,
      height : "7%" ,  
      paddingLeft : 15 , 
      textAlign : "left"  ,  
      backgroundColor : "#333D79"

      }    ,   

     
             
    to4 : {
      
      position : "absolute"  , 
      top : "77%" ,
      flex : -1   , 
      left : "54%"  , 
      width : "100%" ,
      height : "7%" ,  
      paddingLeft : 15 , 
      textAlign : "left"  ,  

      }    , 
      
        


  });
  