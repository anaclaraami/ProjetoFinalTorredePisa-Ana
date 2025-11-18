import { StatusBar } from "react-native-web";
import { StyleSheet, Text, View, Image} from "react-native";
import foto from "../assets/foto.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre mim</Text>
        <View>
         <Image source={foto} style={styles.foto} />
        </View>
        <Text style={styles.subtitle}>Ana Clara Amianti</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(255, 239, 232)",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
  marginBottom: 20,
  fontSize:32,
  },
  subtitle: {
    fontSize: 36,
    color: "#888",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 20,
  }
});
