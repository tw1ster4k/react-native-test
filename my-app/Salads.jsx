import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Name from './Components/Name'
import SearchIcon from './Components/SearchIcon'
import Home from './Components/Home'
import Subject from './Components/Subject'
import { useSelector, useDispatch } from 'react-redux'
import NameWhite from './Components/NameWhite'
import SearchIconWhite from './Components/SearchIconWhite'
import HomeWhite from './Components/HomeWhite'
import SubjectWhite from './Components/SubjectWhite'

const Salads = ({navigation}) => {
  const dispatch = useDispatch()
  const subject = useSelector((state) => state.subject)

  const stylesBlack ={
    container: {
      width:393,
      height:"100%",
      backgroundColor: '#151515',
      overflow:'scroll'
    },
    text:{
      textAlign:"center",
      width:380,
      marginTop:24,
      marginLeft:10,
      color:"#ffffff",
      fontSize:14,
      fontWeight:400,
    },
    input:{
      width:368,
      height:40,
      backgroundColor: "#555555",
      borderRadius:10,
      marginLeft:10,
      marginTop:24, 
      color:"#fff",
      borderWidth:1,
      borderColor:"#000000"
    },
    name:{
      marginTop:24,
      marginLeft:"22.5%",
    },
    icon:{
      marginTop:-31.75,
      marginLeft:347.75,
    },
    tab:{
      color:"#fff",
      width:600,
      fontSize:24,
      marginTop:34,
      marginLeft:10
    },
    card:{
      width:368,
      marginTop:18,
      marginLeft: 10,
      backgroundColor:"#222222",
      borderRadius:10,
      borderWidth:2,
      borderColor:"#555555"
    },
    title:{
      width:336,
      fontWeight:400,
      fontSize:14,
      color:"#fff",
      marginTop:16,
      marginLeft:16
    },
    minus:{
      fontWeight:400,
      fontSize:20,
      color:"#fff",
      marginRight:10
    },
    plus:{
      fontWeight:400,
      fontSize:20,
      color:"#fff",
      marginLeft: 10
    },
    footer:{
      position:'absolute',
      left:0,
      right:0,
      bottom:10,
      width:"100%",
      flexDirection:'row'
    },
    homeButton:{
      marginEnd:12,
      marginLeft:10
    },
    subject:{
      marginLeft:8,
      marginEnd:12
    },
    favorites:{
      height:48,
      width:112,
      backgroundColor:'#555555',
      borderRadius:10,
      justifyContent:'center',
      marginLeft:125,
      marginEnd:12,
      alignItems:"center",
      borderWidth:2,
      borderColor:"#ff7a00"
    },
    price:{
      color:"#fff",
      fontWeight:600,
      fontSize:14
    },
    quantity:{
      color:'#fff',
      fontWeight:400,
      fontSize:10
    },
    button:{
      borderRadius:10,
      color:"#fff", 
      backgroundColor: "#555555",
      width:111,
      display:"flex", 
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-around", 
      margin:16,
    },
    cost:{
      color:"#fff"
    }
  }

  const stylesWhite = {
    container: {
      width:393,
      height:"100%",
      backgroundColor:"#fff",
      overflow:'scroll'
    },
    text:{
      textAlign:"center",
      width:380,
      marginTop:24,
      marginLeft:10,
      color:"#1c1c1c",
      fontSize:14,
      fontWeight:400,
    },
    input:{
      width:368,
      height:40,
      borderRadius:10,
      marginLeft:10,
      marginTop:24,
      borderWidth:2,
      borderColor:"#bbb",
      color:"#1c1c1c"
    },
    name:{
      marginTop:24,
      marginLeft:"22.5%",
    },
    icon:{
      marginTop:-31.75,
      marginLeft:347.75,
    },
    tab:{
      color:"#1c1c1c",
      width:600,
      fontSize:24,
      marginTop:34,
      marginLeft:10
    },
    card:{
      width:368,
      marginTop:18,
      marginLeft: 10,
      borderRadius:10,
      borderWidth:2,
      borderColor:"#bbb"
    },
    title:{
      width:336,
      fontWeight:400,
      fontSize:14,
      color:"#1c1c1c",
      marginTop:16,
      marginLeft:16
    },
    minus:{
      fontWeight:400,
      fontSize:20,
      color:"#1c1c1c",
      marginRight:10
    },
    plus:{
      fontWeight:400,
      fontSize:20,
      color:"#1c1c1c",
      marginLeft: 10
    },
    footer:{
      position:'absolute',
      left:0,
      right:0,
      bottom:10,
      width:"100%",
      flexDirection:'row'
    },
    homeButton:{
      marginEnd:12,
      marginLeft:10
    },
    subject:{
      marginLeft:8,
      marginEnd:12
    },
    favorites:{
      height:48,
      width:112,
      backgroundColor:'#fff',
      borderRadius:10,
      justifyContent:'center',
      marginLeft:125,
      marginEnd:12,
      alignItems:"center",
      borderWidth:2,
      borderColor:"#bbb"
    },
    price:{
      color:"#1c1c1c",
      fontWeight:600,
      fontSize:14
    },
    quantity:{
      color:'#1c1c1c',
      fontWeight:400,
      fontSize:10
    },
    button:{
      borderRadius:10,
      color:"#1c1c1c", 
      backgroundColor: "#d9d9d9",
      width:111,
      display:"flex", 
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-around", 
      margin:16
    },
    cost:{
      color:"#1c1c1c",
      fontWeight:400,
      fontSize:16
    }
  }

    const styles = StyleSheet.create(subject ? stylesWhite : stylesBlack)

        const salads = useSelector((state) => state.salads)
        const price = useSelector((state) => state.price)
        const basket = useSelector((state) => state.favorites)
    

  return (
    <View>

    <ScrollView style={styles.container}>
      { subject ?
      <NameWhite style={styles.name} />
        :
        <Name stroke="currentColor" style={styles.name} />
      }
        <Text style={styles.text}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск' />
        {subject ?
       <SearchIconWhite style={styles.icon} />  
       :
          <SearchIcon style={styles.icon} />
        }
        <Text style={styles.tab}>Салаты</Text>
        {salads.map((el, index) => 
        <View key={index} style={styles.card}>
            <Text style={styles.title}>{el.title}</Text>
            <View style={styles.button}>
        <Pressable style={{height:"100%",width:55.5, alignItems:'center',}} >
        <Text style={styles.minus}>
          -
        </Text>
      </Pressable>
      <Text style={styles.cost}>{el.price} руб</Text>
      <Pressable style={{height:"100%",width:55.5, alignItems:'center'}} >
        <Text style={styles.plus}>
          +
        </Text>
      </Pressable>
    </View>
        </View>
        )}


    <StatusBar style="auto" />   
    </ScrollView>
    <View style={styles.footer}>    
          <Pressable style={styles.homeButton} onPress={() => navigation.navigate("Меню", {name:"Меню"})}>
            {subject ?
              <HomeWhite />
                :
              <Home />
            }
          </Pressable>
          <Pressable style={styles.subject} onPress={() => dispatch({type:"ADD_SUBJECT", payload:!subject})}>
            {subject ?
            <SubjectWhite />
             : 
              <Subject />
            }
          </Pressable>
          <Pressable style={styles.favorites} onPress={() => navigation.navigate("Избранное", {name:"Избранное"})}>
            <Text style={styles.price}>{price ? `${price} руб` : 'Корзина'}</Text>
            <Text style={styles.quantity}>{basket.length ? `${basket.length} товаров` : "пусто"}</Text>
          </Pressable>
    </View>
  </View>
  )
}

export default Salads