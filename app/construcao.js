import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import fotoconstrucao from "../assets/fotoconstrucao.jpg";

export default function Page() {
  return (
      <View style={styles.container}> 
        <ScrollView style={{ flex: 1 }}>
          <StatusBar style="auto" />

          <View style={styles.card}>
            <Text style={styles.title}>Construção da Torre</Text>

            <View style={styles.divisor}></View>

            <Image source={fotoconstrucao} style={styles.foto1} />

            <Text style={styles.text}>
              A Torre de Pisa foi projetada como parte do complexo da Catedral de Pisa,
              que inclui o Batistério e o Camposanto Monumentale. Sua construção
              começou em 1173, durante o auge da riqueza da cidade, uma potência
              marítima importante ao lado de Gênova e Veneza.
              {"\n\n"}
              Projetada pelo arquiteto Bonanno Pisano, a torre teve suas obras
              interrompidas diversas vezes devido a guerras e problemas econômicos.
              Essas pausas contribuíram para sua inclinação característica, que
              começou ainda nas primeiras fases da construção.
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
    padding: 20,

    // gradiente fake com duas cores
    backgroundColor: "rgb(243, 216, 216)",
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 400,
    borderRadius: 25,
    padding: 25,
    alignItems: "center",

    // sombra
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,

    // borda suave decorativa
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "serif",
  },

  divisor: {
    width: 60,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 20,
  },

  foto1: {
    width: "100%",
    height: 240,
    borderRadius: 15,
    marginBottom: 20,

    // leve sombra
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },

  text: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
    color: "#444",
    marginTop: 5,
  },
});
