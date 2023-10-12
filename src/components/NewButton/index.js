import { View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function NewButton({ size }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Entypo name="plus" size={size} color="#101010" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 4,
    borderLeftColor: '#1ebfc7',
    borderRightWidth: 4,
    borderRightColor: '#f43071',
    borderRadius: 6
  },
  content: {
    backgroundColor: '#fff',
    paddingVertical: 1,
    paddingHorizontal: 6,
    borderRadius: 3
  }
})
