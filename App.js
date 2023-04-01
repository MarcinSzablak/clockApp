import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ClockScreen from './screens/ClockScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Clock'
          component={ClockScreen}
          options = {HeaderOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HeaderOptions = {
  title: '',
  headerStyle:{
    backgroundColor:'#B0DAFF'
  },
  headerTintColor:'white',
  headerShadowVisible:false,
}