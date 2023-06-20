import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, ImageBackground  } from 'react-native'
import Animated, { scrollTo, useAnimatedRef } from 'react-native-reanimated'
import Name from './Components/Name'
import SearchIcon from './Components/SearchIcon'
import Losos from "./Images/Squircle.png"
import Ugor from "./Images/Ugor.png"
import Carousel from 'react-native-reanimated-carousel'
import { useState } from 'react'


const Menu2 = ({navigation}) => {
  const aref = useAnimatedRef()
  const [isAutoPlay, setIsAutoPlay] = useState(false)

    const isCarousel = React.useRef(null)

    const styles = StyleSheet.create({
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
            color:"#fff"
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
          image:{
            position:'absolute',
            height:320,
            width:244
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
          depiction:{
            position:'absolute',
            fontWeight:400,
            fontSize:13,
            color:"#fff",
            width:196,
            marginLeft:24,
            bottom:64
          },
          dish:{
            fontWeight:600,
            fontSize:18,
            color:"#ffffff",
            marginLeft:24,
            position:"relative",
            bottom:-130
          },
          card:{
            flexDirection:'column',
            justifyContent:'flex-end'
          },
          warning:{
            width:368,
            marginTop:70,
            marginLeft:10,
            fontWeight:400,
            fontSize:14,
            color:"#bbb"
          }
    })
    const category = ["Салаты","Холодные закуски","Горячие закуски","Икорный бар","Морепродукты","Супы","Крупа и паста","Горячее","Мангал","Тесто и начинка"]
    
    const data = [{title:"Нигири лосось 2 шт.", description:"Опаленные суши нигири с соусом терияки, луковым кремом и кунжутом." ,image:Losos, price:450}, {title:"Сашими угорь", description:"Сашими (нарезка из охлажденной рыбы) угорь с свежим миксом овощей и листьями салата, политые соусом унаги" ,image:Ugor, price:720},]


  return (
    <ScrollView style={styles.container}>
        <Name stroke="currentColor" style={styles.name} />
        <Text style={styles.text}>Доставка японо-перуанской кухни из ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск'  />
        <SearchIcon style={styles.icon} />
        <Text style={styles.tab}>Меню</Text>
        <View style={styles.categories}>
            {category.map((el, index) => 
                <TouchableOpacity key={index} style={styles.category} onPress={() => navigation.navigate(`${el}`, {name:el})}>
                    <Text style={styles.title}>{el}</Text>
                </TouchableOpacity>
            )}
        </View>
        <Text style={styles.tab}>Блюда от шефа</Text>
              <View style={{flex: 1, marginTop:16}}>
              <Carousel 
                width={393}
                height={320}
                ref={isCarousel}
                loop={true}
                autoPlay={isAutoPlay}
                autoPlayInterval={500}
                data={data}
                mode='parallax'
                renderItem={({index}) => {
                  return (
                  <TouchableOpacity onPress={() => setIsAutoPlay(!isAutoPlay)}>
                      <ImageBackground source={data[index].image} style={styles.image}>
                      <Text style={styles.dish}>{data[index].title}</Text>
                      <Text style={styles.depiction}>{data[index].description}</Text>
                      <View style={{borderRadius:10,color:"#fff", backgroundColor: "#555555",width:111,display:"flex", alignItems:"center",flexDirection:"row",justifyContent:"space-around",marginLeft:24,position:"absolute",bottom:20,zIndex:3}}>
                      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center',}} >
                      <Text style={styles.minus}>
                          -
                      </Text>
                      </TouchableOpacity>
                      <Text>{data[index].price} руб</Text>
                      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}}>
                      <Text style={styles.plus}>
                        +
                      </Text>
                      </TouchableOpacity>
                      </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  );
                }}
                />
              </View>

              <Text style={styles.warning}t>Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, пожалуйста, предупредите об этом Вашего официанта. Меню является рекламной продукцией нашего ресторана. Утвержденное контрольное меню с выходами блюд и сведениями о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов находится в уголке потребителя и предоставляется по первому Вашему требованию.</Text>
                
        
    <StatusBar style="auto" />   
    </ScrollView>
  )
}

export default Menu2