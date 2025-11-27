import { StatusBar } from "react-native-web";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import foto from "../assets/foto.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>SOBRE MIM</Text>
        <View style={styles.divisor}></View>

        <View style={styles.card}>
          <Image source={foto} style={styles.foto} />

          <View style={{ marginTop: 15 }}>
            <Text style={styles.info}>
              <Text style={styles.bold}> Nome: </Text> Ana Clara Amianti
            </Text>

            <Text style={styles.info}>
              <Text style={styles.bold}> RM: </Text> 08445
            </Text>

            <Text style={styles.info}>
              <Text style={styles.bold}> Endereço: </Text> 
              Rua José Bonifacio, 416 - Piquerobi, São Paulo
            </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(235, 208, 205)",
    paddingTop: 40,
  },

  card: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 25,
    alignItems: "center",
    width: "90%",
    maxWidth: 450,
    marginTop: 20,

    // Sombra mais moderna
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.20,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  title: {
    fontSize: Platform.OS === "web" ? 48 : 36,
    color: "#444",
    fontFamily: "serif",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  divisor: {
    width: 80,
    height: 5,
    backgroundColor: "#d6b28a",
    borderRadius: 10,
    marginTop: 8,
  },

  info: {
    fontSize: 20,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
    color: "#444",
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#d6b28a",

    // sombra na foto
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
});

