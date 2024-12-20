
import { StyleSheet, Text, View , TextInput  , TouchableOpacity, Dimensions  , StatusBar , KeyboardAvoidingView, ScrollView    } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';  
import   React  , { useState , useEffect   , useRef  }   from 'react';  
import { Dropdown } from 'react-native-element-dropdown';
import * as Location from "expo-location";
import { MaterialCommunityIcons } from '@expo/vector-icons';

 

//changemakers@soceo.de





export default function  Process(  {  route  ,  navigation  }) {   

   
 /*  
    
  console.log( "process")  ; 
  console.log( route.params.token)  ;  */

  const  token =    route.params.token ;



  const [location, setLocation] = React.useState(null);  // for capturing gps 
  const [errorMsg, setErrorMsg] = React.useState(null);
   
       
  const [   state1  , setState1 ] = useState("");
  const [   state2  , setState2 ] = useState("");
  const [   state3 , setState3 ] = useState(""); 
  const [   state4  , setState4 ] = useState(""); 
  const [   state5  , setState5 ] = useState("");
  const [   state6  , setState6 ] = useState("");
  const [   state7 , setState7 ] = useState("");
  const [   state8  , setState8 ] = useState("");
  const [   state9  , setState9 ] = useState( false ); 
  const [   state10 ,setState10 ] = useState("");

    
  const [value1, setValue1] = React.useState( null);  //  dropdown value  for selecting sex 
  
  

  const [isFocus1, setIsFocus1] = React.useState(false);    // dropdown value  for selecting sex 
  
      
  const [value2, setValue2] = React.useState( null);  //  dropdown value  for selecting cardtype

  const [isFocus2, setIsFocus2] = React.useState(false);    //dropdown value  for selecting  cardtype  


  const [ dropdownValue1  , setDropdownValue1] = React.useState(""); 
  const [ dropdownValue2  , setDropdownValue2] = React.useState(""); 
 
  React.useEffect(() => {  

    
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync(); 
      
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert("error while capturing gps!") ; 
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log( location.coords.longitude) ; 
      console.log( location.coords.latitude) ; 
      setLocation( `${location.coords.latitude},${location.coords.longitude}`);
  
    })();
  }, []);
 
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location ; 
  }


 
  const [selectedLanguage, setSelectedLanguage] = useState("hjghj");
  const screentype  =   route.params.screentype   ; 
  
  console.log( state1)  ; 
  const dropdowndata1 = [
    { label: 'Male', value: '1' },     
    { label: 'Female', value: '2' },
    { label: 'Others', value: '3' },
   
  ];  
   
  const dropdowndata2 = [
    { label: 'Aadhaar Card', value: '1' },
    { label: 'Voter Card', value: '3' },
  ];  
     

  


   
 
 const submit1  = () => {    //  iwc
   
    
  console.log( state2)  ; 
  console.log( state1)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state5)  ;   

    
  console.log( state6)  ;  
  console.log( value1)  ; 
  console.log( value2)  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/admin/registercollector'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :  token , 
        
        }
    , 
    body: JSON.stringify({
       
      
      "wmu_code": state1 ,
      "wc_name":  state2,
      "sex":  dropdownValue1 ,
      "age":   state3,
      "address":   state4,
      "card_type":  dropdownValue2 ,
      "card_no":  state5,
      "contact_no":  state6
  
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
        

        if( json.message === "Invalid Token"){
             
          alert("Please Log In Again!") ; 
          navigation.navigate( "Login") ; 

        }else if (   json.message ===  "Registered Successfully."  ){

          alert( json.message) ; 
          setState1("") ;
          setState2( "") ;
          setState3("") ;
          setState4("")  ;
          setState5("")  ;
          setState6("") ;
          setValue1("")  ;
         setValue2("")  ; 

        }else{
          alert( json.message) ; 

        }
       
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



  
   
 const submit2  = () => {    //  uw
   
    
  console.log( state2)  ; 
  console.log( state1)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state5)  ;   

    
  console.log( state6)  ;  
  console.log( state7)  ;  
  console.log( state8)  ;  
  console.log( value1)  ; 
  console.log( value2)  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/admin/uworkerreg'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token 
        
        }
    , 
    body: JSON.stringify({
       
      
      "wmu_code":  state1 ,
      "uw_name":  state2,
      "type_of_work":  state3,
      "sex": dropdownValue1,
      "age":  state4,
      "address": state5 ,
      "card_type":  dropdownValue2,
      "card_no":   state6 ,
      "contact_no":  state7,
      "mode_of_payment": state8
  
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json ); 
           
        if( json.message === "Invalid Token"){
             
          alert("Please Log In Again!") ; 
          navigation.navigate( "Login") ; 

        } else if (   json.message ===  "Registered Successfully."  ){

          alert( json.message) ; 
          setState1("") ;
          setState2( "") ;
          setState3("") ;
          setState4("")  ;
          setState5("")  ;
          setState6("") ;
          setState7("") ;
          setState8("") ;
          setValue1("")  ;
         setValue2("")  ; 

        }
        else{

          alert( json.message) ; 
        }  
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



  
   
  
   
 const submit3 = () => {    //  wmu
   
    
  console.log( state2)  ; 
  console.log( state1)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state5)  ;   

    
  console.log( state9)  ;  
 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/admin/wmureg'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :  token
        
        }
    , 
    body: JSON.stringify({
       
      "wmu_name":  state1 ,
      "capture_gps":   location ,
      "organisation":  state3,
      "organisation_head":  state4,
      "address":  state2,
      "contact_no":  state5
  
  
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
        
        if( json.message === "Invalid Token"){
             
          alert("Please Log In Again!") ; 
          navigation.navigate( "Login" ) ; 

        }else if (   json.message ===  "Registered Successfully."  ){

          alert( json.message) ; 
          setState1("") ;
          setState2( "") ;
          setState3("") ;
          setState4("")  ;
          setState5("")  ;
          setState9( false) ;
      

        }
        else{

          alert( json.message) ; 
        }
        
         
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



  

  
   
 const submit4= () => {    //  buy
   
    
  console.log( state2)  ; 
  console.log( state1)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state5)  ;   

    
  console.log( state6)  ;  
  console.log( state7)  ;  
  console.log( state8)  ;  
  console.log( value1)  ; 
  console.log( value2)  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/admin/buyersreg'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token 
        
        }
    , 
    body: JSON.stringify({
       
      
      "buyer_organisation": state1,
      "address":  state2,
      "contact_no":  state4,
      "contact_person": state3 ,
      "email_address":  state5
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);  
        
        if( json.message === "Invalid Token"){
             
          alert("Please Log In Again!") ; 
          navigation.navigate( "Login") ; 

        } else if (   json.message ===  "Registered Successfully."  ){

          alert( json.message) ; 
          setState1("") ;
          setState2( "") ;
          setState3("") ;
          setState4("")  ;
          setState5("")  ;
      

        } 
        else{

          alert( json.message) ; 
        }
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 
  
 } ; 



 const gpsHandler = () => {
  
  console.log( state9) ; 
  if(  state9 ===  false){
    setState9( !state9) ;
  }
    
       alert("Successfully captured GPS!") ; 
 }



  
  switch (  screentype ) {
  
     

    case "iwc"  :  

    return (  

  < KeyboardAvoidingView  style ={ styles.container }    >    

       <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />
 
  <ScrollView contentContainerStyle ={ styles.inner }>
      

  <View style={styles.v1}>
           
  
  <TouchableOpacity style ={ styles.to7}
   onPress = {  ( ) => { navigation.navigate("Viewlist"   , {  token : token ,    name :"Informal Waste Collector"  ,    api_end : "wastecollectorview"})}} >   

  <MaterialCommunityIcons name="format-list-bulleted" size={30} color="#000000" />
            <Text>View List</Text> 
  </TouchableOpacity> 


  </View>
       
       

   <View style={styles.v2} > 

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
 onChangeText = {  setState1 }  value = { state1 }  
     placeholder="Code of Waste Management Unit"  />    
    


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
             onChangeText = {  setState2 }  value = { state2 }   
            placeholder="Name of Informal Waste Collector"  />     


<View  style={styles.v3} >
              
 {/*               
<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
            placeholder="Sex"   />   
 */}
  

       <View  style={styles.to5}>  

           <Dropdown
          style={[styles.dropdown, isFocus1&& { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={ dropdowndata1}
          labelField="label"
          valueField="value"
          placeholder=  "Sex"
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {

            setDropdownValue1( item.label ); 
            setValue1(item.value);
            setIsFocus1(false);
          }}
         
        />          
           
           
      </View>

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
       onChangeText = {  setState3 }  value = { state3 }   
            placeholder="Age"    keyboardType="number-pad"   />   

  </View>     
    

    
<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2}  
      onChangeText = {  setState4 }  value = { state4 }  
            placeholder="Address"   />    

    
<View  style={styles.v3} >
              
             
       <View  style={styles.to5}>  

<Dropdown
style={[styles.dropdown, isFocus2&& { borderColor: 'blue' }]}
placeholderStyle={styles.placeholderStyle}
selectedTextStyle={styles.selectedTextStyle}
inputSearchStyle={styles.inputSearchStyle}
iconStyle={styles.iconStyle}
data={ dropdowndata2}
labelField="label"
valueField="value"
placeholder=  "ID Card Type"
value={value2}
onFocus={() => setIsFocus2(true)}
onBlur={() => setIsFocus2(false)}
onChange={item => { 

  setDropdownValue2( item.label) ; 
 setValue2(item.value);
 setIsFocus2(false);
}}

/>          


</View>
              
                          
              <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1}  
                  onChangeText = {  setState5 }  value = { state5 } 
                          placeholder="Card Number"  />   
              
</View> 

  
<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2}  
              onChangeText = {  setState6 }  value = { state6 }  
            placeholder="Contact Number"     keyboardType="number-pad"   />    
 


</View>
     

<View style={styles.v4}> 

    <TouchableOpacity  style={styles.to1}  
        onPress = {  ()  =>  { submit1() } }

    >
      <Text  style={styles.t2}   >
      Register
      </Text>
    </TouchableOpacity>

</View> 


   </ScrollView>
   </KeyboardAvoidingView >   
  );    
   













  

    case "uw" : 
    
    return (
    
    <KeyboardAvoidingView   style ={styles.container} >
   
  
   <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />

   <ScrollView   contentContainerStyle ={styles.inner}>
    
  <View style={styles.v1} >
        
   
   <TouchableOpacity style={ styles.to7}
        
      onPress = {  ( ) => { navigation.navigate("Viewlist"  , {   token : token ,    name :"Unit Worker"  ,   api_end : "unitworkerview"})}}
      >   
        <MaterialCommunityIcons name="format-list-bulleted" size={30} color="#000000" />
            <Text>View List</Text> 
   </TouchableOpacity> 
 
   
  </View>
    <View   style={styles.v5} >


    

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
       onChangeText = {  setState1 }  value = { state1 } 
        placeholder="Code of Waste Management Unit"  />     


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
  onChangeText = {  setState2 }  value = { state2 }     
        placeholder="Name of Worker"  />    


<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
  onChangeText = {  setState3}  value = { state3 }    
        placeholder="Type of Work"  />    


<View  style={styles.v7} >
                
                
<View  style={styles.to5}>  

<Dropdown
style={[styles.dropdown, isFocus1&& { borderColor: 'blue' }]}
placeholderStyle={styles.placeholderStyle}
selectedTextStyle={styles.selectedTextStyle}
inputSearchStyle={styles.inputSearchStyle}
iconStyle={styles.iconStyle}
data={ dropdowndata1}
labelField="label"
valueField="value"
placeholder=  "Sex"
value={value1}
onFocus={() => setIsFocus1(true)}
onBlur={() => setIsFocus1(false)}
onChange={item => {

  setDropdownValue1( item.label ) ; 
 setValue1(item.value);
 setIsFocus1(false);
}}

/>          


</View>
              
               
               
               <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                 onChangeText = {  setState4 }  value = { state4 } 
                           placeholder="Age"     keyboardType="number-pad"  />   
               
                 </View>   

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
  onChangeText = {  setState5 }  value = { state5 }   
        placeholder="Address"  />  


  
 
<View  style={styles.v7} >
                
<View  style={styles.to5}>  

<Dropdown
style={[styles.dropdown, isFocus2&& { borderColor: 'blue' }]}
placeholderStyle={styles.placeholderStyle}
selectedTextStyle={styles.selectedTextStyle}
inputSearchStyle={styles.inputSearchStyle}
iconStyle={styles.iconStyle}
data={ dropdowndata2}
labelField="label"
valueField="value"
placeholder=  "ID Card Type"
value={value2}
onFocus={() => setIsFocus2(true)}
onBlur={() => setIsFocus2(false)}
onChange={item => {

 setDropdownValue2( item.label ) ; 
 setValue2(item.value);
 setIsFocus2(false);
}}

/>          


</View>
              
              
               
               <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                 onChangeText = {  setState6}  value = { state6 }  
                           placeholder="Card Number"   />   
               
                 </View>   

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
  onChangeText = {  setState7 }  value = { state7}     
        placeholder="Contact Number"   keyboardType="number-pad"   />      

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
  onChangeText = {  setState8 }  value = { state8 }   
        placeholder="Mode of Payment"  />    

  </View>
  
      
   <View style={styles.v6}> 

<TouchableOpacity  style={styles.to1} 
    onPress = {  ()  =>  { submit2() } }
>
  <Text   style={styles.t2} >
  Register
  </Text>
</TouchableOpacity>

</View>


    </ScrollView>

   </KeyboardAvoidingView>
   
    )  ; 
   















   case "wmu"  :

   return (

   < KeyboardAvoidingView  style ={ styles.container }    >    

    <StatusBar 
            barStyle="dark-content"  
            backgroundColor = '#fff'
           />
     
      <ScrollView contentContainerStyle ={ styles.inner }>
          
    
      <View style={styles.v1}>
               
     
      <TouchableOpacity  style= { styles.to7}
       onPress = {  ( ) => { navigation.navigate("Viewlist"  ,  {   token : token  ,   name :"Waste Management Unit"   ,   api_end : "wmuview"})}} > 

        <MaterialCommunityIcons name="format-list-bulleted" size={30} color="#000000" />
           
                <Text> View List</Text> 
      </TouchableOpacity> 
    
    
      </View>
           
           
    
       <View style={styles.v2} >   

     
       <View  style={styles.v3} >
                  
      
    
       <TouchableOpacity  style={styles.to6} 
           onPress = {  ()  =>  { gpsHandler() } }
         
       >   
       
                    <Text  style={styles.t1} >Capture GPS</Text>

                  </TouchableOpacity>
                  
                  
                  <TextInput style={styles.gpsInput }  
                      
                      editable= { false}
                      placeholder={ ( state9 )? location : "Location" }   />    
                    </View>     

    
    <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2}  
        onChangeText = {  setState1 }  value = { state1 } 
               placeholder="Name of Unit"  />    
        
    
    
    <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
     onChangeText = {  setState2 }  value = { state2 }  
                placeholder="Address"  />     
    
    
    
        
    
        
    <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
     onChangeText = {  setState3 }  value = { state3 }   
                placeholder="Run by (Organisation)"   />    
    
      
    <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
     onChangeText = {  setState4 }  value = { state4 }
                placeholder="Head of the Organisation"    />    
      
    
    
      
    <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
     onChangeText = {  setState5 }  value = { state5 }   
                placeholder="Contact Number"     keyboardType="number-pad"   />    
     
    
    
    </View>
         
    
    <View style={styles.v4}> 
    
        <TouchableOpacity  style={styles.to1} 
             onPress = {  ()  =>  { submit3() } }
        >
          <Text  style={styles.t2}>
          Register
          </Text>
        </TouchableOpacity>
    
    </View> 
    
    
       </ScrollView>
       </KeyboardAvoidingView >   
    )  ; 
































   case "buy"  : 

   return (

   
  < KeyboardAvoidingView  style ={ styles.container }    >    

  <StatusBar 
          barStyle="dark-content"  
          backgroundColor = '#fff'
         />
   
    <ScrollView contentContainerStyle ={ styles.inner }>
        
  
    <View style={styles.v1}>

    <TouchableOpacity  style={ styles.to7}  onPress = {  ( ) => { navigation.navigate("Viewlist" ,  {     token : token  ,   name :"Buyer's List"  ,     api_end : "buyersview"} )}} >           
    <MaterialCommunityIcons name="format-list-bulleted" size={30} color="#000000" />

              <Text>View List</Text> 
    </TouchableOpacity> 
  
  
    </View>
         
         
  
     <View style={styles.v2} > 
  
  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
   onChangeText = {  setState1 }  value = { state1}   
             placeholder="Name of Buyer Organisation"  />    
      
  
  
  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
   onChangeText = {  setState2 }  value = { state2 }   
              placeholder="Address"  />     
  
       
    
      
  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
   onChangeText = {  setState3 }  value = { state3 }  
              placeholder="Contact Person"   />    
  
          
   
    
  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
   onChangeText = {  setState4}  value = { state4 }   
              placeholder="Contact Number"   keyboardType="number-pad"   />    
   
  
    
  <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
   onChangeText = {  setState5 }  value = { state5 }   
              placeholder="Email Address"    />    
   
  
  
  </View>
       
  
  <View style={styles.v4}> 
  
      <TouchableOpacity  style={styles.to1}
            onPress = {  ()  =>  { submit4() } }
      >
        <Text style={styles.t2}>
        Register
        </Text>
      </TouchableOpacity>
  
  </View> 
  
  
     </ScrollView>
     </KeyboardAvoidingView >   

    )  ; 

}


}

