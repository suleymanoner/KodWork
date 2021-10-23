import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigator from './StackNavigation'
import Favorites from '../pages/Favorites'

const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
            name="StackNavigator" 
            component={StackNavigator} 
            options={{
                headerShown: false,
                title: "Jobs"
            }} />
            <Drawer.Screen 
            name="Favorites" 
            component={Favorites} 
            options={{headerTintColor: '#FF5C58'}}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;