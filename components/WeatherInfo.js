import { View, Text } from 'react-native'
import React from 'react'

export default function WeatherInfo({currentWeather}) {
    const {
        main:{temp},
        weather:[details]
    } = currentWeather;

    const {icon}=details
  return (
    <View>
      <Text>{temp}</Text>
    </View>
  )
}