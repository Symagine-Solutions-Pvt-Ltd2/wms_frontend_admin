import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar } from 'react-native';
import   React  , { useState , useEffect }   from 'react';  
import Icon from 'react-native-vector-icons/FontAwesome'; 


export default function LogIn(   {  route  ,  navigation  }) {  
  
  const [ token  , setToken ] = React.useState( "");   //  setting token 
  const [ login  , onChangeLogin ] = React.useState(   true  );  // to toogle between signup and login 

     //login 
  
  
  const [ Password2 , onChangePassword2 ] = React.useState("");     // password   
  const [  email1, onChangeEmail1 ] = React.useState("");  // email 
  const [ visible  ,   onChangeVisibility ] = React.useState( true );   
  const [ icon , onChangeIcon] = React.useState( 'eye-slash');  
  

  

    
  
  
    // signup 

  const [  name , onChangeName ] = React.useState("");     // password   
  const [  email , onChangeEmail ] = React.useState("");  // email 
  const [ password , onChangePassword ] = React.useState("");     // password   
  const [ password1 , onChangePassword1  ] = React.useState("");     // set password  
  const [ organization  , onChangeOrganization   ] = React.useState("");     //  organization 
  const [ visible1  ,   onChangeVisibility1 ] = React.useState( true );   
  const [ icon1 , onChangeIcon1] = React.useState( 'eye-slash');  
  const [ visible2  ,   onChangeVisibility2 ] = React.useState( true );   
  const [ icon2 , onChangeIcon2] = React.useState( 'eye-slash');  


   



   console.log( email1)  ; 
   console.log( Password2)  ;



   const handlePasswordVisibility   = ()  => {
            
    if(  icon == 'eye-slash') {
     
      onChangeIcon('eye')  ; 
      onChangeVisibility( false) ; 

    }else if(    icon == 'eye') {

      onChangeIcon('eye-slash')  ; 
      onChangeVisibility( true ) ; 
    }
        
   }  ;  


  
   const handlePasswordVisibility1   = ()  => {
            
    if(  icon1 == 'eye-slash') {
     
      onChangeIcon1('eye')  ; 
      onChangeVisibility1( false) ; 

    }else if(    icon1 == 'eye') {

      onChangeIcon1('eye-slash')  ; 
      onChangeVisibility1( true ) ; 
    }
        
   }  ;  

    
   const handlePasswordVisibility2   = ()  => {
            
    if(  icon2 == 'eye-slash') {
     
      onChangeIcon2('eye')  ; 
      onChangeVisibility2( false) ; 

    }else if(    icon2 == 'eye') {

      onChangeIcon2('eye-slash')  ; 
      onChangeVisibility2( true ) ; 
    }
        
   }  ;  




  
   const handler1   = ()  => {
               
        onChangeLogin( true)  ;
   }  ; 

   const handler2   = ()  => {
            
    onChangeLogin(  false)  ; 
        
   }  ;   
      


  

  //  admin api  (  signup  )
   
  const submit1    = ()  => {
     
 
      const getdata =  async () => {  

   try {
     const response = await fetch( 'http://clean-sundarbans.com:5000/admin/registeradmin'  , 
     {   method: 'POST', 

         headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json'  ,
       
       }
   , 
   body: JSON.stringify({
      
    "name": name,
    "email_id":  email ,
    "organisation_name": organization ,
    "password": password ,
    "confirm_password": password1 , 

 }),
}
    );
     const json = await response.json();
       console.log(json);     

     if( json.status  === "success") {
   
        alert(  json.message)  ; 
        console.log( "vbvhv")  ; 
        onChangeLogin(  true)  ;  
        
        onChangeName("") ;
        onChangeEmail("") ;
        onChangeOrganization("");
        onChangePassword("");
        onChangePassword1("");

      } else {
           
        alert(  json.message)  ; 

      }
   } catch (error) {
     console.error(error);
   }  
 };


  getdata()  ;   
 
 

 
 console.log("bhjgnagxaxh")  ;  

}; 

  
 // login api  
  
  
  const submit2    = ()  => {
     

    const getdata1 =  async () => {  

     try {
     const response = await fetch( 'http://clean-sundarbans.com:5000/admin/loginadmin'  , 
    {   method: 'POST', 

        headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json'  ,
   
      }
   , 
body: JSON.stringify({
  
 
"email_id":  email1 , 
"password": Password2 ,

}),
}
); 
 const json = await response.json(); 


   console.log(json);     
   
  if(  json.status === "success"){ 

    alert(  json.message)  ; 
    navigation.navigate("Home"  , { token  : json.data.token  })   ; 
   // console.log(json.data.token);    

   onChangeEmail1("") ;
   onChangePassword2("") ; 
 
  }else {

      alert(  json.message)  ; 
  }

} catch (error) {
 console.error(error);
}  
};


