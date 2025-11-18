import { StatusBar } from "react-native-web";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import foto from "../assets/foto.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre mim</Text>
        <View style={styles.main} />
        <View>
          <Image source={foto} style={styles.foto} />
        </View>
        <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>Nome:</Text> Ana Clara Amianti
        </Text>
       <Text style={styles.subtitle}>
        <Text style={{fontWeight: "bold"}}>RM</Text> 08445
       </Text>
       <Text style={styles.subtitle}>
        <Text style={{fontWeight: "bold"}}>Endereço</Text> Rua José Bonifacio, 416 - Piquerobi, São Paulo
       </Text>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(255, 239, 232)",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    alignItems: "center",
  },
  title: {
    marginBottom: -15,
    //fontSize: 32,
     fontSize: Platform.OS === "web" ? 48 : 36,
    color: "#888",
      fontFamily: "cursive",
  },
  subtitle: {
    fontSize: 20,
    color: "#888",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    //marginBottom: 20,
  }
});
