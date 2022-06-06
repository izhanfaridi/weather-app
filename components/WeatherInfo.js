import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import {colors} from '../utils/index'

const {PRIMARY_COLOR ,SECONDARY_COLOR ,BORDER_COLOR} = colors

export default function WeatherInfo({currentWeather}) {

    const {
        main:{temp,feels_like},
        weather:[details],
        name
    } = currentWeather;

    const {icon,main}=details

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{name}</Text>
      <Image source={{uri:iconUrl}} style={styles.image}></Image>
      <Text style={styles.primaryText}>{temp}°</Text>
      <Text style={styles.weatherDesc}>Real Feel : {feels_like}°</Text>
      <Text style={styles.secondaryText}>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  image:{
    width:100,
    height:100,
  },
  weatherDesc:{
    textTransform:'capitalize',
    marginVertical:12,
    fontSize:15,
    color:'#666',
    fontWeight:'700'
  },
  primaryText:{
    fontSize:30,
    fontWeight:"500",
    color:PRIMARY_COLOR,
    marginTop:-15,
    marginLeft:8,
  },
  secondaryText:{
    fontSize: 15,
    fontWeight:"600",
    color:SECONDARY_COLOR,
  },
  city:{
    fontSize:20,
    fontWeight:"700",
    marginBottom:-15
  }
})