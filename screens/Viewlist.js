import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import   React  , { useState , useEffect }   from 'react';  
import axios from  "axios"  ; 


export default function Viewlist( {  route  ,  navigation  }) {    

  const [   data  , setData  ] = useState([]) ;   //   data  for showing all the info   

  const  base_url  = "http://127.0.0.1:8000/admin/wastecollectorview"  ; 


   const getMovies = async () => {
    try {
      const response = await fetch( 'http://10.0.2.2:8000/admin/wastecollectorview'  , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    , 
    body: JSON.stringify({
       
      search_key :"",
      page_no :"1",
      limit :"10"
 
  }),
}
     );
      const json = await response.json();
        console.log(json);
    } catch (error) {
      console.error(error);
    }  
  };

  useEffect(() => {
    getMovies();
  }, [ ]);



  return (
    <View style={styles.container}> 
  
      <StatusBar style="auto" />  

      <View style={styles.v1}>  

      </View>   

      
      <View style={styles.v2}>  

       </View>   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },  

   
  v1 : {
     
    flex : -1   , 
    backgroundColor: 'red',  
    width : "100%"  , 
    height : "10%"  , 

  }  , 

  v2 : {
    
    flex : -1   , 
    backgroundColor: 'red',  
    width : "100%"  , 
    height : "90%"  ,  
    backgroundColor : "blue"
  }
});
