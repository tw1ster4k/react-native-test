import React from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput, Pressable, Animated, LayoutAnimation, NativeModules, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Name from '../../Components/Name'
import SearchIcon from '../../Components/SearchIcon'
import Home from '../../Components/Home'
import Subject from '../../Components/Subject'
import { useSelector, useDispatch } from 'react-redux'
import NameWhite from '../../Components/NameWhite'
import SearchIconWhite from '../../Components/SearchIconWhite'
import HomeWhite from '../../Components/HomeWhite'
import SubjectWhite from '../../Components/SubjectWhite'
import { useState } from 'react'
import { stylesSaladsBlack } from './Styles/stylesSaladsBlack'
import { stylesSaladsWhite } from './Styles/stylesSaladsWhite'
import TrueWhite from '../../Components/TrueWhite'
import True from '../../Components/True'

const {UIManager} = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const Salads = ({navigation}) => {
  const [w, setW] = useState(143)
  const dispatch = useDispatch()
  const subject = useSelector((state) => state.subject)

const maxOnPress = () => {
    LayoutAnimation.spring();
    if(w === 117) {
      setW(w + 26)
    }else{

    }
}


const minOnPress = (x) => {
  LayoutAnimation.spring();
  if(w === 143 && x === 0) {  
    setW(w - 26)
  }else{

  }
}



    const styles = StyleSheet.create(subject ? stylesSaladsWhite: stylesSaladsBlack)



        const salads = useSelector((state) => state.salads)
        const price = useSelector((state) => state.price)
        const basket = useSelector((state) => state.favorites)

        const handleMinOnPress = (type, data, x) => {
          minOnPress(x);
          dispatch({type:type, payload:data})
        }

        const handleMaxOnPress = (type, data, x) =>{
          maxOnPress();
          dispatch({type:type, payload:data})
        }

        const [more, setMore] = useState(null)
        const [bigImg, setBigImg] = useState(null)

        const moreFunction = (index) => {
          if(more === index){
              setMore(null)
          } else {
            setMore(index)
          }
        }
        
        const bigImgFunction = (index) => {
          LayoutAnimation.spring();
          if(bigImg === index) {
            setBigImg(null)
          }else{
            setBigImg(index)
          }
        }

  return (
    <View>

    <ScrollView style={styles.container}>
      { subject ?
      <NameWhite style={styles.name} />
        :
        <Name stroke="currentColor" style={styles.name} />
      }
        <Text style={styles.text}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
        <TextInput style={[styles.input, {paddingLeft:24}]} placeholder='Поиск' />
        {subject ?
       <SearchIconWhite style={styles.icon} />  
       :
          <SearchIcon style={styles.icon} />
        }
        <Text style={styles.tab}>Салаты</Text>
        {salads.map((elem, index) => 
        <Pressable key={index} style={elem.img ?  more  === index ? bigImg === index ? [styles.card, {height:368}] : [styles.card, {height:"auto"}] : bigImg === index ? [styles.card, {height:368}] : [styles.card, {height:144}]  : more === index ? [styles.card, {height:"auto"}] : styles.card} onPress={() => moreFunction(index)}>
            <Text style={elem.img ? more === index ? [styles.title, {width:192}]  : [styles.title, {width:192}] : more === index ?  [styles.title, { fontWeight:600,fontSize:14,lineHeight:17.15}] : styles.title}>{elem.title}</Text>
            {more === index ?
            <View>
              <Text style={elem.img ? [styles.description, {width:192}] : styles.description}>{elem.description}</Text>
              <Text style={styles.description}>{elem.compound}</Text>
            </View>
              : ''
            }
            <Animated.View style={bigImg === index ? {position:'absolute', zIndex:3, marginTop:294} : ''}>
            <View style={ basket.filter((el) => el.title === elem.title).length >= 1 ? bigImg === index ? [styles.button,  {width:w, position:'absolute', zIndex:3}]  : [styles.button,  {width:w}] :  bigImg === index ? [styles.button, {position:"absolute", zIndex:3}] : styles.button}>
              { basket.filter((el) => el.title === elem.title).length > 0 ?
                <Pressable style={{height:"100%",width:55.5, alignItems:'center', marginTop:11}} onPress={() => basket.filter((el) => el.title === elem.title).length === 1 ? handleMinOnPress("DEL_FOOD", elem, basket.filter((el) => el.title === elem.title).length)  : dispatch({type:"DEL_FOOD", payload:elem}) } >
        <Text style={styles.minus}>
          -
        </Text>
      </Pressable>
      : ''
    }
      <Text style={basket.filter((el) => el.title === elem.title).length >= 1 ? styles.cost : [styles.cost, {marginLeft:16}]}>{elem.price} руб</Text>
      <Pressable style={{height:"100%",width:55.5, alignItems:'center', marginTop:11}} onPress={() => basket.filter((el) => el.title === elem.title).length === 0 ? handleMaxOnPress("ADD_FOOD", elem) : dispatch({type:"ADD_FOOD", payload:elem})} >
        <Text style={styles.plus}>
          +
        </Text>
      </Pressable>
    </View>
    </Animated.View>
    {
    basket.filter((el) => el.title === elem.title).length > 0 ?      
      <View style={ bigImg === index ? [styles.amount, {position:"absolute", zIndex:3,marginTop:310 ,marginLeft:167,}] : styles.amount}>
        <Text style={styles.amountText}>{basket.filter((el) => el.title === elem.title).length}</Text>
      </View>
      : ""
      }
      {elem.img ?
        <Pressable onPress={() => bigImgFunction(index)} style={{position:'absolute'}}>
        <Image source={elem.img} style={bigImg === index ?  {height:364, width:364, borderRadius:10, zIndex:1}  : styles.image} />
        </Pressable>
        : ""
      }
        </Pressable>
        )}


    <StatusBar style="auto" />   
    {
                subject ?
                <True style={{marginTop:34}} />
                :
                <TrueWhite style={{marginTop:34}} />
              }
        <View style={{marginTop:120}}></View>
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
          <Pressable style={basket.length < 1 ? subject ? [styles.favorites, {borderColor:'#bbb'}] : [styles.favorites, {borderColor:'#1c1c1c'}] : styles.favorites} onPress={() => navigation.navigate("Избранное")}>
            <Text style={styles.price}>{price ? `${price} руб` : 'Корзина'}</Text>
            <Text style={styles.quantity}>{basket.length ? `${basket.length} товаров` : "пусто"}</Text>
          </Pressable>
    </View>
  </View>
  )
}

export default Salads