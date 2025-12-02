import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import escada from "../assets/escada.jpg";
import sinos from "../assets/sinos.jpg";

export default function Page() {
  return (
    <ScrollView style={styles.scrollContainer}>

      {/* Topo decorativo em onda */}
      <View style={styles.headerWave} />

      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* CARD GLASSMORPHISM */}
        <View style={styles.card}>
          <Text style={styles.title}>Parte interna da Torre</Text>

          <View style={styles.divisor}></View>

          <Text style={styles.subtitle}>
            A Torre de Pisa é, de fato, um campanário — uma torre construída para
            abrigar os sinos da Catedral de Pisa. Seu interior é formado por um 
            grande vão que vai da base até o topo, cinco lances de escadas em 
            espiral, dutos de ventilação e os sete sinos, que tocam durante as 
            missas da catedral.
            {"\n\n"}
            A foto a seguir mostra um trecho da escada que dá acesso aos sinos:
          </Text>

          <Image source={escada} style={styles.foto} />

          <Text style={styles.subtitle}>
            Quando se chega ao topo da Torre de Pisa, essa é a visão das escadas:
          </Text>

          <Image source={sinos} style={styles.foto} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "rgb(244, 136, 136)",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },

  // topo em onda (igual ao padrão das outras telas)
  headerWave: {
    width: "100%",
    height: 230,
    backgroundColor: "rgb(243, 216, 216)",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    opacity: 0.55,
    transform: [{ scaleX: 1.4 }],
  },

  // card glass
  card: {
    marginTop: -90,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    padding: 26,
    width: "90%",
    maxWidth: 380,
    borderRadius: 28,

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",

    elevation: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,

    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#2f2f2f",
    marginBottom: 5,
  },

  divisor: {
    width: 65,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 10,
    marginBottom: 18,
  },

  // imagens no mesmo estilo premium das outras telas
  foto: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    marginVertical: 18,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.7)",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "left",
  },
});
