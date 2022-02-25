import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Navbar extends React.PureComponent {
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.headerContainer}>
            <View>
              <Image
                style={styles.headerImage}
                source={require('../../../assets/images/movie.png')}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon name={'search-outline'} size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  headerImage: {
    width: 50,
    height: 30,
    marginLeft: 8,
    borderRadius: 50,
  },
});

export default Navbar;
