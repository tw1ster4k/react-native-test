import * as React from  "react"
import Menu1 from "./Menu1"
import Menu2 from "./Menu2"
import Menu3 from "./Menu3"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Salads from "./Components/Salads"

const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Меню"
        component={Menu3}
        />
      <Stack.Screen name="Салаты" component={Salads} />
    </Stack.Navigator>
  </NavigationContainer>

    )
}