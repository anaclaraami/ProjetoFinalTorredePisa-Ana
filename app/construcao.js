import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import fotoconstrucao from "../assets/fotoconstrucao.jpg";

export default function Page() {
  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Topo decorativo em onda */}
      <View style={styles.headerWave} />

      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Card glassmorphism */}
        <View style={styles.card}>
          <Text style={styles.title}>Construção da Torre</Text>

          <View style={styles.divisor}></View>

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
  scrollContainer: {
    backgroundColor: "rgb(244, 136, 136)",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },

  // topo decorativo em onda
  headerWave: {
    width: "100%",
    height: 230,
    backgroundColor: "rgb(243, 216, 216)",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    opacity: 0.55,
    transform: [{ scaleX: 1.4 }],
  },

  // Card glassmorphism
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
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#2f2f2f",
  },

  divisor: {
    width: 65,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 18,
  },

  foto1: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    marginBottom: 22,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.7)",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },

  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
  },
});

