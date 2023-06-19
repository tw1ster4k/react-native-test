import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity  } from 'react-native'
import Name from './Components/Name'
import SearchIcon from './Components/SearchIcon'
import Losos from "./Images/Squircle.png"
import Ugor from "./Images/Ugor.png"
import Carousel from "react-native-snap-carousel";
import CarouselItem from './Components/CarouselItem'


const Menu2 = ({navigation}) => {

    const isCarousel = React.useRef(null)

    const styles = StyleSheet.create({
        container: {
            width:393,
            height:1853,
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
          carousel:{
            height:320,
            marginTop:16,
            flex:1,
          }, 
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
    const category = ["Салаты","Холодные закуски","Горячие закуски","Икорный бар","Морепродукты","Супы","Крупа и паста","Горячее","Мангал","Тесто и начинка"]
    const data = [{title:"Нигири лосось 2 шт.", description:"Опаленные суши нигири с соусом терияки, луковым кремом и кунжутом.", image:Losos, price:450}, {title:"Сашими угорь", description:"Сашими (нарезка из охлажденной рыбы) угорь с свежим миксом овощей и листьями салата, политые соусом унаги", image:Ugor, price:720}]


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
                <Carousel 
                data={data}
                ref={isCarousel}
                renderItem={CarouselItem}
                sliderWidth={393}
                itemWidth={224}
                useScrollView={true}
                />
        
    <StatusBar style="auto" />   
    </ScrollView>
  )
}

export default Menu2