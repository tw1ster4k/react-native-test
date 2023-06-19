import * as React from "react"
import * as Font from "expo-font"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Animated, TouchableOpacity, ScrollView  } from 'react-native';
import Name from "./Components/Name";
import SearchIcon from "./Components/SearchIcon";
import Losos from "./Images/Squircle.png";
import Ugor from "./Images/Ugor.png";
import Cloud from "./Components/Cloud";
import Triangle from "./Components/Triangle";
import Rice from "./Images/Rice.png"
import { useState } from "react";



export default function Menu1() {

  const [amount, setAmount] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const quantityAnimation = React.useRef(new Animated.Value(0)).current
  const anceAnimation = React.useRef(new Animated.Value(0)).current
  const riceAnimation = React.useRef(new Animated.Value(0)).current


  //стили 1 карты
  const endStyle = {
    transform: [
      {
        translateX: quantityAnimation
      },
    ],
    marginTop:-28.75, marginLeft:60, height: 28.75, width: 27,backgroundColor: '#FF7A00',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    position:"relative",
    zIndex:2
  }

  const startStyle = {
    transform: [
      {
        translateX: quantityAnimation
      },
    ],
    marginTop:-28.75, marginLeft:60 ,height: 28.75, width: 27,backgroundColor: '#FF7A00',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    position:"relative",
    zIndex:2
  }

  // стили 2 карты
  const anceStart = {
    transform: [
      {
        translateX: anceAnimation
      },
    ],
    marginTop:-24.75, marginLeft:60 ,height: 24.75, width: 27,backgroundColor: '#555555',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    position:"relative",
    zIndex:2
  }

  const acneEnd = {
    transform: [
      {
        translateX: anceAnimation
      },
    ],
    marginTop:-24.75, marginLeft:60, height: 24.75, width: 27,backgroundColor: '#555555',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    position:"relative",
    zIndex:2
  }

  //стили 3 карты
  const riceStart = {
    transform: [
      {
        translateX: riceAnimation
      },
    ],
    marginTop:-24.75, marginLeft:60 ,height: 24.75, width: 27,backgroundColor: '#555555',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    position:"relative",
    zIndex:2
  }

  const riceEnd = {
    transform: [
      {
        translateX: riceAnimation
      },
    ],
    marginTop:-24.75, marginLeft:60, height: 24.75, width: 27,backgroundColor: '#555555',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    position:"relative",
    zIndex:2
  }


// 1 карточка (анимация)
  const handleIncrement = () => {
    setAmount(amount + 1);
    Animated.timing(quantityAnimation, {
      toValue: 100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const handleDecrement = () => {
    if (amount-1 === 0) {
      setAmount(0)
      Animated.timing(quantityAnimation, {
        toValue: 50,
        duration: 250,
        useNativeDriver: true,
      }).start(); }
    else {
      setAmount(amount ? amount - 1 : 0);
    }
  };

//2 карточка (анимация)
  const ancheDecrement = () => {
    if (quantity-1 === 0) {
      setQuantity(0)
      Animated.timing(anceAnimation, {
        toValue: 50,
        duration: 250,
        useNativeDriver: true,
      }).start(); }
    else {
      setQuantity(quantity ? quantity - 1 : 0);
    }
  }

  const ancheIncrement = () => {
    setQuantity(quantity + 1);
    Animated.timing(anceAnimation, {
      toValue: 100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  // 3 карточка (анимация)

  const riceDecrement = () => {
    if (total-1 === 0) {
      setTotal(0)
      Animated.timing(riceAnimation, {
        toValue: 50,
        duration: 250,
        useNativeDriver: true,
      }).start(); }
    else {
      setTotal(total ? total - 1 : 0);
    }
  }

  const riceIncrement = () => {
    setTotal(total + 1);
    Animated.timing(riceAnimation, {
      toValue: 100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }


  //стили (начиная с 1 карточки)
  const quantityStyle = amount ? startStyle : endStyle;
  const acneStyle = quantity ? anceStart : acneEnd;
  const riceStyle = total ? riceStart : riceEnd;
   

  return (
   <ScrollView style={styles.container}>
    <Name stroke="currentColor" style={styles.name} />
    <Text style={styles.text}>Доставка японо-перуанской кухни из ресторана Tsunami</Text>
    <TextInput style={styles.input} />
    <SearchIcon style={styles.icon} />
    <View>

    <Image source={Losos} style={styles.image} />
    <Text style={styles.dish}>Нигири лосось 2 шт.</Text>
    <Text style={styles.description}>Опаленные суши нигири с соусом терияки, луковым кремом и кунжутом.</Text>
    <View style={{borderBottomLeftRadius:10,borderTopLeftRadius:10, borderColor: "#FF7A00", color:"#fff", backgroundColor: "#555555",width:111, borderWidth:2,display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row", marginTop:12,marginLeft:50,position:"relative", zIndex:3}}>
        <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center',}} onPress={handleDecrement}>
        <Text style={styles.minus}>
          -
        </Text>
      </TouchableOpacity>
      <Text>850 руб</Text>
      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}} onPress={handleIncrement}>
        <Text style={styles.plus}>
          +
        </Text>
      </TouchableOpacity>
    </View>
      <Animated.View style={quantityStyle}>
          <Text style={styles.number}>{amount ? amount : 1}</Text>
        </Animated.View>
    </View>

    <View>
          <Image source={Ugor} style={styles.image} />
          <Cloud  style={styles.cloud} />
          <Triangle style={styles.triangle} />
          <Text style={styles.message}>Хит сезона</Text>
          <Text style={styles.acne}>Сашими угорь</Text>
          <Text style={styles.information}>Сашими (нарезка из охлажденной рыбы) угорь с свежим миксом овощей и листьями салата, политые соусом унаги</Text>
          <View style={{borderBottomLeftRadius:10,borderTopLeftRadius:10,color:"#fff", backgroundColor: "#555555",width:111,display:"flex", alignItems:"center",flexDirection:"row",justifyContent:"space-around", marginTop:1.5,marginLeft:52.3,position:"relative", zIndex:3}}>
        <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center',}} onPress={ancheDecrement}>
        <Text style={styles.minus}>
          -
        </Text>
      </TouchableOpacity>
      <Text>720 руб</Text>
      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}} onPress={ancheIncrement}>
        <Text style={styles.plus}>
          +
        </Text>
      </TouchableOpacity>
    </View>
      <Animated.View style={acneStyle}>
          <Text style={styles.number}>{quantity ? quantity : 1}</Text>
        </Animated.View>
    </View>
    <View>
        <Image source={Rice} style={styles.image} />
        <Text style={styles.dish}>Рис с креветками</Text>
        <Text style={styles.depiction}>Сочный и рассыпчатый рис с жареными овощами и обжаренными тигровыми креветками, декорируется бобами эдамамэ</Text>
        <View style={{borderBottomLeftRadius:10,borderTopLeftRadius:10,color:"#fff", backgroundColor: "#555555",width:111,display:"flex", alignItems:"center",flexDirection:"row",justifyContent:"space-around", marginTop:12,marginLeft:52.3,position:"relative", zIndex:3}}>
        <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center',}} onPress={riceDecrement}>
        <Text style={styles.minus}>
          -
        </Text>
      </TouchableOpacity>
      <Text>690 руб</Text>
      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}} onPress={riceIncrement}>
        <Text style={styles.plus}>
          +
        </Text>
      </TouchableOpacity>
    </View>
      <Animated.View style={riceStyle}>
          <Text style={styles.number}>{total ? total : 1}</Text>
        </Animated.View>
    </View>

    <Text style={{marginTop:100, marginLeft:"45%"}}>this text makes no sense</Text>

      
    <StatusBar style="auto" />   
  </ScrollView> 
  );
}

const styles = StyleSheet.create({

  container: {
    width:393,
    height:4195,
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
    zIndex:0  
  },
  dish:{
    fontWeight:600,
    fontSize:18,
    color:"#ffffff",
    marginTop:-158,
    marginLeft:50,
  },
  description:{
    fontWeight:400,
    fontSize:13,
    color:"#fff",
    marginTop:12,
    marginLeft:50,
    width:176,
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
  },
  cloud:{
    marginLeft:50,
    marginTop:-169
  },
  triangle:{
    marginLeft:60,
    marginTop:-2
  },
message:{
  color:"#ffffff",
    height:14,
    fontSize:12,
    fontWeight:400,
    marginLeft:55,
    marginTop:-26
},
acne:{
  marginLeft:52.3,
  marginTop:20,
  fontWeight:600,
  fontSize:18,
  color:"#ffffff",
},
information:{
  width:289,
  fontWeight:400,
  color:"#fff",
  fontSize:13,
  marginLeft:52.3,
  marginTop:12,
},
depiction:{
  marginTop:12,
  marginLeft:50,
  color:"#fff",
  width:274,
  fontWeight:400,
  fontSize:13
}
});
