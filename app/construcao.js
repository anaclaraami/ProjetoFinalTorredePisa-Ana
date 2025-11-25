import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import fotoconstrucao from "../assets/fotoconstrucao.jpg";

export default function Page() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text style={styles.title}>Construção da Torre</Text>
        <Image source={fotoconstrucao} style={styles.foto1} />
        <Text style={styles.text}>
          A Torre de Pisa foi projetada como parte do complexo da Catedral de Pisa,
          que inclui o Batistério e o Camposanto Monumentale. Sua construção
          começou em 1173, durante o auge da riqueza da cidade, uma potência
          marítima importante ao lado de Gênova e Veneza.
          {"\n\n"}
          Projetada pelo arquiteto Bonanno Pisano, a torre teve suas obras
          interrompidas diversas vezes devido a guerras e problemas econômicos.
          Essas pausas contribuíram para sua inclinação característica, que
          começou ainda nas primeiras fases da construção.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(238, 219, 218)",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 380,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",

    // sombras para estética
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "cursive",
  },

  foto1: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
  },

  text: {
    fontSize: 15,
    textAlign: "justify",
    lineHeight: 22,
    color: "#333",
  },
});

