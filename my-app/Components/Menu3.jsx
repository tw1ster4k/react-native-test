import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {StyleSheet, View, TouchableOpacity, ScrollView, Image, Text, ImageBackground, Pressable} from 'react-native'
import Name from './Name'
import LososCard from "./Images/LososCard.png"
import Plate from './Plate'
import Sushi from "./Images/Sushi.png"
import White from "./Images/white.jpg"
import { useState } from 'react'


const Menu3 = () => {
    const [amount, setAmount] = useState(0)
  return (
    <ScrollView style={styles.container}>
        <Name style={styles.name} />
        <Text style={styles.text}>Доставка японо-перуанской кухни из ресторана Tsunami</Text>
        <Text style={styles.orangeText}>Готовим и доставляем с 11.00 до 23.00</Text>
        <View style={styles.navbar}>
                <Text style={styles.link}>Доставка и оплата</Text>
                <Text style={styles.link}>О компании</Text>
                <Text style={styles.link}>Контакты</Text>
        </View>
        <Text style={styles.tab}>Суши</Text>
        <View style={styles.card}>
            <Image source={LososCard} style={styles.imgCard} />
            <Text style={styles.dish}>Нигири лосось 2 шт.</Text>
            <Text style={styles.depiction}>Суши нигири с соусом терияки, луковым кремом и кунжутом.</Text>
            <Plate style={styles.svg} />
            <Text style={styles.mass}>92 гр</Text>
            <Text style={styles.price}>390 руб</Text>
            <Pressable style={styles.button1}>
                <Text style={styles.plus}>+ Добавить</Text>
            </Pressable>
        </View>
        <View style={styles.card}>
        <Image source={Sushi} style={styles.imgCard} />
            <Text style={styles.dish}>Нигири лосось 2 шт.</Text>
            <Text style={styles.depiction}>Суши нигири с соусом терияки, луковым кремом и кунжутом.</Text>
            <Plate style={styles.svg} />
            <Text style={styles.mass}>92 гр</Text>
            <Text style={styles.price}>390 руб</Text>
            <View style={styles.button2}>
                {
                    amount ? 
                    <Pressable style={styles.buttonMinus} onPress={() => setAmount(amount-1)}>
                        <Text style={styles.minusText}>-</Text>
                    </Pressable> : ""
                    }
                    {
                        amount ? 
                        <Text style={styles.amount}>{amount}</Text> : ""
                    }
                    <Pressable style={amount ? styles.buttonPlus : styles.buttonPlusNotAmount} onPress={() => setAmount(amount+1)}>
                        <Text style={styles.plusText}>+</Text>
                    </Pressable>
            </View>
        </View>
    <StatusBar style='auto' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    width:393,
    height:"100%",
    backgroundColor:"#2222222",
    overflow:'scroll'
  },
  name:{
    marginLeft:97,
    marginTop:16
  },
  text:{
    width:360,
    fontWeight:700,
    color:"#eee",
    fontSize:14,
    marginTop:9.11,
    marginLeft:17,
    textAlign:"center"
  },
  orangeText:{
    fontWeight:700,
    fontSize:12,
    textAlign:"center",
    textDecorationLine:"underline",
    color:"#ff7a00",
    marginTop:8
  },
  navbar:{
    width:"100%",
    height:40,
    backgroundColor:"#444444",
    display:'flex',
    marginTop:16,
    justifyContent:"space-evenly",
    alignItems:'center',
    flexDirection:'row'
  },
  link:{
    fontWeight:700,
    fontSize:12,
    color:"#eee"
  },
  tab:{
    fontWeight:700,
    fontSize:24,
    color:"#fff",
    marginTop:40,
    marginLeft:17,
  },
  card:{
    width:360,
    height:222,
    marginTop:16,
    marginLeft:17,
    borderRadius:8,
    borderWidth:2,
    borderColor:"#555555"
  },
  imgCard:{
    width:172,
    height:218,
    borderBottomLeftRadius:8,
    borderTopLeftRadius:8,
    position:"relative",
  },
  dish:{
    fontWeight:600,
    fontSize:14,
    color:"#fff",
    marginLeft:183,
    position:"absolute",
    marginTop:12,
  },
  depiction:{
    width:165,
    fontWeight:400,
    fontSize:11,
    position:'absolute',
    marginLeft:183,
    marginTop:34,
  },
  svg:{
    position:'absolute',
    marginLeft:183,
    marginTop:84
  },
  mass:{
    fontWeight:400,
    fontSize:11,
    position:'absolute',
    marginLeft:203,
    marginTop:83,
  },
  price:{
    fontWeight:700,
    fontSize:18,
    position:"absolute",
    marginLeft:183,
    marginTop:105
  },
  button1:{
    width:116,
    height:40,
    backgroundColor:"#ff7a00",
    borderRadius:100,
    position:'absolute',
    marginLeft:183,
    marginTop:132,
    alignItems:'center'
  },
  plus:{
    fontWeight:700,
    fontSize:14,
    marginTop:10,
  },
  button2:{
    height:40,
    borderRadius:100,
    backgroundColor:"#555555",
    position:'absolute',
    marginLeft:183,
    marginTop:132,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  buttonMinus:{
    width:34,
    height:34,
    borderRadius:100,
    borderWidth:1,
    borderColor:"#c7cdd2",
    alignItems:'center',
    justifyContent:'center',
    marginLeft:4,
    backgroundColor:"#fff"
  },
  amount:{
    marginLeft:8,
    fontWeight:700,
    fontSize:14
  },
  buttonPlus:{
    width:34,
    height:34,
    borderRadius:100,
    backgroundColor:"#02bb97",
    marginLeft:8,
    marginRight:4,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonPlusNotAmount: {
    width:34,
    height:34,
    borderRadius:100,
    backgroundColor:"#02bb97",
    marginLeft:4,
    marginRight:4,
    alignItems:'center',
    justifyContent:'center',
  },
  minusText:{
    color:"#02bb97",
    fontWeight:700,
    fontSize:18
  },
  plusText:{
    fontWeight:700,
    fontSize:18
  }
})

export default Menu3