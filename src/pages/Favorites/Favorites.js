import React from 'react'
import { View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Job from '../../components/Job/Job'
import styles from './Favorites.style'
import Button from '../../components/Button'


function Favorites({navigation}) {

    const jobs = useSelector(state => state.favoriteList)
    const dispatch = useDispatch()
    

    const removeFav = (item) => {
        dispatch({type: "REMOVE_FAV", payload: {removeJob : item}})
    }

    const handleNavigation = (id, name) => {
        navigation.navigate("Details", {id, name})
    }

    const renderFavItems = ({item}) => (
        <View style={styles.inner_container} >
            <Job job={item} onPress={() => handleNavigation(item.id, item.name)} />
            <View style={styles.button_container} >
                <Button icon="delete" text="Remove Job" onPress={() => removeFav(item)} />
            </View>
        </View>
    )

    return(
        <FlatList data={jobs} renderItem={renderFavItems} style={styles.container} />
    )
}

export default Favorites;