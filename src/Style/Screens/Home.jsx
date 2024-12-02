import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 60,
        color: "black",
        marginBottom: 50
    },
    searchContainer: {
        container: {
            backgroundColor: '#6f8faf',
            shadowColor: 'rgba(99, 99, 99, 0.2)',
            shadowOffset: {width: -2, height: 4},
            shadowRadius: 3,
            padding: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
        },
        title: {
            backgroundColor: '#6f8faf',
            fontSize: 20,
            color: 'white',
            fontWeight: '700',
            width: '60%',
            textAlign: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
        },
        noData: {
            padding: 20,
            textAlign: 'center',
            fontWeight: '600',
            color: 'white',
        },
        marginBottom: 20,
        padding: 10,
    },
})