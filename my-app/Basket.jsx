import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, ScrollView, Pressable, Animated } from 'react-native'
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
          },
          tab:{
            color:"#fff",
            width:600,
            fontSize:24,
            marginTop:34,
            marginLeft:10
          },
          sum:{
            color:"#fff",
            fontWeight:400,
            fontSize:16,
            marginLeft:10
          },
          card:{
            width:368,
            height:118,
            backgroundColor:"#222222",
            borderRadius:10,
            borderWidth:2,
            borderColor:"#555555",
            marginTop:12,
            marginLeft:10
          },
          title:{
            width:336,
            fontWeight:400,
            fontSize:14,
            color:"#fff",
            marginTop:16,
            marginLeft:16,
          },
          button:{
            height:40,
            width:114,
            borderRadius:10,
            color:"#fff", 
            backgroundColor: "#555555",
            display:"flex", 
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-around", 
            margin:16, 
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
          cost:{
            color:"#fff",
            fontWeight:400,
            fontSize:16,
          },
          amount:{
            backgroundColor:"#555555",
            justifyContent:'center',
            alignItems:"center",
            borderRadius:10,
            borderWidth:2,
            borderColor:"#ff7a00",
            width:38,
            height:40,
            marginLeft:167,
            marginTop:-56,
            marginEnd:16
          },
          amountText:{
            fontWeight:600,
            fontSize:16,
            color:"#fff"
          },
          call:{
            width:210,
            height:48,
            borderRadius:10,
            borderWidth:2,
            borderColor:"#ff7a00",
            marginTop:24,
            marginLeft:10,
            justifyContent:'center',
            alignItems:"center",
            backgroundColor:"#1c1c1c",
          },
          callText:{
              fontWeight:600,
              fontSize:14,
              color:"#fff"
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
          tab:{
            color:"#1c1c1c",
            width:600,
            fontSize:24,
            marginTop:34,
            marginLeft:10
          },
          sum:{
            color:"#1c1c1c",
            fontWeight:400,
            fontSize:16,
            marginLeft:10
          },
          card:{
            width:368,
            height:118,
            backgroundColor:"#fff",
            borderRadius:10,
            borderWidth:2,
            borderColor:"#bbb",
            marginTop:12,
            marginLeft:10
          },
          title:{
            width:336,
            fontWeight:400,
            fontSize:14,
            color:"#1c1c1c",
            marginTop:16,
            marginLeft:16,
          },
          button:{
            borderRadius:10,
            height:40,
            width:114,
            color:"#1c1c1c", 
            backgroundColor:"#eee",
            display:"flex", 
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-around", 
            margin:16
          },
          minus:{
            fontWeight:400,
            fontSize:20,
            color:"#1c1c1c",
            marginRight:10
          },
          plus:{
            fontWeight:400,
            fontSize:20,
            color:"#1c1c1c",
            marginLeft: 10
          },
          cost:{
            color:"#1c1c1c",
            fontWeight:400,
            fontSize:16,
          },
          amount:{
            backgroundColor:"#fff",
            justifyContent:'center',
            alignItems:"center",
            borderRadius:10,
            borderWidth:2,
            borderColor:"#ff7a00",
            width:38,
            height:40,
            marginLeft:167,
            marginTop:-56,
            marginEnd:16
          },
          amountText:{
            fontWeight:600,
            fontSize:16,
            color:"#1c1c1c"
          },
          call:{
            width:210,
            height:48,
            borderRadius:10,
            borderWidth:2,
            borderColor:"#ff7a00",
            marginTop:24,
            marginLeft:10,
            justifyContent:'center',
            alignItems:"center",
            backgroundColor:"#fff",
          },
          callText:{
            fontWeight:800,
            fontSize:14,
            color:"#1c1c1c"
          }
    }

   
    const unique = []
    const seen = {}

    basket.forEach((item) => {
      const key = item.title;
      if (!seen[key]) {
        seen[key] = true;
        unique.push(item);
      }
    });

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
            <Text style={styles.tab}>Корзина</Text>
            <Text style={styles.sum}>{price ? `Итого на ${price} руб` : "Корзина пуста"}</Text>
            {unique.map((elem, index) =>     
            basket.filter((el) => el.title === elem.title).length > 0 ?
              <View style={styles.card} key={index}>
                <Text style={styles.title}>{elem.title}</Text>
                <Animated.View>
            <View style={ basket.filter((el) => el.title === elem.title).length >= 1 ? [styles.button,  {width:143}] :styles.button}>
              { basket.filter((el) => el.title === elem.title).length > 0 ?
                <Pressable style={{height:"100%",width:55.5, alignItems:'center', marginTop:11}} onPress={() => dispatch({type:"DEL_FOOD", payload:elem}) } >
        <Text style={styles.minus}>
          -
        </Text>
      </Pressable>
      : ''
    }
      <Text style={basket.filter((el) => el.title === elem.title).length >= 1 ? styles.cost : [styles.cost, {marginLeft:16}]}>{elem.price} руб</Text>
      <Pressable style={{height:"100%",width:55.5, alignItems:'center', marginTop:11}} onPress={() => dispatch({type:"ADD_FOOD", payload:elem})} >
        <Text style={styles.plus}>
          +
        </Text>
      </Pressable>
    </View>
    </Animated.View>
    {
    basket.filter((el) => el.title === elem.title).length > 0 ?      
      <View style={styles.amount}>
        <Text style={styles.amountText}>{basket.filter((el) => el.title === elem.title).length}</Text>
      </View>
      : ""
      }
            </View>
            : ''
            )}
        
        <Pressable style={styles.call} onPress={() => alert("Официант к вам скоро придёт, ожидайте")}>
                <Text style={styles.callText}>Вызвать официанта</Text>
        </Pressable>
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