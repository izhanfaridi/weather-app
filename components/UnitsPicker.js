import { View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unitSystem , setUnitSystem}) {
  return (
    <View style={{width:100,height:100}}>
      <Picker style={styles.picker} selectedValue={unitSystem} onValueChange={(item)=>setUnitSystem(item)} mode='dropdown' itemStyle={{fontSize:15}}>
          <Picker.Item label='C°' value='metric'/>
          <Picker.Item label='F°' value='imperial'/>
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
    picker:{
        position:'relative',
        ...Platform.select({
            ios:{
                bottom:"70%",
            },
            android:{
                bottom:"50%",
            },
            default:{
                bottom:"30%"
            }
        }),
        height:100,
        width:100
    }
})