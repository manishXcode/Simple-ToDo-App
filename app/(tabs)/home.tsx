import { Dimensions, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {  useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [inputName, setInputName] = useState('');

    const setName = async () => {
        try {
            await AsyncStorage.setItem('userName', inputName)
            setInputName('')
            console.log( `Name saved:  ${inputName}`)
        } catch (error) {
            console.log(error);
            
        }
    }
 
  return (
   <KeyboardAwareScrollView bottomOffset={62} contentContainerStyle={styles.container}>
        <SafeAreaView>

            <Text>Data Input</Text>
            <TextInput 
            value={inputName}
            onChangeText={setInputName}
            placeholder='Enter Name' 
            style={styles.inputBox} />

            <TouchableOpacity onPress={setName} style={styles.btn}>
                <Text style={styles.btnTxt}>Save Name</Text>
            </TouchableOpacity>

            <StatusBar barStyle={'dark-content'} />
        </SafeAreaView>
   </KeyboardAwareScrollView>  
   )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox:{
        height: 50,
        width: Dimensions.get('screen').width - 40,
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        marginBottom: 20,
        marginTop: 12,
    },
    btn:{
        height: 50,
        width: Dimensions.get('screen').width -40,
        borderRadius: 25,
        backgroundColor: '#32c83eff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
    },
    btnTxt:{
        fontSize: 16,
        fontWeight: 'bold'
    }
})