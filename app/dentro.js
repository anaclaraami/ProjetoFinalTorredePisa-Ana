import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import escada from "../assets/escada.jpg";
import sinos from "../assets/sinos.jpg";

export default function Page() {
  return (
    
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.title}>Por dentro da Torre</Text>
 
    <View style={styles.divisor}></View>

        <Text style={styles.subtitle}>
      "A Torre de Pisa é, de fato, um campanário, ou seja, é uma torre construída para abrigar os sinos da Catedral de Pisa, situada ao lado do monumento. O interior dela é formado por um amplo vão que vai da base até o topo, por cinco lances de degraus que formam escadas em espiral, por dutos de ventilação e pelos sete sinos, que tocam quando da realização de missas na catedral. A foto a seguir mostra um trecho da escada que dá acesso aos sinos:"

        </Text>
         <Image source={escada} style={styles.foto2} />
          <Text style={styles.subtitle}>
            Quando se chega ao topo da Torre de Pisa, essa é a visão das escadas:
          </Text>
            <Image source={sinos} style={styles.foto2} />

      </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(238, 219, 218)",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    maxWidth: 380,
    alignItems: "center",
    elevation: 4, // sombra para Android
    shadowColor: "#000", // sombra para iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
     fontFamily: "serif",
  },

 foto2: {
    width: "50%",
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
 },
 divisor: {
    width: 60,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 50,
    marginTop: 8,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    textAlign: "center",
  },
});