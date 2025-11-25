import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.title}>Torre de Pisa</Text>

        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Leaning_Tower_of_Pisa_%28cropped%29.jpg/640px-Leaning_Tower_of_Pisa_%28cropped%29.jpg",
          }}
        />

        <Text style={styles.subtitle}>
          A Torre de Pisa é um campanário localizado na cidade de Pisa, na Itália,
          famosa por sua inclinação. Sua construção começou em 1173 para abrigar
          os sinos da Catedral de Pisa, mas apenas cinco anos depois ela começou
          a inclinar por causa do afundamento do solo.
        </Text>
      </View>
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
    fontFamily: "cursive",
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    textAlign: "center",
  },
});