getdata1()  ;   
  




}; 

  


   

    
       


    return (
      <View style={styles.container}>
          

       <StatusBar  barStyle="dark-content" 
       backgroundColor="#fff"  />   
    


   {( login )
  ? 
    
<View style={styles.v1} > 
   
   <View style={styles.v2} >
   

   <View style={styles.ip6} >
   <Text style={styles.t1}>Welcome Back!</Text>
    </View>
     

     <View  style={styles.ip1} >
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.tip1} 
     placeholder="Email Address"    value= { email1 }  onChangeText= { onChangeEmail1 } />
  
    <View  style={styles.tip2}  >
    <Icon  name="envelope" size={27}  color = { 'grey'} /> 
      </View>

 </View>
  

  <View   style={styles.ip2}>
<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.tip1} 
        secureTextEntry={visible }    placeholder="Password"  value= { Password2  }   onChangeText = {  onChangePassword2}/>        
  
   < TouchableOpacity style = { styles.tip2} 
     onPress = { () => {  handlePasswordVisibility()}}
   > 
   <Icon  name={ icon } size={27}   color = { 'grey'} /> 

    </TouchableOpacity>
  </View>
  {/* <View  style={styles.v3}>
  <Icon     name="check"  style={{ backgroundColor : "#333D79"   , color : "#fff", padding : 5 ,  }}      size={22} /> 
<Text> Remember me</Text>      

<TouchableOpacity  
  >
<Text>Forgot Password?</Text>
</TouchableOpacity>
    
  </View >  */}
  
    

      <TouchableOpacity style={styles.to1}  
            onPress = {  submit2 }> 
       
        <Text style={styles.t3}  >Log In</Text>
      </TouchableOpacity>
    

      <View style={styles.v4}  >
      <Text   style = { styles.t6}>  
      Don’t have an account?
      </Text>    

     <TouchableOpacity 
         onPress = {  ()  =>  { handler2() }} >
       <Text   style = { styles.t5}>Sign Up here.</Text>
      </TouchableOpacity>    
       </View>

   </View>  
  
    
</View>

:

<View style={styles.v1} >
   
   
<View style={styles.v2} >
  
<View style={styles.ip6}  >
<Text style={styles.t1}>Hello Admin!</Text>  
</View>
  
 <View  style={styles.ip1}  >
    
 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.tip1}    
            placeholder="Name"  value= {   name }   onChangeText = {onChangeName }  
              
            />    
     
     <View  style={styles.tip2}  
       > 
     <Icon  name="user" size={27}  color = { 'grey'} /> 
      </View>
 
  </View> 
    

   
  
<View  style={styles.ip2}  >  

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.tip1} 
                 placeholder="Email Address"   value= { email }   onChangeText = {  onChangeEmail } />
  
 
  <View  style={styles.tip2} > 
  <Icon  name="envelope" size={27}   color = { 'grey'} /> 
  </View>
    
  </View>  

  


<View  style={styles.ip3}  >   

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.tip1} 
    secureTextEntry={ visible1}         placeholder="Password"  value= { password }  onChangeText = {  onChangePassword} />        

<TouchableOpacity  style={styles.tip2} 
  onPress={ () => {  handlePasswordVisibility1()}}
> 
  <Icon  name= { icon1} size={27}   color = { 'grey'}/> 
  </TouchableOpacity>
    
</View>    



 

<View  style={styles.ip4}  >   
<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.tip1} 
         secureTextEntry={ visible2}         placeholder="Re-enter  Password"  value= { password1  }  onChangeText = {  onChangePassword1 }/>    

