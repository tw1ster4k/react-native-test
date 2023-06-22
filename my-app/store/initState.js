export const initState = {
salads:[{title:"Зеленый салат с кейлом, авокадо и лимонным дрессингом", price:790}, {title:"Зелёный салат с цицмати, рейганом и семенами конопли",price:620} ,
{title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)", price:720}, {title:"Салат из молодого редиса, сезонных овощей и соусом из хивинской халвы", price:740}, {title:"Узбекские помидоры с сыром чечил и бородинским спонжем", price:620},
{title:"Салат с крабом и ростками подсолнуха", price:1260}, {title:"Оливье с рябчиком, телячьим языком и раковыми шейками", price:900},{title:"Оливье с угрём и топинамбуром", price:920},
{title:"Зелёный салат с сёмгой горячего копчения", price:780}, {title:"Салат с уткой, хурмой и подкопчённым миндалём", price:860}, {title:"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)", price:720}    
],
favorites:[
{title:'',
description:'',
price:0,
quatity:0
}
],
subject:false,
price:0
}

export const reducers = (state = initState, actions) => {
    switch (actions.type) {
        case 'ADD_FOOD':
            return {...state, favorites: actions.payload}
            case "ADD_SUBJECT" :
                return {...state, subject: actions.payload}
                default :
                return state
    }
}
    
