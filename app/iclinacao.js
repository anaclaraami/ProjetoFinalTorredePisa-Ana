import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import torre2 from "../assets/torre2.jpg";

export default function Page() {
  return (
    <ScrollView style={styles.scrollContainer}>

      {/* Topo decorativo em onda */}
      <View style={styles.headerWave} />

      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* CARD com efeito glassmorphism */}
        <View style={styles.card}>
          <Text style={styles.title}>Inclinação</Text>

          <View style={styles.divisor}></View>

          <Image source={torre2} style={styles.foto2} />

          <Text style={styles.subtitle}>
            A Torre de Pisa é famosa por sua inclinação, que começou ainda durante  
            sua construção no século XII. Isso aconteceu porque ela foi erguida  
            sobre um solo instável, formado por argila, areia e água subterrânea,  
            que não era firme o suficiente para sustentar o peso da estrutura.
            {"\n\n"}
            Como resultado, a torre afundou mais de um lado e passou a inclinar.  
            Hoje, ela tem uma inclinação de cerca de 4 graus, o que faz com que o  
            topo fique aproximadamente 4 metros deslocado do eixo vertical original.
            {"\n\n"}
            Antes das obras de estabilização concluídas em 2001, essa inclinação  
            chegava a quase 5,5 graus, colocando a torre em risco de desmoronamento.  
            Depois de estudos e intervenções, a estrutura foi estabilizada.
            {"\n\n"}
            A inclinação não foi proposital — foi um erro de engenharia que virou  
            justamente o maior charme do monumento.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "rgb(244, 136, 136)",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },

  // Onda do topo (igual dos outros arquivos)
  headerWave: {
    width: "100%",
    height: 230,
    backgroundColor: "rgb(243, 216, 216)",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    opacity: 0.55,
    transform: [{ scaleX: 1.4 }],
  },

  // CARD GLASSMORPHISM
  card: {
    marginTop: -90,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    padding: 26,
    width: "90%",
    maxWidth: 380,
    borderRadius: 28,

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",

    elevation: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,

    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#2f2f2f",
  },

  divisor: {
    width: 65,
    height: 4,
    backgroundColor: "#d6b28a",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 18,
  },

  // imagem com borda e sombra estilo premium
  foto2: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    marginBottom: 22,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.7)",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "left",
  },
});
