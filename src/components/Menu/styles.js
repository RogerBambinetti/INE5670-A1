import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menu:{
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#F2F2F2',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttons:{
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});