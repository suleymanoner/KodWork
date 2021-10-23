import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style'

function Button({icon, text, onPress, disabled= false}) {
    return(
        <TouchableOpacity 
        style={styles.container} 
        disabled={disabled} 
        onPress={onPress}>
        <Icon name={icon} color="#fff" size={20} />
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;