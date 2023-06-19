import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

const CarouselItem = ({image, title, description, price}) => {
    const styles = StyleSheet.create({
        image:{
            height:320
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
          dish:{
            fontWeight:600,
            fontSize:18,
            color:"#ffffff",
          },
          depiction:{
            fontWeight:400,
            fontSize:13,
            color:"#fff",
            width:196,
          },
    })
  return (
    <View>
            <Image source={image} style={styles.image} />
            <Text style={styles.dish}>{title}</Text>
            <Text style={styles.depiction}>{description}</Text>
            <View style={{borderRadius:10,color:"#fff", backgroundColor: "#555555",width:111,display:"flex", alignItems:"center",flexDirection:"row",justifyContent:"space-around", marginTop:12,marginLeft:52.3,position:"relative", zIndex:3}}>
            <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center',}} >
            <Text style={styles.minus}>
              -
            </Text>
          </TouchableOpacity>
          <Text>{price} руб</Text>
          <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}}>
            <Text style={styles.plus}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style='auto' />
    </View>
  )
}

export default CarouselItem