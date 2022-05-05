import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: "#FFF",
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden'
    },
    title: {
        fontSize: 15,
        marginBottom: 5
    },
    content: {
        color: '#595959'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    body: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    imageContainer: {
        width: '100%',
        height: 200
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
});