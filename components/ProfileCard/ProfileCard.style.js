import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    header: {
        flexDirection: "row"
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: "50%"
    },
    name: {
        fontSize: 25,
        fontWeight: "bold", 
        marginBottom: 5,
     },
    texts: {
        flex: 1,
        padding: 15,
    },
    social: {

    },

})