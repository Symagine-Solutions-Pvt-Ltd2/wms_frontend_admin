
import { StyleSheet, Text, View  , FlatList   , TextInput  , Dimensions, TouchableOpacity  , StatusBar   } from 'react-native'; 
import   React  , { useState , useEffect   ,  }   from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Viewlist( {  route  ,  navigation  }) {    

  const [   data  , setData  ] = useState([]) ;   //   data  for showing all the info     
  const [   loading   , setLoading   ] = useState( true ) ;  
  const [   pageNo   , setPageNo   ] = useState( 1 ) ;  
 
  console.log( "Viewlist")  ; 
  console.log( route.params.token)  ; 
  const token =  route.params.token ; 

  let api_end =  route.params.api_end  ; 

  const  base_url  = `http://clean-sundarbans.com:5000/admin/${api_end}` ; 
    
  

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
       
        setData( json.data)
        alert( json.message) ; 
      }  
        console.log(json.data);    
      
    } catch (error) {
      console.error(error);
    }  
  };

  useEffect(() => {
    getData();  

  }, [  pageNo ]);

     

  const handler1 = () => {
    
    console.log( "handler1") ;
    
    if(  pageNo >= 2){

      setPageNo(  pageNo - 1)  ; 
    }
        
   }

   const  handler2 = () => {
      
    console.log( "handler2" ) ;

 

      setPageNo(  pageNo + 1 )  ; 
    
        
   }
  
     



  return (
    <View style={styles.container}> 
  
  <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />

      
        <View style={styles.v5}> 

        <Text style={styles.t1} >Name</Text>
        <Text  style={styles.t2}>Code</Text>
        <Text  style={styles.t3}>Status</Text>
        <View  style={styles.t4}>
        <Icon  name="link" size={22}  color="#fff"/> 
        </View>
        </View>  


      <View style={styles.v2}>     
        
  {/*     < FlatList  data= { data }   
         keyExtractor = {(  key )  => {
            return  key._id  ;   
             }
            }
          
       renderItem={( element )  => { 
           console.log(   element )  ; 

      return (
          
           <View style={styles.v3 }  >  
            <Text> { element.item.w_c_name} </Text>  
            <Text> {  element.item.wc_code}</Text>
            <Text> {  element.item.status }</Text>
           </View>
      ) 
       }}  /> */}    




        { 
       
          data.map((  el ) => (  

           

         <View  key={ el.id  }  style={styles.v3 }  > 
         
           <Text style={styles.t5} > {  el.prop1 } </Text> 
           <Text style={styles.t6}> {   el.prop3}  </Text>   
           <Text style={styles.t7}> {   el.prop2 }  </Text>
           <View style={styles.t8}>
           <Icon  name="arrow-right" size={27} /> 
            </View>
          </View>
             
              ) 
            
          )
       
       } 
       </View>   
        



       <View  style={styles.v4}>
         
         <TouchableOpacity style={styles.to1} 
           onPress = {  ()  =>  { handler1() } }
         >
         <Icon  name="arrow-left" size={22}   color="#fff"/> 

         </TouchableOpacity> 

         <TouchableOpacity style={styles.to2} 
             onPress = {  ()  =>  { handler2() } }
         >
         <Icon  name="arrow-right" size={22 }  color="#fff" /> 

         </TouchableOpacity>
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
  },  

   
  v1 : {
     
  
    backgroundColor: '#fff',  
    width : windowWidth  , 
    height :  "10%" , 

  }  , 

  v2 : {
    
  
    backgroundColor: 'red',  
    width : "100%"  ,   
    flexGrow : 0 ,
    height   :  "60%",  
    backgroundColor : "#fff"
  }  ,   

  v3 : {  

    flex : -1 , 
    width : "100%"  , 
    height : "10%" ,  
   flexDirection : "row"  , 
   justifyContent : "space-around"  ,  
   backgroundColor  : "#fff" ,
   borderBottomWidth : 2 ,  
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
       width : "38%" ,
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
      width : "30%" ,
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

  height : "100%"  , 
  width : "38%" ,
  backgroundColor : "#fff" , 
 textAlign : "center" , 
 textAlignVertical : "center" , 


} , 

t6 : {

 height : "100%"  , 
 width : "30%" ,
 backgroundColor : "#fff" , 
 textAlign : "center" , 
 textAlignVertical : "center" ,  


}  , 

t7 : {

height : "100%"  , 
width : "20%" ,
backgroundColor : "#fff" , 
textAlign : "center" , 
 textAlignVertical : "center" , 


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

  }
  , 

  ip1 :{


  width : "80%"  , 
   backgroundColor : "#fff"  , 
   padding : 0 , 
   borderColor : "grey" , 
   borderWidth : 2 , 
   borderRadius :10 , 


  }

});
