import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieAndTv} from '../services/movieService';
import CardImageList from './components/CardImageList';

const Search = ({navigation}) => {
  const [search, onChangeValue] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const onsubmit = query => {
    Promise.all([
      searchMovieAndTv(query, 'movie'),
      searchMovieAndTv(query, 'tv'),
    ])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
        onChangeValue('');
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={onChangeValue}
          placeholder="Film veya Dizi arayınız"
        />
        <TouchableOpacity onPress={() => onsubmit(search)}>
          <Icon
            style={styles.icon}
            name={'search-outline'}
            size={30}
            color="#333"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchItems}>
        {searchResults && searchResults.length > 0 && (
          <FlatList
            numColumns={4}
            key={1}
            data={searchResults}
            renderItem={({item}) => (
              <CardImageList navigation={navigation} item={item} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      <View style={styles.searchItems}>
        {searchResults && searchResults.length == 0 && (
          <View style={styles.noMovieContainer}>
            <Text>Film bulunamadı</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 5,
    borderWidth: 0.5,
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    flex: 1,
    marginLeft: 10,
    marginTop: 14,
    marginRight: 5,
  },
  noMovieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchItems: {
    padding: 1,
  },
});

export default Search;
