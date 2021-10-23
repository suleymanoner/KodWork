import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigation from './navigation/DrawerNavigation'
import FavProvider from './context/FavProvider'

function Router() {
  return(
    <FavProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </FavProvider>
  )
}

export default Router;