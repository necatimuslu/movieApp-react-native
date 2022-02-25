import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Modal,
} from 'react-native';
import {imageSrc} from '../services/baseUrl';
import {getMovieById} from '../services/movieService';

import PlayButton from './components/PlayButton';
import MovieVideoPlayer from './components/MovieVideoPlayer';
const placeholderImage = require('../../assets/images/fake.jpeg');
const dimension = Dimensions.get('screen');
const Detail = ({route, navigation}) => {
  const [detailMovie, setDetailMovie] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const movieId = route.params.movieId;

  useEffect(() => {
    getMovieById(movieId)
      .then(res => {
        setDetailMovie(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {loaded && (
        <View>
          <ScrollView>
            {detailMovie.poster_path ? (
              <Image
                style={styles.image}
                source={{
                  uri: `${imageSrc}${detailMovie.poster_path}`,
                }}
              />
            ) : (
              <View>
                <Image style={styles.image} source={placeholderImage} />
                <Text style={styles.movieText}>
                  {detailMovie.title && detailMovie.title
                    ? detailMovie.title.substring(0, 15) + '...'
                    : detailMovie.title}
                </Text>
              </View>
            )}
            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton
                  handlePress={videoShown}
                  modalVisible={modalVisible}
                />
              </View>

              {detailMovie.title && (
                <Text style={styles.movieText}>{detailMovie.title}</Text>
              )}
            </View>
            {detailMovie.genres && (
              <View style={styles.genresContainer}>
                {detailMovie.genres.map((g, i) => (
                  <Text style={styles.genreTitle} key={i}>
                    {g.name}
                  </Text>
                ))}
              </View>
            )}
            {detailMovie.vote_average && (
              <View style={styles.container}>
                <Text>{detailMovie.vote_average}</Text>
              </View>
            )}
            {detailMovie.overview && (
              <View style={styles.container}>
                <Text>{'Açıklama :' + detailMovie.overview}</Text>
              </View>
            )}
            {detailMovie.release_date && (
              <View style={styles.container}>
                <Text style={styles.releaseDate}>
                  {'Çıkış Tarihi :' + detailMovie.release_date}
                </Text>
              </View>
            )}
          </ScrollView>
          <Modal animationType="slide" visible={modalVisible}>
            <MovieVideoPlayer navigation={navigation} videoShown={videoShown} />
          </Modal>
        </View>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },
  image: {
    height: dimension.height / 2.1,
  },
  movieText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 3,
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  genreTitle: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  playButton: {
    position: 'absolute',
    top: -28,
    right: 20,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
