import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 300
    },
    image:{
        flex: 1
    },
    overlay:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 5,
    },
    favorite: {
        position: 'absolute',
        top: 220,
        right: 20,
        zIndex: 10,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#F2F2F2'
    },
    content: {
        backgroundColor: '#F2F2F2',
        padding: 25,
        width: '90%',
        borderRadius: 8,
        marginTop: 25
    }
});