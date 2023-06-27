import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, ScrollView, Pressable, Animated, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Name from './Components/Name'
import NameWhite from './Components/NameWhite'
import SearchIcon from './Components/SearchIcon'
import SearchIconWhite from './Components/SearchIconWhite'
import Home from './Components/Home'
import HomeWhite from './Components/HomeWhite'
import Subject from './Components/Subject'
import SubjectWhite from './Components/SubjectWhite'
import { stylesBasketBlack } from './Styles/stylesBasketBlack'
import { stylesBasketWhite } from './Styles/stylesBasketWhite'
import { useState } from 'react'
import LineSvg from './Components/LineSvg'
import True from './Components/True'
import TrueWhite from './Components/TrueWhite'




const Basket = ({navigation}) => {

    const params = ["Имя","Телефон","Количество гостей", "Дата", "Время"]


    const dispatch = useDispatch()
    const subject = useSelector((state) => state.subject)
    const price = useSelector((state) => state.price)
    const basket = useSelector((state) => state.favorites)

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
      if(bigImg === index) {
        setBigImg(null)
      }else{
        setBigImg(index)
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

    const styles = StyleSheet.create(subject ? stylesBasketWhite : stylesBasketBlack)
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
            <Pressable key={index} style={elem.img ?  more  === index ? bigImg === index ? [styles.card, {height:368}] : [styles.card, {height:335}] : bigImg === index ? [styles.card, {height:368}] : [styles.card, {height:144}]  : more === index ? [styles.card, {height:260}] : styles.card} onPress={() => moreFunction(index)}>
                 <Text style={elem.img ? more === index ? [styles.title, {width:192}]  : [styles.title, {width:192}] : more === index ?  [styles.title, { fontWeight:600,fontSize:14,lineHeight:17.15}] : styles.title}>{elem.title}</Text>
            {more === index ?
            <View>
              <Text style={elem.img ? [styles.description, {width:192}] : styles.description}>{elem.description}</Text>
              <Text style={styles.description}>{elem.compound}</Text>
            </View>
              : ''
            }
                <Animated.View style={bigImg === index ? {position:'absolute', zIndex:3, marginTop:294} : ''}>
                <View style={ basket.filter((el) => el.title === elem.title).length >= 1 ? bigImg === index ? [styles.button,  {width:143, position:'absolute', zIndex:3}]  : [styles.button,  {width:143}] :  bigImg === index ? [styles.button, {position:"absolute", zIndex:3}] : styles.button}>
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
            : ''
            )}
        
        <Pressable style={styles.call} onPress={() => alert("Официант к вам скоро придёт, ожидайте")}>
                <Text style={styles.callText}>Вызвать официанта</Text>
        </Pressable>



        <LineSvg style={styles.line} />


        <Text style={styles.tab}>Разместить предзаказ</Text>
        <Text style={styles.preOrderText}>Заполните предложенные поля, разместите заявку и дождитесь звонка администратора, для подтверждения вашего заказа</Text>

        <View style={styles.form}>
            {params.map((el, index) => 
            <View key={index} style={styles.info}>
                  <Text style={styles.infoText}>{el}</Text>
                  <TextInput style={styles.infoInput} />
            </View>
            )}
            <Pressable style={styles.submit}>
                <Text style={styles.submitText}>Разместить</Text>
            </Pressable>
        </View>
              {
                subject ?
                <True style={{marginTop:100}} />
                :
                <TrueWhite style={{marginTop:100}} />
              }
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