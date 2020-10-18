import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

//images
import mapMarker from '../images/map-marker.png';


export default function OrphanagesMap(){
    function handleNavigateToOrphanageDetails(){
      navigation.navigate('OrphanageDetails');
    }
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map} 
          initialRegion={{
            latitude: -27.2892852,
            longitude: -49.6481892,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
            }}
            >
              <Marker 
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{        
                latitude: -27.2892852,
                longitude: -49.6481892,
              }}
              >
               <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>Orfanato Jaraguá</Text>
                </View>
               </Callout> 
              </Marker>
            </MapView>
            <View style={styles.footer}>
              <Text style={styles.footerText}>2 orfanatos encontrados</Text>
              <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>
        </View>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  
    elevation :3,
  },
  
  calloutText: {
    color: '#0089A5',
    fontSize: 14,
  },
  
  footer: {
    position: 'absolute',
    left: 24,
    right:24,
    bottom: 32,
  
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    elevation: 3,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2, }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84
  },
  
  footerText: {
    color: '#8FA7B3',
  },
  
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    text: {
      color: '#FFF'
    }});