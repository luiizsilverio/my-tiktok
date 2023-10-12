import { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';

import FeedItem from '../../components/FeedItem';

const feedItems = [
  {
    id: '1',
    video: 'https://i.imgur.com/Cnz1CPK.mp4',
    name: '@sujeitoprogramador',
    description: 'Criando o ShortDev do zero com RN',
   },
  {
    id: '2',
    video: 'https://i.imgur.com/E0tK2bY.mp4',
    name: '@henriquesilva',
    description: 'Fala turma, estou aprendendo React Native com sujeito programador',
   },
  {
    id: '3',
    video: 'https://i.imgur.com/mPFvFyX.mp4',
    name: '@sujeitoprogramador',
    description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
   }
]

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(feedItems[0]);
  const { height } = Dimensions.get("screen");

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVideo(feedItems[viewableItems[0].index]);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={[styles.text, {color: "#DDD"}]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.text, {color: "#FFF"}]}>Para você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      {/* viewAreaCoveragePercentThreshold: 100
          100 significa que um item deve estar totalmente visível na tela
          para contar como visível
      */}

      <FlatList
        data={feedItems}
        onViewableItemsChanged={onViewRef?.current}
        showsVerticalScrollIndicator={false}
        snapToAlignment='center'
        snapToInterval={height}
        scrollEventThrottle={200}
        decelerationRate="fast"
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
        renderItem={({ item }) => (
          <FeedItem data={item} key={item.id} currentVideo={currentVideo} />
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    zIndex: 99,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 4,
  },
  indicator: {
    backgroundColor: '#FFF',
    width: 32,
    height: 2,
    alignSelf: 'center'
  }
})
