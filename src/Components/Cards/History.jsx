import { StyleSheet, Text, View } from "react-native";

function CardSearch({ data }) {
    const {id, introduction: qtdIntro, search: qtdQuestion, qtd_users, total} = data;

    return (
        <View style={styles.container}>
            <Text>Número de Protocolo da Pesquisa: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF9F6",
        marginTop: 15,
        marginBottom: 5,
        padding: 15,
        borderRadius: 10
    }

})

export default CardSearch;