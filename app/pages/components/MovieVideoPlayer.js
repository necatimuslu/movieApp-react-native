import React from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
const youtubeUrl = `https://www.youtube.com/watch?v=sOuRfwyF6IM&list=RDytbhQ7cSA_k&start_radio=1`;
const MovieVideoPlayer = ({navigation, videoShown}) => {
  return (
    <View>
      <VideoPlayer
        onBack={() => videoShown()}
        source={{uri: youtubeUrl}}
        navigatior={navigation}
        onEnd={() => videoShown()}
        fullscreenOriantation="all"
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      />
    </View>
  );
};

export default MovieVideoPlayer;
