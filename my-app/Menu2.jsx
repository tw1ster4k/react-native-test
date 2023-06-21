import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ScrollView, Text, TextInput, Pressable  } from 'react-native'
import Name from './Components/Name'
import SearchIcon from './Components/SearchIcon'

import Home from './Components/Home'
import Subject from './Components/Subject'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


const Menu2 = ({navigation}) => {
  
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.subject)
/*   const [white, setWhite] = useState(false) */

  const blackStyles = {
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
    },
    name:{
      marginTop:24,
      marginLeft:"22.5%",
      fill:"#fff"
    },
    icon:{
      marginTop:-31.75,
      marginLeft:347.75,
    },
    tab:{
      color:"#fff",
      width:700,
      fontSize:18,
      marginTop:34,
      marginLeft:10
    },
    categories:{
      width:393,
      height:250,
      display:"flex",
      flexDirection:"column",
      flexWrap:"wrap",
      alignContent:"space-around",
      justifyContent:"space-between",
      marginTop:18,
    },
    title:{
      fontWeight:400,
      fontSize:14,
      color:"#fff",
      marginTop:15,
      marginLeft:16
    },
    category:{
          width:176,
          height:48,
          backgroundColor:"#222222",
          borderRadius:10,
          borderWidth:2,
          borderColor:"#555555",
    },
    warning:{
      width:368,
      marginTop:34,
      marginLeft:10,
      fontWeight:400,
      fontSize:14,
      color:"#bbb",
      marginEnd:300,
    },
    homeButton:{
      marginEnd:12,
      marginLeft:10
    },
    footer:{
      position:'absolute',
      left:0,
      right:0,
      bottom:10,
      width:"100%",
      flexDirection:'row'
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
      alignItems:"center"
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
    }
  }
 const whiteStyles = {
  container: {
    width:393,
    height:"100%",
    backgroundColor: '#fff',
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
    borderWidth:1,
    borderColor:"#bbbbbb"
  },
  name:{
    marginTop:24,
    marginLeft:"22.5%",
    fill:"#000000"
  },
  icon:{
    marginTop:-31.75,
    marginLeft:347.75,
    fill:'#231f20'
  },
  tab:{
    color:"#1c1c1c",
    width:700,
    fontSize:18,
    marginTop:34,
    marginLeft:10
  },
  categories:{
    width:393,
    height:250,
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    alignContent:"space-around",
    justifyContent:"space-between",
    marginTop:18,
  },
  title:{
    fontWeight:400,
    fontSize:14,
    color:"#1c1c1c",
    marginTop:15,
    marginLeft:16
  },
  category:{
        width:176,
        height:48,
        borderRadius:10,
        borderWidth:2,
        borderColor:"#bbbbbb",
  },
  warning:{
    width:368,
    marginTop:34,
    marginLeft:10,
    fontWeight:400,
    fontSize:14,
    color:"#555555",
    marginEnd:300,
  },
  homeButton:{
    marginEnd:12,
    marginLeft:10
  },
  footer:{
    position:'absolute',
    left:0,
    right:0,
    bottom:10,
    width:"100%",
    flexDirection:'row'
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
    alignItems:"center"
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
  }
 }

    const styles = StyleSheet.create(subject ? whiteStyles : blackStyles)
    const category = ["Салаты","Холодные закуски","Горячие закуски","Икорный бар","Морепродукты","Супы","Крупа и паста","Горячее","Мангал","Тесто и начинка"]

  return (
    <View>

    <ScrollView style={styles.container}>
        <Name stroke="currentColor" style={styles.name} />
        <Text style={styles.text}>Доставка японо-перуанской кухни из ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск'   />
        <SearchIcon style={styles.icon} />
        <Text style={styles.tab}>Меню</Text>
        <View style={styles.categories}>
            {category.map((el, index) => 
                <Pressable key={index} style={styles.category} onPress={() => navigation.navigate(`${el}`, {name:el})}>
                    <Text style={styles.title}>{el}</Text>
                </Pressable>
            )}
        </View>
        <Text style={styles.warning}t>Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, пожалуйста, предупредите об этом Вашего официанта. Меню является рекламной продукцией нашего ресторана. Утвержденное контрольное меню с выходами блюд и сведениями о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов находится в уголке потребителя и предоставляется по первому Вашему требованию.</Text>
    </ScrollView>
        <View style={styles.footer}>
              <Pressable style={styles.homeButton}>
              <Home />
              </Pressable>
              <Pressable style={styles.subject} onPress={() =>  dispatch({type:"ADD_SUBJECT", payload:!subject}) /* setWhite(!white) */}>
                <Subject />
              </Pressable>
              <Pressable style={styles.favorites}>
                  <Text style={styles.price}>2390 руб</Text>
                  <Text style={styles.quantity}>2 товара</Text>
              </Pressable>
        </View>
          <StatusBar style="auto" />   
          </View>
  )
}

export default Menu2