import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  getPopulerMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPopulerTv,
  getFamilyMovies,
  getNatureMovies,
} from '../services/movieService';
import {SliderBox} from 'react-native-image-slider-box';
import {imageSrc} from '../services/baseUrl';
import CardList from './components/CardList';
import {Error} from './components/Error';
const dimension = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [populerMovies, setPopulerMovies] = useState([]);
  const [moviesImages, setMoviesImages] = useState('');
  const [topRatedMovies, setTopratedMovies] = useState([]);
  const [populerTv, setPopulerTv] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [natureMovies, setNatureMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUpcomingMovies();
    fetchPopulerMovies();
    fetchTopRatedMovies();
    fetchPopulerTv();
    fetchFamilyMovies();
    fetchNatureMovies();
  }, []);

  const fetchUpcomingMovies = () => {
    getUpcomingMovies().then(res => {
      const movies = res.data.results;

      const imagesMovies = [];

      movies.forEach(movie => {
        imagesMovies.push(`${imageSrc}${movie.poster_path}`);
      });

      setMoviesImages(imagesMovies);
      setLoading(true);
    });
  };

  const fetchPopulerMovies = () => {
    getPopulerMovies()
      .then(res => {
        setPopulerMovies(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };
  const fetchTopRatedMovies = () => {
    getTopRatedMovies()
      .then(res => {
        setTopratedMovies(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };
  const fetchPopulerTv = () => {
    getPopulerTv()
      .then(res => {
        setPopulerTv(res.data.results);
      })
      .catch(err => console.log(err));
  };
  const fetchFamilyMovies = () => {
    getFamilyMovies()
      .then(res => {
        setFamilyMovies(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };
  const fetchNatureMovies = () => {
    getNatureMovies()
      .then(res => {
        setNatureMovies(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <>
      {loading && !error && (
        <ScrollView style={styles.scroolStyle}>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={dimension.height / 1.77}
                parentWidth={dimension.width / 1}
                dotStyle={styles.sliderStyle}
              />
            </View>
          )}

          {populerMovies && (
            <View style={styles.carousel}>
              <CardList
                navigation={navigation}
                title={'Popüler Filmler'}
                content={populerMovies}
              />
            </View>
          )}
          {topRatedMovies && (
            <View style={styles.carousel}>
              <CardList
                navigation={navigation}
                title={'En çok Oy alan Filmler'}
                content={topRatedMovies}
              />
            </View>
          )}
          {populerTv && (
            <View style={styles.carousel}>
              <CardList
                navigation={navigation}
                title={'Popüler TV Dizileri'}
                content={populerTv}
              />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousel}>
              <CardList
                navigation={navigation}
                title={'Aile Filmleri'}
                content={familyMovies}
              />
            </View>
          )}

          {natureMovies && (
            <View style={styles.carousel}>
              <CardList
                navigation={navigation}
                title={'Belgesel'}
                content={natureMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loading && <ActivityIndicator size="large" />}
      {error && (
        <Error
          errorText="Bilinmeyen hata"
          errorText2="Lütfen sayfayı tekrar yenileyiniz"
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  scroolStyle: {
    marginBottom: 30,
  },
});

export default Home;
