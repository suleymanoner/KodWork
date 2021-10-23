import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Jobs from '../pages/Jobs'
import Details from '../pages/Details'

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Jobs" 
                component={Jobs} 
                options={{title: 'Jobs', headerTintColor: '#FF5C58'}}/>
            <Stack.Screen 
            name="Details" 
            component={Details} />
        </Stack.Navigator>
    )
}

export default StackNavigator;