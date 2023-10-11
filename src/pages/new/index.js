import { View, StyleSheet, Text } from 'react-native';

export default function New() {
  return (
    <View styles={styles.container}>
      <Text>New</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
