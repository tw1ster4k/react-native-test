import Salad from "../Images/Salad.jpg";

export const initState = {
salads:[{title:"Зеленый салат с кейлом, авокадо и лимонным дрессингом",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:790, quantity:0, img:Salad}, 
{title:"Зелёный салат с цицмати, рейганом и семенами конопли",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:620, quantity:0} ,
{title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм" ,price:720}, 
{title:"Салат из молодого редиса, сезонных овощей и соусом из хивинской халвы", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:740, quntity:0}, 
{title:"Узбекские помидоры с сыром чечил и бородинским спонжем", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:620, quantity:0},
{title:"Салат с крабом и ростками подсолнуха",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:1260, quantity:0}, 
{title:"Оливье с рябчиком, телячьим языком и раковыми шейками",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:900, quantity:0},
{title:"Оливье с угрём и топинамбуром",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:920, quantity:0},
{title:"Зелёный салат с сёмгой горячего копчения", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:780, quantity:0}, 
{title:"Салат с уткой, хурмой и подкопчённым миндалём", description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм",price:860, quantity:0}, 
{title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)",description:"Капуста белокочан., морковь, огурцы свежие, перец болгар., масло растит., петрушка, сахар-песок, соль пищ. повар., уксус столовый.",compound:"Белки - 2.1 / Жиры - 11.9 / Углеводы - 3.2 / Масса Нетто  1000 грамм", price:720, quantity:0}    
],
favorites:[
],
subject:false,
price:0,
heightImage:368,
heightCard:238,
}

export const reducers = (state = initState, actions) => {
    switch (actions.type) {
        case 'ADD_FOOD':  
            const newFood =  actions.payload;
            const newFavorites = [...state.favorites, newFood];
            return {...state, favorites: newFavorites, price: state.price += actions.payload.price,}
            case "ADD_SUBJECT" :
                return {...state, subject: actions.payload}
            case "DEL_FOOD":
                const arr = state.favorites
                const z = state.favorites.findIndex((el) => el.title === actions.payload.title)
                z >= 0 ? arr.splice(z, 1) : arr.splice(z,0)
                     return {...state, favorites: arr, price: state.price > 0 ? state.price -= actions.payload.price : 0}
                default :
                return state
    }
}
    
