import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        padding: 20,
        flexDirection: "column",
        flex: 1
    },
    graphic: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
        marginTop: 20
    },
    noSearchText: {
        fontWeight: "600",
        color: "gray",
        marginTop: 200,
        alignSelf: "center"
    }
})