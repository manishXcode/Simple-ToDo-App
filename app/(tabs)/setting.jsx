import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage/src/AsyncStorage'
import { useFocusEffect } from '@react-navigation/native'


const Setting = () => {
    const [showName, setShowname] = useState('')
    
    const getName = async () => {
        try {
            let fetchName = await AsyncStorage.getItem('userName');
            if (fetchName !== null) {
                setShowname(fetchName)
                console.log(showName);
                
            } else {
                console.log('Failed');
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     getName()
    // })


    useFocusEffect(
        useCallback(() => {
            getName()
            return() => {
                console.log('Screen changed')
            }
        }, [])
    )

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{showName}</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 21,
        fontWeight: '600',
        color: '#461f1fff'
    }
})