export const initState = {
favorites:[],
subject:false,

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
    
