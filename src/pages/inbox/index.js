import { View, StyleSheet, Text } from 'react-native';

export default function Inbox() {
  return (
    <View styles={styles.container}>
      <Text>INBOX</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
