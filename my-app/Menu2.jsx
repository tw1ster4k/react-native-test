import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ScrollView, Text, TextInput, Pressable  } from 'react-native'
import Name from './Components/Name'
import SearchIcon from './Components/SearchIcon'
import NameWhite from './Components/NameWhite'
import SearchIconWhite from './Components/SearchIconWhite'
import HomeWhite from './Components/HomeWhite'
import SubjectWhite from './Components/SubjectWhite'

import Home from './Components/Home'
import Subject from './Components/Subject'
import { useSelector, useDispatch } from 'react-redux'


const Menu2 = ({navigation}) => {
  
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.subject)
  const price = useSelector((state) => state.price)
  const basket = useSelector((state) => state.favorites) 


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
      color:"#fff",
      borderWidth:1,
      borderColor:"#000000",
    },
    name:{
      marginTop:64,
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
      borderWidth:2,
      borderColor:"#FF7A00",
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
    borderColor:"#bbbbbb",
    color:"#1c1c1c"
  },
  name:{
    marginTop:64,
    marginLeft:"22.5%",
  },
  icon:{
    marginTop:-31.75,
    marginLeft:347.75,
    fill:'#231f20'
  },
  tab:{
    color:"#1c1c1c",
    width:600,
    fontSize:24,
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
    borderRadius:10,
    justifyContent:'center',
    backgroundColor:"#fff",
    marginLeft:125,
    marginEnd:12,
    alignItems:"center",
    borderWidth:2,
    borderColor:"##FF7A00"
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
 }

    const styles = StyleSheet.create(subject ? whiteStyles : blackStyles)
    const category = ["Салаты","Холодные закуски","Горячие закуски","Икорный бар","Морепродукты","Супы","Крупа и паста","Горячее","Мангал","Тесто и начинка"]

  return (
    <View>

    <ScrollView style={styles.container}>
      {
        subject ?
        <NameWhite style={styles.name} />
        :
        <Name style={styles.name} />
      }
    
        <Text style={styles.text}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск'   />
        { subject ?
          <SearchIconWhite style={styles.icon} /> 
          :
          <SearchIcon style={styles.icon} />
        }
        <Text style={styles.tab}>Меню</Text>
        <View style={styles.categories}>
            {category.map((el, index) => 
                <Pressable key={index} style={styles.category} onPress={() => navigation.navigate(el)}>
                    <Text style={styles.title}>{el}</Text>
                </Pressable>
            )}
        </View>
        <Text style={styles.warning}t>Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, пожалуйста, предупредите об этом Вашего официанта. Меню является рекламной продукцией нашего ресторана. Утвержденное контрольное меню с выходами блюд и сведениями о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов находится в уголке потребителя и предоставляется по первому Вашему требованию.</Text>
    </ScrollView>
        <View style={styles.footer}>
              <Pressable style={styles.homeButton} onPress={() => navigation.navigate("Меню")}>
              { subject ?
              <HomeWhite />
                :
                <Home />
              }
              </Pressable>
              <Pressable style={styles.subject} onPress={() =>  dispatch({type:"ADD_SUBJECT", payload:!subject})}>
                { subject ?
                <SubjectWhite />
                :
                  <Subject />
                }
              </Pressable>
              <Pressable style={styles.favorites} onPress={() => navigation.navigate("Избранное")}>
                  <Text style={styles.price}>{price ? `${price} руб` : 'Корзина'}</Text>
                  <Text style={styles.quantity}>{basket.length ?  `${basket.length} товаров` : 'пусто'}</Text>
              </Pressable>
        </View>
          <StatusBar  style="auto" />   
          </View>
  )
}

export default Menu2