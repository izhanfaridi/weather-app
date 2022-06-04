import { StyleSheet, Text, View , ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import react, {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import { colors } from './utils/index';
import ReloadIcon from './components/ReloadIcon';

const WEATHER_API_KEY = '4d64bc467f11b28853839c0620f81648'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [errMsg , setErrMsg] = useState(null)
  const [currentWeather , setCurrentWeather] = useState(null)
  const [unitSystem , setUnitSystem] = useState('metric')


  useEffect(() => {
    load();
  }, [unitSystem])
  
  const load= async() => {
    setCurrentWeather(null)
    setErrMsg(null)
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted'){
        setErrMsg("Access to location is needed to run the app!")
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const {latitude,longitude} = location.coords

      const weatherURl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`
      const response = await fetch(weatherURl);
      const result = await response.json();

      if(response.ok){
        setCurrentWeather(result);
      }else{
        setErrMsg(result.messsage)
      }

    } catch (error) {
      setErrMsg(error.messsage)
    }
  }

  if(currentWeather){
    
    return (
      <View style={styles.container}>
        <StatusBar style='auto'/>
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem}></UnitsPicker>
          <ReloadIcon load={load}/>
          <WeatherInfo currentWeather={currentWeather}></WeatherInfo>
        </View>
      </View>
    );
  }else if(errMsg){
    return (
      <View style={styles.container}>
        <Text>{errMsg}</Text>
        <StatusBar style='auto'/>
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.PRIMARY_COLOR} size='large' />
        <StatusBar style='auto'/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  main:{
    flex:1,
    justifyContent:"center"
  }
});
