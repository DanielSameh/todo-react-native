import React,{useState} from 'react'

import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default  function HomeScreen ({navigation})  {
const [todo, setTodo] = useState([]);


    return(<View>
      <View style={styles.CreateStyle} >
      <Text style={{color:'white', fontSize: 30, fontWeight: 'bold'}}>To-Do List</Text>
      <TouchableOpacity>
      <Ionicons  name="create" size={30} color="white" />
      </TouchableOpacity>
      </View>
      <View style={styles.InputBackground}>
      <TextInput
        placeholder= 'Add New Todo'
         style={styles.InputStyle}
         value={}
         />
          
         <TouchableOpacity style={{flex:1, alignSelf: 'center', marginLeft: 15}}> 
      <AntDesign name="pluscircle" size={24} color="black" />
      </TouchableOpacity>
     
      </View>
      <FlatList 
      	data= {Friends}
        renderItem= {({item}) => {
          return <Text>{item}</Text>
        }} />

      
        
    </View>)
}

const styles = StyleSheet.create({
    CreateStyle:{
      flexDirection: 'row',
      backgroundColor: '#2980b9',
     padding: 15,
     justifyContent: 'space-around'
     
    },
    InputStyle:{
      fontSize:18,
      marginHorizontal: 15,
      flex: 6,
    },
    InputBackground:{
      backgroundColor: '#f3f3f3',
      height:50,
      
      borderRadius: 5,
      flexDirection: 'row',
      
    }

})

