import React from 'react'
import { View, Text, ScrollView, Alert} from 'react-native'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch/useFetch'
import styles from './Details.style'
import HtmlRender from 'react-native-render-html'
import {Dimensions} from 'react-native';
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'

function Details({route}) {

    const {id} = route.params
    const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`)
    const dispatch = useDispatch()

    const source = {
        html: `${data.contents}`
    }

    const handleSubmitJob = () => {
        Alert.alert('Successful!', 'Your request received!');
      };

    const handleFavouriteJob = favouriteJob => {
        dispatch({type: "ADD_FAV", payload: {favouriteJob}})
        Alert.alert('Successful!', 'Job added to favorites!');
    };
    
    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.upper_container}>
                <Text style={styles.header_text}>{data.name}</Text>
                <View style={styles.upper_location_container}>
                <Text style={styles.locations_left}>Locations : </Text>
                <Text>
                    {data.locations && data.locations.length > 0
                    ? data.locations[0].name
                    : 'Unknown Location'}
                </Text>
                </View>
                <View style={styles.upper_job_container}>
                <Text style={styles.job_left}>Job Level : </Text>
                <Text>
                    {data.levels && data.levels.length > 0
                    ? data.levels[0].name
                    : 'Unknown Level'}
                </Text>
                </View>
                <Text style={styles.job_detail}>Job Detail</Text>
            </View>
            <View style={styles.info_container}>
                <HtmlRender
                baseStyle={styles.info_container_text}
                contentWidth={Dimensions.get('window').width}
                source={source}
                />
            </View>
            <View style={styles.button_container}>
                <Button icon="aws" text="Submit" onPress={handleSubmitJob} />
                <Button
                icon="heart"
                text="Favourite Job"
                onPress={() => handleFavouriteJob(data)}
                />
            </View>
        </ScrollView>
    )
}

export default Details;