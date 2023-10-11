import { View, StyleSheet, Text } from 'react-native';

export default function Search() {
  return (
    <View styles={styles.container}>
      <Text>Busca</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
