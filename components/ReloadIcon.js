import { View, StyleSheet,Platform } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/index';

export default function ReloadIcon({load}) {
  return (
    <View style={styles.reload}>
      <Ionicons name="reload-circle" size={35} color={colors.PRIMARY_COLOR} onPress={load} />
    </View>
  )
}

const styles = StyleSheet.create({
    reload:{
        position:'absolute',
        ...Platform.select({
            ios:{
                top:70,
            },
            android:{
                top:30,
            },
            default:{
                top:22,
            }
        }),
        right:15,
    }
})