import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#efefef",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    job: {
        fontSize: 15,
        fontWeight: "bold",
    },
    company: {
        fontSize: 13,
        marginVertical: 3
    },
    location_container: {
        flexWrap: "wrap"
    },
    location: {
        backgroundColor: '#FF5C58',
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 13,
        marginVertical: 2,
    },
    level: {
        textAlign: "right",
        color: "#FF5C58",
        fontWeight: "bold"
    }
})