import { View, StyleSheet, Text } from 'react-native';

export default function Profile() {
  return (
    <View styles={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
