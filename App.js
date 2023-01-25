import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Map from './Pages/Map';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Map" component={Map} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})





// import { StyleSheet, Text, View , ActivityIndicator } from 'react-native';
// import * as Location from 'expo-location'
// import react, {useEffect,useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import WeatherInfo from './components/WeatherInfo';
// import UnitsPicker from './components/UnitsPicker';
// import { colors } from './utils/index';
// import ReloadIcon from './components/ReloadIcon';
// import WeatherDetails from './components/WeatherDetails';
// import {WEATHER_API_KEY} from '@env'

// const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

// export default function App() {
//   const [errMsg , setErrMsg] = useState(null)
//   const [currentWeather , setCurrentWeather] = useState(null)
//   const [unitSystem , setUnitSystem] = useState('metric')


//   useEffect(() => {
//     load();
//   }, [unitSystem])
  
//   const load= async() => {
//     setCurrentWeather(null)
//     setErrMsg(null)
//     try {
//       const {status} = await Location.requestForegroundPermissionsAsync();

//       if (status !== 'granted'){
//         setErrMsg("Access to location is needed to run the app!")
//         return
//       }

//       const location = await Location.getCurrentPositionAsync()
//       // const check = location.coords
//       // console.log(check);
//       const {latitude,longitude} = location.coords

//       const weatherURl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`
//       const response = await fetch(weatherURl);
//       const result = await response.json();

//       if(response.ok){
//         setCurrentWeather(result);
//       }else{
//         setErrMsg(result.messsage)
//       }

//     } catch (error) {
//       setErrMsg(error.messsage)
//     }
//   }

//   if(currentWeather){
    
//     return (
//       <View style={styles.container}>
//         <StatusBar style='auto'/>
//         <View style={styles.main}>
//           <View style={styles.topSettings}>
//             <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem}></UnitsPicker>
//             <ReloadIcon load={load}/>
//           </View>
//           <WeatherInfo currentWeather={currentWeather}></WeatherInfo>
//         </View>
//         <View>
//             <WeatherDetails currentWeather={currentWeather} unitSystem={unitSystem}></WeatherDetails>
//         </View>
//       </View>
//     );
//   }else if(errMsg){
//     return (
//       <View style={styles.container}>
//         <Text>{errMsg}</Text>
//         <StatusBar style='auto'/>
//       </View>
//     );
//   }
//   else{
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator color={colors.PRIMARY_COLOR} size='large' />
//         <StatusBar style='auto'/>
//       </View>
//     );
//   }
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eee',
//     justifyContent: 'center',
//   },
//   main:{
//     flex:1,
//     justifyContent:"center"
//   },
//   topSettings:{
//     width:"100%",
//     alignSelf:'center',
//     position:'absolute',
//     top:'7.5%',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center',
//     paddingHorizontal:'10%'
//   }
// });
