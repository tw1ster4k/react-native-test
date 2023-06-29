import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ScrollView, Text, TextInput, Pressable, LayoutAnimation, NativeModules  } from 'react-native'
import Name from '../../Components/Name'
import SearchIcon from '../../Components/SearchIcon'
import NameWhite from '../../Components/NameWhite'
import SearchIconWhite from '../../Components/SearchIconWhite'
import HomeWhite from '../../Components/HomeWhite'
import SubjectWhite from '../../Components/SubjectWhite'

import Home from '../../Components/Home'
import Subject from '../../Components/Subject'
import { useSelector, useDispatch } from 'react-redux'
import { stylesHomeBlack }  from './Styles/stylesHomeBlack'
import { stylesHomeWhite } from "./Styles/stylesHomeWhite"
import TrueWhite from '../../Components/TrueWhite'
import True from '../../Components/True'




const Menu2 = ({navigation}) => {
  
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.subject)
  const price = useSelector((state) => state.price)
  const basket = useSelector((state) => state.favorites) 



  

    const styles = StyleSheet.create(subject ? stylesHomeWhite : stylesHomeBlack)
    const category = ["Салаты","Холодные закуски","Горячие закуски","Икорный бар","Морепродукты","Супы","Крупа и паста","Горячее","Мангал","Тесто и начинка"]

  return (
    <View>

    <ScrollView style={styles.container}>
      {
        subject ?
        <NameWhite style={styles.name} />
        :
        <Name style={styles.name} />
      }
    
        <Text style={styles.text}>Онлайн-меню японо-перуанской кухни ресторана Tsunami</Text>
        <TextInput style={styles.input} placeholder='Поиск'   />
        { subject ?
          <SearchIconWhite style={styles.icon} /> 
          :
          <SearchIcon style={styles.icon} />
        }
        <Text style={styles.tab}>Меню</Text>
        <View style={styles.categories}>
            {category.map((el, index) => 
                <Pressable key={index} style={styles.category} onPress={() => navigation.navigate(el)}>
                    <Text style={styles.title}>{el}</Text>
                </Pressable>
            )}
        </View>
        <Text style={styles.warning}>Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, пожалуйста, предупредите об этом Вашего официанта. Меню является рекламной продукцией нашего ресторана. Утвержденное контрольное меню с выходами блюд и сведениями о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов находится в уголке потребителя и предоставляется по первому Вашему требованию.</Text>
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
              { subject ?
              <HomeWhite />
                :
                <Home />
              }
              </Pressable>
              <Pressable style={styles.subject} onPress={() =>  dispatch({type:"ADD_SUBJECT", payload:!subject})}>
                { subject ?
                <SubjectWhite />
                :
                  <Subject />
                }
              </Pressable>
              <Pressable style={basket.length < 1 ? subject ? [styles.favorites, {borderColor:'#bbb'}] : [styles.favorites, {borderColor:'#1c1c1c'}] : styles.favorites} onPress={() => navigation.navigate("Избранное")}>
                  <Text style={styles.price}>{price ? `${price} руб` : 'Корзина'}</Text>
                  <Text style={styles.quantity}>{basket.length ?  `${basket.length} товаров` : 'пусто'}</Text>
              </Pressable>
        </View>
          <StatusBar  style="auto" />   
          </View>
  )
}

export default Menu2