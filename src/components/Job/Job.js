import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Job.style'


function Job({job, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.job}>{job.name}</Text>
                <Text style={styles.company}>{job.company.name}</Text>
                
                <View style={styles.location_container}>
                    <Text style={styles.location}>
                       {job.locations && job.locations.length > 0
                       ? job.locations[0].name
                       : "Unknown Location" }
                    </Text>
                </View>
                
                <Text style={styles.level}>
                     {job.levels && job.levels.length > 0
                     ? job.levels[0].name
                     : "Unknown Level" }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Job;