import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, ScrollView, Pressable, Images } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Name from './Components/Name'
import NameWhite from './Components/NameWhite'
import SearchIcon from './Components/SearchIcon'
import SearchIconWhite from './Components/SearchIconWhite'
import Home from './Components/Home'
import HomeWhite from './Components/HomeWhite'
import Subject from './Components/Subject'
import SubjectWhite from './Components/SubjectWhite'

const Basket = ({navigation}) => {
    const dispatch = useDispatch()
    const subject = useSelector((state) => state.subject)
    const price = useSelector((state) => state.price)
    const basket = useSelector((state) => state.favorites)

    const blackStyles = {
        container:{
            width:393,
            height:"100%",
            backgroundColor:"#151515",
            overflow:"scroll"
        },
        name:{
            marginTop:64,
            marginLeft:"22.5%",
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
          icon:{
            marginTop:-31.75,
            marginLeft:347.75,
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
        container:{
            width:393,
            height:'100%',
            backgroundColor:'#fff',
            overflow:'scroll'
        },
        name:{
            marginTop:64,
            marginLeft:"22.5%",
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
          icon:{
            marginTop:-31.75,
            marginLeft:347.75,
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
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:"#fff",
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
    }

    const styles = StyleSheet.create(subject ? whiteStyles : blackStyles)
  return (
    <View>
        <ScrollView style={styles.container}>
            {subject ?
            <NameWhite style={styles.name} />
                :
            <Name style={styles.name} />
            }
            <Text style={styles.text}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
            <TextInput style={styles.input} placeholder='Поиск' />
            {subject ?
            <SearchIconWhite style={styles.icon} />
                :
            <SearchIcon style={styles.icon} />
            }
        
        </ScrollView>
        <View style={styles.footer}>
            <Pressable style={styles.homeButton} onPress={() => navigation.navigate("Меню")}>
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
            <Pressable style={styles.favorites} onPress={() =>  navigation.navigate("Избранное")}>
                <Text style={styles.price}>{price ? `${price} руб` : 'Корзина'}</Text>
                <Text style={styles.quantity}>{basket.length ?  `${basket.length} товаров` : 'пусто'}</Text>
            </Pressable>
        </View>
        <StatusBar style='auto' />
    </View>
    
  )
}

export default Basket