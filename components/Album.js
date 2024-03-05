import { View, Text, StyleSheet } from 'react-native'






export function Title() {
  return (
    <View>
      <Text style={styles.titulo}>Álbuns Da Banda Officina G3</Text>
      <Text style={styles.texto}>Indiferença (1996)   </Text>
      <Text style={styles.texto1}>  1. Davi, </Text>
      <Text style={styles.texto1}>  2. Fé, </Text>
      <Text style={styles.texto1}>  3. Magia Alguma, </Text>
      <Text style={styles.texto1}>  4. Glória , </Text>
      <Text style={styles.texto1}>  5. Profecias, </Text>


      <Text style={styles.texto}>Além do que os olhos podem ver (2004) </Text>
       <Text style={styles.texto1}>  1. Intro , </Text>
      <Text style={styles.texto1}>  2. Mais Alto, </Text>
      <Text style={styles.texto1}>  3. Réu ou juiz, </Text>
      <Text style={styles.texto1}>  4. Meu legado , </Text>
      <Text style={styles.texto1}>  5. Através Da porta, </Text>


      <Text style={styles.texto}>Depois da guerra (2008) </Text>
       <Text style={styles.texto1}>  1. D.A.G, </Text>
      <Text style={styles.texto1}>  2. Meus propios meios, </Text>
      <Text style={styles.texto1}>  3. Eu sou , </Text>
      <Text style={styles.texto1}>  4. Meus passos , </Text>
      <Text style={styles.texto1}>  5. Continuar, </Text>
      
      
    </View>
   
    
  
    
  )
}





const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    
    textAlign: 'center',
    fontWeight: 'bold',
   
    paddingBottom: 15,
    paddingTop: 15
  },

  texto: {
    marginLeft: 10,
    fontWeight: 'bold',
  }
})
