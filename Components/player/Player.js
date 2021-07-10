import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import colors from "../../config/colors";
import { Audio } from "expo-av";
import Controller from "./Controller";

const { width, height } = Dimensions.get("window");

export default function Player({ songs }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();

  // the thing i need is a good music api at least and then use that music api to play the song
  // what do i need ?
  // api ,set it to a array of songs, get the uri of the one song pass that to the function
  //

  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);

  const position = useRef(Animated.divide(scrollX, width)).current;

  const playSound = async () => {
    console.log("loading .the sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/ezel.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  };
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);

      setSongIndex(val);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const goPrv = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          alignItems: "center",
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100
              ),
            },
          ],
        }}
      >
        <Animated.Image
          source={{ uri: item.image }}
          style={{ width: 320, height: 320, borderRadius: 5 }}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ height: 320 }}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />
      </SafeAreaView>
      <View>
        <Text style={styles.title}>{songs[songIndex].title}</Text>
        <Text style={styles.artist}>{songs[songIndex].artist}</Text>
      </View>

      <Controller play={playSound} onNext={goNext} onPrv={goPrv} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    textTransform: "capitalize",
    color: colors.secondary,
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
    color: colors.secondary,
  },
  container: {
    justifyContent: "space-evenly",
    height: height,
    maxHeight: 500,
  },
});
