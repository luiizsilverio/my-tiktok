import { View, StyleSheet, Text, Pressable, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function FeedItem({ data, currentVideo }) {
  const videoRef = useRef(null);
  const { height } = Dimensions.get("screen");
  const [status, setStatus] = useState({});

  function handlePlay() {
    if (status.isPlaying) {
      videoRef.current?.pauseAsync();
    } else {
      videoRef.current?.playAsync();
    }
  }

  useEffect(() => {
    if (currentVideo?.id === data?.id) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }

  }, [currentVideo])

  return (
    <Pressable onPress={handlePlay}>
      <View style={styles.info}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
      </View>

      <Video
        ref={videoRef}
        style={{ width: '100%', height }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(status)}
      />

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionsButton}>
          <Ionicons name="heart" size={34} color="#FFF" />
          <Text style={styles.actionText}>30.3K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionsButton}>
          <Ionicons name="chatbubble-ellipses" size={34} color="#FFF" />
          <Text style={styles.actionText}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionsButton}>
          <Ionicons name="bookmark" size={34} color="#FFF" />
        </TouchableOpacity>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
    bottom: 110
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0, 0.6)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 6
  },
  description: {
    color: '#FFF',
    marginRight: 24,
    textShadowColor: 'rgba(0,0,0, 0.3)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 6
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === "android" ? 120 : 170,
    gap: 8
  },
  actionText: {
    textAlign: 'center',
    color: '#FFF',

  }
})