const styles = StyleSheet.create({
  container: {
     
    flex : 1 , 
    backgroundColor: '#fff'  , 
   
  },  
  

  v1 : {
   
    width : "80%"  , 
    height : "10%"  , 
    backgroundColor : "#fff"  ,  
    flexDirection : "row"  , 
    justifyContent : "flex-end"  , 
    alignItems : "center"  , 

  }  ,  

  v2 : {

    width : "80%"  , 
    height : "50%"  , 
    backgroundColor : "#fff"  , 
    justifyContent : "space-between"  , 

  }  , 
   
  v3 : {

    width : "100%"  , 
    height : "10%"  , 
    backgroundColor : "#fff"  , 
    flexDirection : "row"  , 
    justifyContent : "space-between"  , 

  }
   , 

   v4 : {
    
    alignItems : "center"  , 
    width : "100%"  , 
    height : "40%"  , 
    backgroundColor : "#fff"  ,


   }  ,    
   
   
    v5 : {
        
       
       width : "100%" ,
       height : "60%" ,
       backgroundColor : "#fff"  ,   
       justifyContent : "space-between"  ,  
       alignItems : "center" , 

    }  ,  

    v6 : {

      width : "100%" ,
      height : "30%" ,
      backgroundColor : "#fff" , 
      alignItems :"center"  , 

    }  ,   

    v7 : {

            
    width : "80%"  , 
    height : "8%"  , 
    backgroundColor : "#fff"  , 
    flexDirection : "row"  , 
    justifyContent : "space-between"  , 


    }
     , 
   inner : { 

     flex : 1 , 
     backgroundColor : "#fff"  ,  
     alignItems : "center"  , 
   }  , 



   ip1 : {
      
     

    flex : -1 ,
    width : "47%" ,
    height : "100%" ,  
    backgroundColor : "#fff"  , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    paddingLeft : 15 , 

  }  ,    

   gpsInput : {
   

    
    flex : -1 ,
    width : "57%" ,
    height : "100%" ,  
    backgroundColor : "#fff"  , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,
    padding : 5 ,  

    
   

   }  , 

  ip2 : {
     
  
    flex : -1 ,
    width : "100%" ,
    height : "10%" ,  
    paddingLeft : 15 , 
    textAlign : "center" , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    backgroundColor : "#fff"  , 

  }  ,    
  

  ip3 : {

    flex : -1 ,
    width : "80%" ,
    height : "8%" ,  
    paddingLeft : 15 , 
    textAlign : "center"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    backgroundColor : "#fff"  , 


  }  , 
   
  
  to1 : {

    
    position : "absolute"  , 
    top : "10%" , 
    width : "60%" ,
    height : "15%" ,  
    backgroundColor : "#333D79"  ,   
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 , 
    alignItems : "center"  , 
    justifyContent : "center"  , 


  }
   ,  
   

     to5 : {

          
      flex : -1 ,
      width : "47%" ,
      height : "100%" ,   
      backgroundColor : "#fff"  , 
         borderColor : "grey"  , 
       borderWidth : 1 , 
        borderRadius : 28 , 
   


     }  , 


     to6 : {

          
      flex : -1 ,
      width : "40%" ,
      height : "100%" ,   
      backgroundColor : "#333D79"  , 
         borderColor : "grey"  , 
       borderWidth : 1 , 
        borderRadius : 28 , 
        alignItems : "center"   , 
        justifyContent : "center"  , 


     }   , 


     to7: {

      flexDirection : "row"  ,
      alignItems : "center" 
     }
    , 
    t1 : {
     color : "#fff"
    
    }  , 

    t2 : {
    
      color : "#FFFFFF"  ,
      fontWeight: '800' ,
     fontStyle: 'normal'  , 
      fontSize : 16 , 
     lineHeight: 22 , 
     textAlign: 'center' , 
     letterSpacing: -0.408 ,



    }
   , 

   dropdown: {
    height:  "100%" , 
    borderColor: 'gray',
    paddingHorizontal: 8, 

  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 14,
    color: "#0000004D"  , 
    fontWeight : "500" ,  
    textAlign : "center" , 
 
  },
  selectedTextStyle: {
    textAlign : "center" , 
    fontSize: 16 , 

  },
  iconStyle: {
    width: 20,
    height: 20,
  },  

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },



});
