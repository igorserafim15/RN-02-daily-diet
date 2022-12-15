import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EnumRoutes } from './enumroutes.routes'
// @screens
import { Home } from '@screens/Home/Home'
import { Statistics } from '@screens/Statistics/Statistics'
import { Details } from '@screens/Details/Details'
import { Feedback } from '@screens/Feedback/Feedback'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={EnumRoutes.home} component={Home} />
      <Screen name={EnumRoutes.statistics} component={Statistics} />
      <Screen name={EnumRoutes.details} component={Details} />
      <Screen name={EnumRoutes.feedback} component={Feedback} />
    </Navigator>
  )
}
