import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Name from './Name'
import SearchIcon from './SearchIcon'

const Salads = () => {

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
        })

        const salads = [{title:"Зеленый салат с кейлом, авокадо и лимонным дрессингом", price:790}, {title:"Зелёный салат с цицмати, рейганом и семенами конопли",price:620} ,
    {title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)", price:720}, {title:"Салат из молодого редиса, сезонных овощей и соусом из хивинской халвы", price:740}, {title:"Узбекские помидоры с сыром чечил и бородинским спонжем", price:620},
{title:"Салат с крабом и ростками подсолнуха", price:1260}, {title:"Оливье с рябчиком, телячьим языком и раковыми шейками", price:900},{title:"Оливье с угрём и топинамбуром", price:920},
{title:"Зелёный салат с сёмгой горячего копчения", price:780}, {title:"Салат с уткой, хурмой и подкопчённым миндалём", price:860}, {title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)", price:720}    
]
    

  return (
    <ScrollView style={styles.container}>
        <Name stroke="currentColor" style={styles.name} />
        <Text style={styles.text}>Доставка японо-перуанской кухни из ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск' />
        <SearchIcon style={styles.icon} />
        <Text style={styles.tab}>Салаты</Text>
        {salads.map((el, index) => 
        <View key={index} style={styles.card}>
            <Text style={styles.title}>{el.title}</Text>
            <View style={{borderRadius:10,color:"#fff", backgroundColor: "#555555",width:111,display:"flex", alignItems:"center",flexDirection:"row",justifyContent:"space-around", margin:16}}>
        <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center',}} >
        <Text style={styles.minus}>
          -
        </Text>
      </TouchableOpacity>
      <Text>{el.price} руб</Text>
      <TouchableOpacity style={{height:"100%",width:55.5, alignItems:'center'}} >
        <Text style={styles.plus}>
          +
        </Text>
      </TouchableOpacity>
    </View>
        </View>
        )}


    <StatusBar style="auto" />   
    </ScrollView>
  )
}

export default Salads