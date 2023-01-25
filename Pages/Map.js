import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';


const Map = ({route}) => {
  const navigation = useNavigation()
  const {coordinates , setCoordinates} = route.params
  console.log(coordinates.longitude);
  return (
    <View style={{height:'100%'}}>
      <MapView
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}>
        <Marker draggable onDragEnd={(e) => console.log(setCoordinates({
          latitude:e.nativeEvent.coordinate.latitude,
          longitude:e.nativeEvent.coordinate.longitude
        }))} coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }} />
      </MapView>
      <TouchableOpacity style={styles.finalize} onPress={()=>navigation.navigate("Home")}><Text style={{color:'white',fontSize:20, fontWeight:'700'}}>Done</Text></TouchableOpacity>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
  finalize:{
    zIndex:999,
    backgroundColor:'blue',
    alignSelf:'center',
    width:'50%',
    height:50,
    position:'absolute',
    bottom:'6%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'10',
    shadowColor: "#555",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 13.16,
    elevation: 20,
  }
})