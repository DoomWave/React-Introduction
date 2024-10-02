import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        backgroundColor: "black",
        elevation:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    header: {
        flexDirection: "50%",
    },
    social: {

    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: "50%"
    },
    name: {
       fontSize: 24,
       fontWeight: "bold", 
       marginBottom: 5,
    },
    texts: {

    },
})