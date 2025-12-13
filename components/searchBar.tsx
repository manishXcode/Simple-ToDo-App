import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name='search' size={26} color={'#333'} style={{marginLeft: 5}} />
      <TextInput placeholder='search' clearButtonMode='always' style={styles.inputBox} />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: Dimensions.get('screen').width - 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        gap: 8,
        borderRadius: 8,
        marginBottom: 18,
    },
    inputBox:{
        height: '85%',
        flex: 1,
    },
})