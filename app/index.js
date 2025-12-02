import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import foto2 from "../assets/foto2.jpg";

export default function HomePage() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.headerWave} />
      <View style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.card}>
          <Text style={styles.title}>Torre de Pisa</Text>
          <Text style={styles.subtitle}>Bem-vindo ao mundo inclinado da Torre de Pisa!</Text>
          <Image source={foto2} style={styles.image} />
          <Text style={styles.textBody}>
            A Torre de Pisa é um campanário localizado na cidade de Pisa, na Itália, famosa por sua inclinação.
          </Text>

          <Text style={styles.textBody}>Aqui vamos conhecer um pouco sobre sua:</Text>
          {/* Botões apenas visuais */}
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Construção</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Inclinação</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Localização</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Parte Interna</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Curiosidades</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { backgroundColor: "rgb(244, 136, 136)" },
  container: { flex: 1, alignItems: "center", paddingBottom: 40 },
  headerWave: {
    width: "100%",
    height: 230,
    backgroundColor: "rgb(243, 216, 216)",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    opacity: 0.55,
    transform: [{ scaleX: 1.4 }],
  },
  card: {
    marginTop: -100,
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 26,
    width: "88%",
    maxWidth: 380,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    elevation: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
    alignItems: "center",
  },
  title: { fontSize: 30, fontWeight: "700", color: "#2f2f2f", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#4a4a4a", textAlign: "center", marginBottom: 20, lineHeight: 22 },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 26,
    marginBottom: 22,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.7)",
    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 14,
  },
  textBody: { fontSize: 16, lineHeight: 24, color: "#333", textAlign: "center", marginBottom: 20 },
  buttonsContainer: { width: "100%", marginTop: 10 },
  button: { backgroundColor: "#d6b28a", padding: 12, borderRadius: 18, marginVertical: 6 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600", textAlign: "center" },
});


