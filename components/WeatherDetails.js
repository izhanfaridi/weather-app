import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import {colors} from '../utils/index'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const {PRIMARY_COLOR ,SECONDARY_COLOR ,BORDER_COLOR} = colors

export default function WeatherDetails({currentWeather, unitSystem}) {
    const {
        main:{
            humidity,
            pressure,
        },
        wind:{speed},   
        visibility 
    } = currentWeather;

    const windSpeed = unitSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} mi/hr`
  return (
    //   <View style={styles.bottomDetails}>
    //       <View style={{ ...styles.bottomElement, borderRightWidth: 2, borderRightColor: BORDER_COLOR }}>
    //           <Ionicons name="water" size={24} color={PRIMARY_COLOR} />
    //           <View style={{ alignItems: 'center' }}>
    //               <Text style={{ fontWeight: '600' }}>Humidity :</Text>
    //               <Text style={{ fontSize: 15, marginTop: 5 }}>{humidity} %</Text>
    //           </View>
    //       </View>
    //       <View style={styles.bottomElement}>
    //             <Feather name="wind" size={24} color={PRIMARY_COLOR} />
    //           <View style={{ alignItems: 'flex-end' }}>
    //               <Text style={{ fontWeight: '600' }}>Wind Speed :</Text>
    //               <Text style={{ fontSize: 15, marginTop: 5 }}>{windSpeed}</Text>
    //           </View>
    //       </View>
    //       <View style={{ ...styles.bottomElement, borderRightWidth: 2, borderTopWidth: 2, borderTopColor: BORDER_COLOR, borderRightColor: BORDER_COLOR }}>
    //           <MaterialIcons name="visibility" size={24} color={PRIMARY_COLOR} />
    //           <View style={{ alignItems: 'center' }}>
    //               <Text style={{ fontWeight: '600' }}>Visibility :</Text>
    //               <Text style={{ fontSize: 15, marginTop: 5 }}>{visibility} m</Text>
    //           </View>
    //       </View>
    //       <View style={{ ...styles.bottomElement, borderTopWidth: 2, borderTopColor: BORDER_COLOR }}>
    //       <AntDesign name="cloud" size={24} color={PRIMARY_COLOR} />
    //           <View style={{ alignItems: 'center' }}>
    //               <Text style={{ fontWeight: '600' }}>Cloud % :</Text>
    //               <Text style={{ fontSize: 15, marginTop: 5 }}>{currentWeather.clouds.all} %</Text>
    //           </View>
    //       </View>

    //   </View>

    <View style={styles.bottomDetails}>
          <View style={{...styles.bottomElement,borderRightWidth:1,borderBottomWidth:1, borderColor:BORDER_COLOR,}}>
              <Ionicons name="water" size={24} color={PRIMARY_COLOR} />
              <View >
                  <Text style={{ fontWeight: '600' }}>Humidity :</Text>
                  <Text style={{ fontSize: 15}}>{humidity} %</Text>
              </View>
          </View>
          <View style={{...styles.bottomElement,borderLeftWidth:1,borderBottomWidth:1, borderColor:BORDER_COLOR,}}>
                <Feather name="wind" size={24} color={PRIMARY_COLOR} />
              <View >
                  <Text style={{ fontWeight: '600' }}>Wind Speed :</Text>
                  <Text style={{ fontSize: 15 }}>{windSpeed}</Text>
              </View>
          </View>
          <View style={{...styles.bottomElement,borderRightWidth:1,borderTopWidth:1, borderColor:BORDER_COLOR,}}>
              <MaterialIcons name="visibility" size={24} color={PRIMARY_COLOR} />
              <View >
                  <Text style={{ fontWeight: '600' }}>Visibility :</Text>
                  <Text style={{ fontSize: 15}}>{visibility} m</Text>
              </View>
          </View>
          <View style={{...styles.bottomElement,borderLeftWidth:1,borderTopWidth:1, borderColor:BORDER_COLOR,}}>
          <AntDesign name="cloud" size={24} color={PRIMARY_COLOR} />
              <View >
                  <Text style={{ fontWeight: '600' }}>Cloud % :</Text>
                  <Text style={{ fontSize: 15}}>{currentWeather.clouds.all} %</Text>
              </View>
          </View>

      </View>

  )
}


const styles = StyleSheet.create({
    bottomDetails:{
        flexDirection:"row",
        flexWrap:"wrap",
        borderWidth:2,
        borderColor:BORDER_COLOR,
        margin:20,
        borderRadius:10,
        justifyContent:'center'
    },
    bottomElement:{
        width:"50%",
        height:70,
        flexDirection:"row",
        
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:7
    }
})