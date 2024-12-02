import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        padding: 20,
        flex: 1
    },
    title: {
        color: "black",
        padding: 30,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '800',
    },
    selectionContainer: {
        flex: 1,
        alignItems: "center",
    },
    selection: {
        text: {
            textAlign: "left",
            fontSize: 16,
            color: 'white',
            fontWeight: '700',
        },
        backgroundColor: '#6f8faf',
        width: '100%',
        padding: 15,
        borderRadius: 20,
        marginTop: 25
    }
})