<TouchableOpacity style={styles.tip2} 
  onPress={ () => {  handlePasswordVisibility2()}}
>  
  <Icon  name= {icon2} size={27}   color = { 'grey'}/> 
  </TouchableOpacity>
</View>   
  



<View  style={styles.ip5}  >   

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.tip1} 
        placeholder="Organisation Name"  value= { organization }   onChangeText = {  onChangeOrganization }  />      

<View  style={styles.tip2} >  

<Icon  name="building" size={27}   color = { 'grey'}/> 
</View>
</View>



   <TouchableOpacity style={styles.to3}  
   onPress = {  submit1 }>
     <Text style={styles.t3} >Sign Up</Text>
   </TouchableOpacity>  


  <View style={styles.v5}  >
   <Text  style= { styles.t6}>  
   Already have an account?
   </Text>    

  <TouchableOpacity  
           onPress = {  ()  =>  { handler1() }}
  >
    <Text  style= { styles.t5} >Login here.</Text>
   </TouchableOpacity>    

 </View>
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
    alignItems : "center"  , 
   


   }    , 
   
   
   v3 :  {
    

    position : "absolute"  , 
    flex:  -1 ,
    height : "5%"  , 
    width : "100%" ,  
    top : "34%"  ,  
    backgroundColor : "#fff"  ,  
    flexDirection : "row"  ,
     justifyContent : "space-between"  ,  
     alignItems : 'center'  , 

   }    , 

   v4 : {

    position : "absolute"  , 
    top : "57%"  , 
    backgroundColor : "#fff"  , 
    flexDirection : "row"  , 


   }  

    , 

    v5 : {
        

      position : "absolute"  , 
      top : "77%"  , 
      backgroundColor : "#fff"  , 
      flexDirection : "row"  ,


    }
   ,    

   t1 : {
    
    position : "absolute"  , 
    top : "2%"  , 
     fontWeight: '600' ,
     color :"#333D79"  , 
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

  t3 : {

    color : "#FFFFFF"  ,
    fontWeight: '600' ,
   fontStyle: 'normal'  , 
   fontSize : 16 , 
   lineHeight: 22 , 
   textAlign: 'center' , 
   letterSpacing: -0.41 ,


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

  t5 : {
   
    color: "#333D79" , 
     fontWeight: '600' ,
   fontStyle: 'normal'  , 
   letterSpacing: -0.408 ,
   lineHeight: 22 , 

    
  }  ,  

  t6: {
   
   paddingRight : 8 , 
  color: "#333D79" , 
  fontStyle: 'normal'  , 
  letterSpacing: -0.408 ,
  lineHeight: 22 , 

   
 }  , 
  

   tip1 : {
    
    width :"85%"  , 
    height : "100%" ,   
    borderRadius : 10 ,  
    color :  "#000"  , 



   }  , 
  
   tip2 : { 
    height :"100%"  , 
    width : "15%"  , 
  alignItems : "center"  , 
  justifyContent : "center"  , 

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
    flexDirection :  "row"   ,  
    justifyContent : "space-around"  , 

  }  ,   

  ip2 : {
    
    paddingLeft : 15 , 
    position : "absolute"  , 
    top : "25%"  ,
    flex : -1 ,
    width : "100%" ,
    height : "7%" ,  
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 , 
    flexDirection :  "row"   ,  
    justifyContent : "space-around"  , 

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

    flexDirection :  "row"   ,  
    justifyContent : "space-around"  ,

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
    flexDirection :  "row"   ,  
    justifyContent : "space-around"  ,

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
    flexDirection :  "row"   ,  
    justifyContent : "space-around"  ,

  }  ,  
    

  ip6 : {

    width : "100%" ,
    height : "7%" , 
  


  }
  ,  

    to1 : {
      
      
    position : "absolute"  , 
    top : "47%" ,
    flex : -1 ,
    width : "70%" ,
    height : "7%" ,  
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 10 ,    
    backgroundColor : "#333D79"  ,  
    justifyContent : "center"  ,
    alignItems : "center"
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
      backgroundColor : "#333D79" , 
      alignItems : "center"  , 
      justifyContent : "center" , 
      borderRadius : 10 , 

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
  