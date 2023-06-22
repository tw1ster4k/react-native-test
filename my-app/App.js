import 'react-native-gesture-handler';
import * as React from  "react"
import { Provider } from "react-redux"
import {store} from "./store"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Menu2 from "./Menu2"
import Salads from "./Salads"
import Basket from "./Basket"


const Stack = createStackNavigator();
export default function App() {
  return(
      <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Меню"
        component={Menu2}
        options={{headerShown:false, animationEnabled:false}}
        />
      <Stack.Screen name="Салаты" component={Salads} options={{headerShown:false, animationEnabled:false}} />
      <Stack.Screen name="Избранное" component={Basket} options={{headerShown:false, animationEnabled:false}} />
    </Stack.Navigator>
  </NavigationContainer>
      </Provider>
    )
}