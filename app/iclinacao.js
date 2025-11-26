import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import torre2 from "../assets/torre2.jpg";

export default function Page() {
  return (
    <ScrollView style={{ flex: 1 }}>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Text style={styles.title}>Inclinação</Text>


       <Image source={torre2} style={styles.foto2} />

        <Text style={styles.subtitle}>
          A Torre de Pisa é famosa por sua inclinação, que começou ainda durante sua construção no século XII. Isso aconteceu porque ela foi erguida sobre um solo instável, formado por argila, areia e água subterrânea, que não era firme o suficiente para sustentar o peso da estrutura.
           {"\n\n"}
           Como resultado, a torre afundou mais de um lado e passou a inclinar. Hoje, ela tem uma inclinação de cerca de 4 graus, o que faz com que o topo fique aproximadamente 4 metros deslocado do eixo vertical original. No passado, antes das obras de estabilização finalizadas em 2001, essa inclinação chegava a quase 5,5 graus, colocando a torre em risco de desmoronamento. Depois de muitos estudos e intervenções, a estrutura foi estabilizada, a inclinação foi reduzida um pouco e agora a torre é considerada segura por pelo menos 200 anos.
            {"\n\n"}
            Apesar de muita gente pensar que a inclinação faz parte do projeto, ela não foi proposital — na verdade, foi um erro de engenharia que acabou se tornando o principal charme e símbolo do monumento.
        </Text>
      </View>
    </View>
    </ScrollView>
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

 foto2: {
    width: "100%",
    height: 240,
    borderRadius: 15,
    marginBottom: 20,
 },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    textAlign: "center",
  },
});