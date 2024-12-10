import { StyleSheet, Text, View  , FlatList   , TextInput  , Dimensions, TouchableOpacity  , StatusBar , Modal } from 'react-native'; 
import   React  , { useState , useEffect   ,  }   from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { hasStartedLocationUpdatesAsync } from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';






export default function  UserRequest ( {  route  ,  navigation  }) {    

  const [   data  , setData  ] = useState([]) ;   //   data  for showing all the info     
  const [   loading   , setLoading   ] = useState( true ) ;  
  const [   pageNo   , setPageNo   ] = useState( 1 ) ;  
  const [  userInfo , setUserInfo  ]   =  useState(  { 

    name : ""  ,
    email : "" 
  } ) ;  
  
  const [ modalVisible, setModalVisible ] = React.useState( false  ); 
  


  console.log( "UserRequest")  ; 
 // console.log( route.params.token)  ; 
  const token =  route.params.token ; 

  const  base_url  = "http://circsol.in:5000/admin/alluserrequestview" ; 
    
  

   const getData = async () => {
    try {
      const response = await fetch( base_url , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
            'token' :  token , 
        }
    , 
    body: JSON.stringify({
       
      search_key :"",
      page_no :  pageNo ,
      limit :"10"
 
  }),
}
     );
      const json = await response.json();

        
     console.log("ayhusgg") ;   

        console.log( json ) ; 

      if( json.message === "Invalid Token"){
             
        
        alert("Please Log In Again!") ; 
        navigation.navigate( "Login") ; 
        

      }else{
          


        setData( json.data) ;
        alert( json.message) ; 
      }  
      
      
    } catch (error) {
      console.error(error);
    }  
  };
  




  
  useEffect(() => {  











    getData();  

  }, [ pageNo  , modalVisible]);

     
  
  const  handler1 =(  name , email ) => {

   
  console.log( `in handler1 :  ${ name }  and  ${email}`) ; 
  
   let obj = {
      name : name , 
      email : email 
   }

   setUserInfo( obj) ; 
   setModalVisible(!modalVisible);
  } ; 
  

  
  const  handler2 =(  value ) => {

      

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/admin/userstatusupdate'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :  token , 
        
        }
    , 
    body: JSON.stringify({
        
      "email_id": userInfo.email , 
      "request": value 
        
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
        

        if( json.message === "Invalid Token"){
             
          alert("Please Log In Again!") ; 
          navigation.navigate( "Login") ; 

        }else{
           
        
          alert(`in handler2 : ${ json.message } `) ; 
          setModalVisible(  !modalVisible) ;
          
        }
       
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };

   
    console.log(`in handler2 with  : ${userInfo.name }  and   ${userInfo.email }  `) ;
  pushdata()  ; 

   } ;
   

   
   
  const handler3 = () => {
    
    console.log( "handler3") ;
    
    if(  pageNo >= 2){

      setPageNo(  pageNo - 1)  ; 
    }
        
   }

   const  handler4 = () => {
      
    console.log( "handler4" ) ;

 

      setPageNo(  pageNo + 1 )  ; 
    
        
   }


  return (
    <View style={styles.container}> 
  
  <StatusBar 
        barStyle="light-content"  
        backgroundColor = '#333D79'
       />

    <View  style = { styles.v6 }>    
       
<Modal 
 
transparent={true}
  visible={modalVisible}
  animationType= "fade"
 onRequestClose={() => {
     setModalVisible(!modalVisible);
      }}
>   

<View    style = { styles.m1} >


    <View style = { styles.v8} >  
    <View style={ { width : "80%"  , height : '100%'  , justifyContent : "center"}}>
       <Text  style={ { color : "#fff"  , fontSize : 20 , fontWeight : "600" }}  > {  `Name : ${userInfo.name }` }</Text>
      </View>     
      <TouchableOpacity    
         onPress = {  ()  =>  { setModalVisible( !modalVisible) }} >
       <MaterialCommunityIcons name="window-close" size={30} color={"#fff"} />
     </TouchableOpacity>  

     </View> 

  <View  style = { styles.v7 }>
     <TouchableOpacity  
      onPress={  () => { handler2( "accepted") } }
           style = { styles.to4}
     >
         <Text >Accept</Text>
     </TouchableOpacity>  
   
     
     <TouchableOpacity 
      onPress={  () => {handler2("denied")} }  
          style = {styles.to5}   
     >
         <Text >Deny</Text>
     </TouchableOpacity>  
      
     </View>
  </View>


</Modal>
 
        <View style={styles.v5}> 

        <Text style={styles.t1} >Name</Text>
        <Text  style={styles.t2}> Email</Text>
        <Text  style={styles.t3}> Request</Text>
    
        </View>  

      <View style={styles.v2}>     
    

        { 
       
          data.map((  el ) => (  

           

         <View   key = {  el.id } style={styles.v3 }  > 
         
          <Text style={styles.t5} > {  el.prop1 } </Text> 
           <Text style={styles.t6}> {   el.prop2}  </Text>    

           <TouchableOpacity   style = {  styles.to3}     disabled= { ( el.prop3 === "accepted") ? true : false }  
           onPress={ ()  => { handler1(  el.prop1 , el.prop2)}}>
           <Text style={ ( el.prop3 === "accepted"  )? [{ backgroundColor : "green"} ,styles.t7] :  [{ backgroundColor : "#333D79"} ,styles.t7] }> {   el.prop3 }  </Text>
            
           </TouchableOpacity>
          </View>
             
              ) 
            
          )
       
       } 
       </View>   
        

       <View  style={styles.v4}>
         
         <TouchableOpacity style={styles.to1} 
             onPress={ () => { handler3() }}
         >
         <Icon  name="arrow-left" size={22}   color="#fff"/> 

         </TouchableOpacity> 

         <TouchableOpacity style={styles.to2} 
            onPress={ () => { handler4()}}
         >
         <Icon  name="arrow-right" size={22 }  color="#fff" /> 

         </TouchableOpacity>
      </View>

      </View> 
    </View>
  );
}
  

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems : "center" , 
    justifyContent : "center" ,
  },  

   
  v1 : {
     
  
    backgroundColor: '#fff',  
    width : windowWidth  , 
    height :  "10%" , 

  }  , 

  v2 : {
    
  
    backgroundColor: '#fff',  
    width : "100%"  ,   
    backgroundColor : "#fff" , 
    height : "70%"  , 
    

  }  ,   

  v3 : {  

    flex : -1 , 
    width : "100%"  ,  
   flexDirection : "row"  ,  
   justifyContent : "space-around"  , 
   backgroundColor  : "#fff" ,
   height: "12%"  , 
   borderBottomWidth : 2, 
   borderColor : "#000000"  ,

  }   , 


  v4 :  {


    backgroundColor: '#fff',  
    width : windowWidth  , 
    height :  "8%", 
    flexDirection : "row"  ,
    justifyContent : "space-between" , 
    alignItems : "flex-end" , 
     padding : 6 ,


  }  , 


   v5 : {
      
    flex : -1 , 
    width : "100%"  , 
    height : "5%" ,  
      backgroundColor : "#fff" , 
      flexDirection : "row" , 
      justifyContent : "space-around" , 
      marginTop  : 10 , 

   }  , 

   v6 : {

         flex : 1 , 
          alignItems : "center" ,
          backgroundColor : "#fff"  , 
          
       
   }
     ,  
     
      v7 : {

         width : "100%" , 
         height : "50%"  , 
         backgroundColor : "#fff" , 
         flexDirection : "row"  , 
         justifyContent : "space-around"   , 
         alignItems :"center" , 
         overflow : "hidden"

      }
  ,  

   v8 :{

  height : "40%"  , 
  width : "100%"  , 
  backgroundColor : "#333D79"  , 
  flexDirection : "row"  , 
  justifyContent :  'flex-end'  ,  


   }
 ,
  liSt : {  

   
    margin : 0 , 
    flex : 1 ,
    textAlign: "center"  , 
    padding :  0 , 
    margin :  0  ,
    backgroundColor : ''  ,  
    borderColor : "pink"  , 
    borderWidth : 7 , 
 
    }  , 
    

    t1 : {

       height : "100%"  , 
       width : "32%" ,
       backgroundColor : "#333D79" , 
       color : "#FFFFFF"  ,
       fontWeight: '800' ,
      fontStyle: 'normal'  , 
       fontSize : 16 , 
      lineHeight: 22 , 
      textAlign: 'center' , 
      textAlignVertical: "center"  , 
      letterSpacing: -0.408 ,
      borderRadius : 5 , 


    } , 

    t2 : {

      height : "100%"  , 
      width : "45%" ,
      backgroundColor : "#333D79" , 
      color : "#FFFFFF"  ,
      fontWeight: '800' ,
     fontStyle: 'normal'  , 
      fontSize : 16 , 
     lineHeight: 22 , 
     textAlign: 'center' , 
     textAlignVertical: "center"  , 
     letterSpacing: -0.408 ,
     borderRadius : 5 , 

   }  , 

   t3 : {

    height : "100%"  , 
    width : "20%" ,
    backgroundColor : "#333D79" , 
    color : "#FFFFFF"  ,
    fontWeight: '800' ,
   fontStyle: 'normal'  , 
    fontSize : 16 , 
   lineHeight: 22 , 
   textAlign: 'center' , 
   textAlignVertical: "center"  , 
   letterSpacing: -0.408 ,
   borderRadius : 5 , 

 }  ,  

 t4 : {

  height : "100%"  , 
  width : "8%" ,
  backgroundColor : "#333D79" , 
  color : "#FFFFFF"  ,
  fontWeight: '800' ,
 fontStyle: 'normal'  , 
  fontSize : 16 , 
 lineHeight: 22 , 
  alignItems : "center"  , 
  justifyContent : "center"  , 
 letterSpacing: -0.408 ,
 borderRadius : 5 , 

 }  , 
  

 t5 : {


  width : "32%" ,
  backgroundColor : "#fff" , 
 textAlign : "center" , 
 textAlignVertical : "center" , 


} , 

