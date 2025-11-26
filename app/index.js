import { StyleSheet, Text, View, Image, } from "react-native";
import { StatusBar } from "expo-status-bar";
import foto2 from "../assets/foto2.jpg";

export default function Page() {
  return (
  
      <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.title}>Torre de Pisa</Text>

        <View style={styles.divisor}></View>

        <Text style={styles.title2}>Aqui vamos conhecer um pouca mais sobre ela</Text>
        <Image source={foto2} style={styles.foto2} />
       

        <Text style={styles.subtitle}>
          A Torre de Pisa é um campanário localizado na cidade de Pisa, na Itália,
          famosa por sua inclinação. Sua construção começou em 1173 para abrigar
          os sinos da Catedral de Pisa. Apenas cinco anos depois, ela começou a
          inclinar por causa do afundamento do solo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,

    // fundo mais elegante
    backgroundColor: "rgb(233, 206, 204)",
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 25,
    width: "100%",
    maxWidth: 380,
    alignItems: "center",

    // sombra mais bonita
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,

    // borda suave
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "serif",
  },
  
  title2: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "serif",
  },
  
 foto2: {
    width: "100%",
    height: 240,
    borderRadius: 15,
    marginBottom: 20,
 },

  divisor: {
    width: 70,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 10,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    marginBottom: 20,

    // sombra para destacar a imagem
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    textAlign: "center",
  },
});

