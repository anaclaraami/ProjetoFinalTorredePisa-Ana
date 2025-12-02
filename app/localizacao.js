import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import mapa from "../assets/mapatorre.jpg";

export default function Page() {
  return (
    <ScrollView style={styles.scrollContainer}>

      {/* Topo em onda */}
      <View style={styles.headerWave} />

      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Card estilizado glass */}
        <View style={styles.card}>
          <Text style={styles.title}>Localização</Text>

          <View style={styles.divisor}></View>

          <Image source={mapa} style={styles.fotom} />

          <Text style={styles.subtitle}>
            A Torre de Pisa fica na cidade de Pisa, na região da Toscana, na Itália.
            Ela está situada na Piazza dei Miracoli, um grande espaço aberto
            considerado um dos centros históricos mais importantes do país.
            {"\n\n"}
            Nesse local, além da torre, também estão a Catedral de Pisa e o
            Batistério, formando um conjunto arquitetônico muito visitado por
            turistas do mundo todo.
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

  // imagem estilizada com borda translúcida
  fotom: {
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

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "left",
  },
});
