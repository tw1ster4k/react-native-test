import * as React from "react"
import * as Font from "expo-font"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Animated, TouchableOpacity  } from 'react-native';
import Name from "./Components/Name";
import SearchIcon from "./Components/SearchIcon";
import Losos from "./Images/Squircle.png"
import { useState } from "react";



export default function App() {
  const [amount, setAmount] = useState(0)
  const [showQuantity, setShowQuantity] = useState(false);
  const quantityAnimation = React.useRef(new Animated.Value(0)).current
  const endAnimation = React.useRef(new Animated.Value(100)).current

  const endStyle = {
    opacity: quantityAnimation,
    transform: [
      {
        translateX: endAnimation.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 70],
        }),
      },
    ],
    marginTop:-27, marginLeft:50, height: 28, width: 27,backgroundColor: '#FF7A00'
  }

  const startStyle = {
    opacity: quantityAnimation,
    transform: [
      {
        translateX: quantityAnimation.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 70],
        }),
      },
    ],
    marginTop:-27, marginLeft:85, height: 28, width: 27,backgroundColor: '#FF7A00'
  }

  const handleIncrement = () => {
    setAmount(amount + 1);
    setShowQuantity(true);
    Animated.timing(quantityAnimation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleDecrement = () => {

    if (amount === 0) {
      setShowQuantity(false);
      Animated.timing(endAnimation, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: true,
      }).start(); }
    else {
      setAmount(amount - 1);
    }
  };

  const quantityStyle = amount ? startStyle : endStyle
   


/*   const animate_state = {
    start: 0,
    end:100
  }

  const value1 = React.useRef(new Animated.Value(animate_state.start)).current
  const value2 = React.useRef(new Animated.Value(animate_state.end)).current

  const startAnimate = () => {
    Animated.timing(value1, {toValue:animate_state.end,useNativeDriver: true, duration: 1000 }).start()
    setAmount(amount+1)
  }

  const endAnimate = () => {
    Animated.timing(value2,{toValue:animate_state.start,useNativeDriver: true, duration: 1000 }).start()
    setAmount(amount-1)
  } */


  return (
   <View style={styles.container}>
    <Name stroke="currentColor" style={styles.name} />
    <Text style={styles.text}>Доставка японо-перуанской кухни из ресторана Tsunami</Text>
    <TextInput style={styles.input} />
    <SearchIcon style={styles.icon} />
    <Image source={Losos} style={styles.image} />
    <Text style={styles.dish}>Нигири лосось 2 шт.</Text>
    <Text style={styles.description}>Опаленные суши нигири с соусом терияки, луковым кремом и кунжутом.</Text>
    <View style={{borderRadius: 10, borderColor: "#FF7A00", color:"#fff", backgroundColor: "#555555",width:111, borderWidth:2,display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row", marginTop:12,marginLeft:50}}>
      {/* style={{height:32,width:55.5,backgroundColor:"#555555",borderColor:"#FF7A00",borderTopLeftRadius:10,borderBottomLeftRadius:10,borderWidth:2,color:"#fff",fontWeight:400,fontSize:14, marginLeft:40,marginTop:12}} */}

        
        <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}} onPress={handleDecrement}>
        <Text style={styles.inner}>
          -
        </Text>
      </TouchableOpacity>
     
      <Text>850 руб</Text>
      {/* style={{height:32,width:55.5,backgroundColor:"#555555",borderColor:"#FF7A00",borderTopRightRadius:10,borderBottomRightRadius:10,marginTop:-32,marginLeft:93,borderWidth:2,color:"#fff",fontWeight:400,fontSize:14}} */}
      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}} onPress={handleIncrement}>
        <Text style={styles.inner}>
          +
        </Text>
      </TouchableOpacity>
    </View>
    { showQuantity && (
      <Animated.View style={quantityStyle}>
          <Text style={styles.number}>{amount}</Text>
        </Animated.View>
        )
        }
      
    <StatusBar style="auto" />   
  </View> 
  );
}

const styles = StyleSheet.create({

  container: {
    width:393,
    height:4195,
    backgroundColor: '#151515',
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
    textAlign:"center",
  },
  name:{
    marginTop:24,
    marginLeft:"22.5%",
    color:"#fff"
  },
  icon:{
    marginTop:-31.75,
    marginLeft:347.75,
  },
  image:{
    position:"relative",
    marginLeft:12.5,
    marginTop:26,
  },
  dish:{
    fontWeight:600,
    fontSize:18,
    color:"#ffffff",
    marginTop:-158,
    marginLeft:40,
  },
  description:{
    fontWeight:400,
    fontSize:13,
    color:"#fff",
    marginTop:12,
    marginLeft:40,
    width:176,
  },
  inner:{
    fontWeight:400,
    fontSize:13,
    color:"#fff",
    marginTop:6,
    marginLeft:3,
  },
  quantity:{
    height:32,
    width:27,
    backgroundColor:"#FF7A00",
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    marginTop:-32,
    marginLeft:140,
  },
  number:{
    fontWeight:400,
    fontSize:13,
    color:"#fff",
    marginTop:7,
    marginLeft:6
  }
});
