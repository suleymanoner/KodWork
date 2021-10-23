import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      upper_container: {
        backgroundColor: '#C9C9C9',
        padding: 10,
      },
      header_text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#3C3C3C',
      },
      upper_location_container: {
        flexDirection: 'row',
        marginVertical: 3,
      },
      locations_left: {
        color: '#eb4d4b',
        fontWeight: 'bold',
      },
      upper_job_container: {
        flexDirection: 'row',
        marginVertical: 2,
      },
      job_left: {
        color: '#eb4d4b',
        fontWeight: 'bold',
      },
      job_detail: {
        textAlign: 'center',
        fontSize: 22,
        color: '#3C3C3C',
      },
      info_container: {
        flex: 1,
        padding: 10,
      },
      info_container_text: {
        fontSize: 16,
      },
      button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#eaeaea',
      },
})