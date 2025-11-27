import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import foto2 from "../assets/foto2.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Bloco superior decorativo */}
      <View style={styles.headerShape} />

      <View style={styles.card}>
        <Text style={styles.title}>Torre de Pisa</Text>

      <Text style={styles.subtitle}>
          Bem-vindo ao mundo inclinado da Torre de Pisa!
        </Text>


        <Text style={styles.subtitle}>
          Descubra curiosidades e detalhes sobre um dos monumentos mais famosos do mundo.
        </Text>

        <Image source={foto2} style={styles.image} />

        <Text style={styles.textBody}>
          A Torre de Pisa é um campanário localizado na cidade de Pisa, na Itália,
          famosa por sua inclinação. Construída a partir de 1173, começou a entortar
          poucos anos depois devido ao solo instável da região.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // fundo elegante com gradiente simples
  container: {
    flex: 1,
    backgroundColor: "rgb(243, 216, 216)",
    alignItems: "center",
    justifyContent: "center",
  },

  // forma decorativa no topo
  headerShape: {
    position: "absolute",
    top: -150,
    width: 500,
    height: 350,
    backgroundColor: "rgb(244, 136, 136)",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    opacity: 0.35,
  },

  // cartão translúcido premium
  card: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: 28,
    borderRadius: 25,
    width: "88%",
    maxWidth: 380,
    alignItems: "center",

    // sombra suave e elegante
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2f2f2f",
    marginBottom: 6,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#5c5c5c",
    marginBottom: 18,
    lineHeight: 22,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 230,
    borderRadius: 18,
    marginBottom: 20,

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },

  textBody: {
    fontSize: 16,
    lineHeight: 24,
    color: "#3d3d3d",
    textAlign: "center",
  },
});
