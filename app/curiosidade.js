import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import fotom from "../assets/mulhertorre.jpg";

export default function Page() {
  return (
    
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.title}>Curiosidades</Text>

  <View style={styles.divisor}></View>

       <Image source={fotom} style={styles.fotom} />

        <Text style={styles.subtitle}>
          A construção foi demorada: A construção levou cerca de 177 anos para ser concluída, pois foi realizada em três fases e interrompida por guerras. 
           {"\n\n"}
A inclinação começou cedo: A torre começou a se inclinar após a construção do terceiro andar, em 1178. 
Não é a mais inclinada: Apesar de sua fama, a Torre de Pisa não é a mais inclinada do mundo; a Torre de Suurhusen, na Alemanha, possui uma inclinação maior. 
 {"\n\n"}
Experimentos de Galileu: O cientista Galileu Galilei usou a torre para realizar experimentos sobre a queda de corpos, demonstrando que a velocidade de queda é independente da massa dos objetos, lançando duas bolas de canhão de pesos diferentes do topo. .
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