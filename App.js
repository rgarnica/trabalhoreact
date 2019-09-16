import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rightIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  }
});

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    ProductDetails: {screen: ProductDetailsScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f5d315',
      },
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerTitle: 'Mercado Livre',
      headerLeftContainerStyle: {
        paddingHorizontal: 10,
      },
      headerLeft: <Icon name="menu" size={24} />,
      headerRightContainerStyle: {
        paddingHorizontal: 10,
      },
      headerRight: (
        <View style={styles.rightIconContainer}>
          <Icon name="search" size={24} />
          <Icon name="shopping-cart" size={24} />
        </View>
      ),
    },
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: '#ededed',
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
