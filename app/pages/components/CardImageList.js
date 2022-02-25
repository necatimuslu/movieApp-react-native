import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native';
import {imageSrc} from '../../services/baseUrl';

const dimension = Dimensions.get('screen');
const placeholderImage = require('../../../assets/images/fake.jpeg');
const CardImageList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
      {item.poster_path ? (
        <Image
          style={styles.image}
          source={{
            uri: `${imageSrc}${item.poster_path}`,
          }}
        />
      ) : (
        <View>
          <Image style={styles.image} source={placeholderImage} />
          {item.title && (
            <Text style={styles.movieText}>
              {item.title ? item?.title.substring(0, 15) + '...' : item.title}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 5,
  },
  image: {
    width: dimension.width / 2.1,
    height: dimension.height / 3,
    borderRadius: 10,
  },
  movieText: {
    position: 'absolute',
    marginTop: dimension.height / 6.6,
    marginLeft: dimension.width / 70,
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default CardImageList;