t6 : {


 width : "45%" ,
 backgroundColor : "#fff" , 
 textAlign : "center" , 
 textAlignVertical : "center" ,  


}  , 

t7 : {

 
height: "95%"  , 
width : "100%" ,
elevation : 5 , 
textAlign : "center" , 
 textAlignVertical : "center" ,
 borderRadius : 10 ,  
 color : "#fff"


}  ,  

t8 : {

height : "100%"  , 
width : "8%" ,
backgroundColor : "#fff" , 
alignItems : "center" , 
justifyContent : "center"  , 


}  , 



  to1: {

    height : '80%'  , 
    width : "20%"  , 
     backgroundColor : "#333D79" , 
     borderRadius : 8 , 
     alignItems : "center"  , 
     justifyContent : "center"  ,


  }  , 
 
  to2 : {

    height : '80%'  , 
    width : "20%"  , 
     backgroundColor : "#333D79" , 
     borderRadius : 8 , 
     alignItems : "center"  , 
     justifyContent : "center"  ,

  }  , 

  to3 : {

    height : '100%'  , 
    width :  "20%"  , 
    backgroundColor : "#fff"  , 
    alignItems : "center"  , 
    justifyContent : "center"

  }    , 

  to4 : {

     width : "40%"  , 
     height : "50%" ,  
     backgroundColor : "green" ,
     borderRadius : 10 , 
     justifyContent : "center"  , 
     alignItems : "center" , 

  }  , 
    
  to5 : {

    width : "40%"  , 
    height : "50%" ,  
    backgroundColor : "red"  , 
    borderRadius : 10 ,  
    justifyContent : "center"  , 
    alignItems : "center" , 



 }  , 
  
  ip1 :{


  width : "80%"  , 
   backgroundColor : "#fff"  , 
   padding : 0 , 
   borderColor : "grey" , 
   borderWidth : 2 , 
   borderRadius :10 , 


  }
  , 

  m1 :  { 
    flex : -1 , 
    width :  windowWidth  * 90 /100 , 
    height :  windowHeight / 5, 
 position : 'absolute'  , 
backgroundColor: "#fff",
borderColor : '#333D79'    , 
borderWidth : 2 , 
  margin : windowWidth *  10 /200 ,
  top : windowHeight /3 , 
  borderRadius : 10 ,  
  justifyContent : "space-between" , 
  overflow : "hidden"
}  ,


});
