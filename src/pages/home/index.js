import { View, StyleSheet, Text } from 'react-native';

export default function Home() {
  return (
    <View styles={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
