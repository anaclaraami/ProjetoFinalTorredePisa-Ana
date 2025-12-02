import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import fotom from "../assets/mulhertorre.jpg";

export default function Page() {
  return (
    <ScrollView style={styles.scrollContainer}>

      {/* topo decorativo */}
      <View style={styles.headerWave} />

      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* CARD GLASSMORPHISM */}
        <View style={styles.card}>
          <Text style={styles.title}>Curiosidades</Text>

          <View style={styles.divisor}></View>

          <Image source={fotom} style={styles.foto} />

          <Text style={styles.subtitle}>
            A construção levou cerca de 177 anos para ser concluída, pois foi
            realizada em três fases e interrompida por guerras.
            {"\n\n"}
            A torre começou a se inclinar após a construção do terceiro andar,
            em 1178.
            {"\n\n"}
            Apesar da fama, a Torre de Pisa não é a mais inclinada do mundo;
            a Torre de Suurhusen, na Alemanha, possui inclinação maior.
            {"\n\n"}
            O cientista Galileu Galilei usou a torre para realizar experimentos
            sobre queda de corpos, demonstrando que a velocidade da queda não
            depende da massa dos objetos.
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

  // topo em onda
  headerWave: {
    width: "100%",
    height: 230,
    backgroundColor: "rgb(243, 216, 216)",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    opacity: 0.55,
    transform: [{ scaleX: 1.4 }],
  },

  // card glass premium
  card: {
    marginTop: -80,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    padding: 28,
    width: "90%",
    maxWidth: 380,
    borderRadius: 28,

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",

    elevation: 18,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,

    alignItems: "center",
  },

  title: {
    fontSize: 32,
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
    marginBottom: 20,
  },

  foto: {
    width: "100%",
    height: 260,
    borderRadius: 20,
    marginBottom: 20,

    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.7)",

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "left",
  },
});
