import React from 'react'
import { View, FlatList} from 'react-native'
import Config from 'react-native-config';
import Job from '../../components/Job/Job';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import styles from './Jobs.style'

function Jobs({navigation}) {

    const {loading, data, error} = useFetch(`${Config.API_URL}?page=1`)

    const newData = data.results

    const navigateDetails = (id , name) => {
        navigation.navigate("Details", {id, name})
    }

    const renderJobs = ({item}) => <Job job={item} onPress={() => navigateDetails(item.id, item.name)} />

    if(error) {
        return <Error />
    }

    if(loading) {
        return <Loading />
    }

    return(  
        <View style={styles.container} >
            <FlatList data={newData} renderItem={renderJobs} /> 
        </View>
    )
}

export default Jobs;