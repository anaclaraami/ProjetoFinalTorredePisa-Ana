import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
 <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Torre de Pisa</Text>
        <Text style={styles.subtitle}>"A Torre de Pisa é um campanário localizado na cidade de Pisa,
          na Itália, que se tornou um dos monumentos mais conhecidos do país por um motivo: a sua inclinação.
          A Torre de Pisa começou a ser construída, em 1173, com o objetivo de abrigar os sinos da Catedral de Pisa, e apenas cinco anos depois começou a se inclinar por
          causa do afundamento do solo."
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
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    fontFamily: "cursive",
  },
  subtitle: {
    fontSize: 10,
    color: "#343232ff",
  },
});
