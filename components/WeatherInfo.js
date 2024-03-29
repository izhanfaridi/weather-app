import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import {colors} from '../utils/index'
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const {PRIMARY_COLOR ,SECONDARY_COLOR ,BORDER_COLOR} = colors

export default function WeatherInfo({currentWeather,coordinates,setCoordinates}) {

  const navigation = useNavigation();
    const {
        main:{temp,feels_like},
        weather:[details],
        name
    } = currentWeather;

    const {icon,main}=details

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center',}}>
        <Text style={styles.city}>{name}</Text><MaterialIcons onPress={()=>navigation.navigate("Map",{
          coordinates:coordinates,
          setCoordinates:setCoordinates
        })} style={{position:'relative',left:'10%'}} name="edit-location" size={40} color={PRIMARY_COLOR} />
      </View>
      <Image source={{uri:iconUrl}} style={styles.image}></Image>
      <Text style={styles.primaryText}>{parseInt(temp)}°</Text>
      <Text style={styles.weatherDesc}>Real Feel : {parseInt(feels_like)}°</Text>
      <Text style={styles.secondaryText}>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    position:'relative',
    top:'8%'
  },
  image:{
    width:100,
    height:100,
  },
  weatherDesc:{
    textTransform:'capitalize',
    marginVertical:"2%",
    fontSize:15,
    color:'#666',
    fontWeight:'700'
  },
  primaryText:{
    fontSize:30,
    fontWeight:"500",
    color:PRIMARY_COLOR,
    marginBottom:"1.5%",
    marginLeft:"2%",
  },
  secondaryText:{
    fontSize: 15,
    fontWeight:"600",
    color:SECONDARY_COLOR,
  },
  city:{
    fontSize:22,
    fontWeight:"700",
    //marginBottom:-15
    marginLeft:'4%'
  }
})