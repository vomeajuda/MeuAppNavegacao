import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const login = () => {
        if (usuario === "admin" && senha === "1234"){
            navigation.navigate("Home");
        } else {
            alert("Usuário ou senha incorretos");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput placeholder="Usuario" style={styles.textfields} value={usuario} onChangeText={setUsuario} />
            <TextInput placeholder="Senha" secureTextEntry={true} style={styles.textfields} value={senha} onChangeText={setSenha} />
            <Button 
                title="Entrar"
                onPress={login}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: 'add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    textfields: {
        width: windowWidth * 0.8,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});