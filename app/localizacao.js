import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import mapa from "../assets/mapatorre.jpg";

export default function Page() {
  return (
    
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.title}>Localização</Text>

  <View style={styles.divisor}></View>

       <Image source={mapa} style={styles.fotom} />

        <Text style={styles.subtitle}>
          A Torre de Pisa fica na cidade de Pisa, na região da Toscana, na Itália. Ela está situada na Piazza dei Miracoli, um grande espaço aberto considerado um dos centros históricos mais importantes do país. Nesse local, além da torre, também estão a Catedral de Pisa e o Batistério, formando um conjunto arquitetônico muito visitado por turistas do mundo todo.
        </Text>
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

 fotom: {
    width: "100%",
    height: 240,
    borderRadius: 15,
    marginBottom: 20,
 },
 divisor: {
    width: 60,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    textAlign: "center",
  },
});