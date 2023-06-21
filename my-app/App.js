import * as React from  "react"
import { Provider } from "react-redux"
import {store} from "./store"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Menu2 from "./Menu2"
import Salads from "./Components/Salads"


const Stack = createNativeStackNavigator();
export default function App() {
  return(
      <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Меню"
        component={Menu2}
        />
      <Stack.Screen name="Салаты" component={Salads} />
    </Stack.Navigator>
  </NavigationContainer>
      </Provider>
    )
}