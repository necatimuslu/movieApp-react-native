import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CardImageList from './CardImageList';
const CardList = ({title, content, navigation}) => {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <FlatList
        horizontal={true}
        data={content}
        renderItem={({item}) => (
          <CardImageList navigation={navigation} item={item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,

    paddingBottom: 10,
  },
  list: {
    marginTop: 4,
  },
});

export default CardList;
