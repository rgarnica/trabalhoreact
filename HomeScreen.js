import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class HomeScreen extends React.Component {
    render() {

        const products = require('./products.json');
        const { navigation } = this.props;

        return (
            <ScrollView>
                
                <View style={styles.headerBannerContainer}>
                    <Image source={require('./assets/banner.png')} style={styles.headerBanner}  resizeMode="contain" />
                </View>
                
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Icon name="check" style={styles.buttonIcon} size={24} />
                        <Text style={styles.buttonText}>Pagar com QR</Text>
                    </View>
                    <View style={styles.button}>
                        <Icon name="shopping-bag" style={styles.buttonIcon} size={24} />
                        <Text style={styles.buttonText}>Ofertas da Semana</Text>
                    </View>
                    <View style={styles.button}>
                        <Icon name="globe" style={styles.buttonIcon} size={24} />
                        <Text style={styles.buttonText}>Histórico</Text>
                    </View>
                    <View style={styles.button}>
                        <Icon name="watch" style={styles.buttonIcon} size={24} />
                        <Text style={styles.buttonText}>Carros, motos e outros</Text>
                    </View>
                    <View style={styles.button}>
                        <Icon name="plus" style={styles.buttonIcon} size={24} />
                        <Text style={styles.buttonText}>Ver mais</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Inspirado no último produto que você viu</Text>

                    { products.map(function(product, index){
                        return (
                            <TouchableHighlight key={index} onPress={() => navigation.navigate('ProductDetails', {item: product})}>
                                <View style={styles.cardItem}>
                                    <Image source={{uri: product.image}} resizeMode="contain" style={styles.cardImage}  />
                                    <View style={styles.cardContent}>
                                        <Text style={styles.cardDescription}>{ product.description }</Text>
                                        <Text style={styles.cardPrice}>{ product.price }</Text>
                                        <Text style={styles.cardPayment}>{ product.payment }</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    }) }

                    <Text style={styles.seeMoreLink}>Ver mais</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
    },
    button: {
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'center',
    },
    buttonIcon: {
        color: '#acacac',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        marginVertical: 2,
        fontWeight: 'normal',
        elevation: 3,
    },
    buttonText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#acacac',
    },
    headerBannerContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    headerBanner: {
        flexShrink: 1,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#fff',
        elevation: 4,
        margin: 10,
        borderRadius: 5,
    },
    cardTitle: {
        fontWeight: 'bold',
        padding: 7,
        fontSize: 18,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
    },
    cardItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        height: 60,
        flex: 1,
    },
    cardContent: {
        flex: 2,
    },
    cardPrice: {
        fontSize: 16,
    },
    cardPayment: {
        fontSize: 10,
        color: 'green',
    },
    seeMoreLink: {
        color: '#3d89fa',
        padding: 10,
        fontWeight: 'bold',
    },
    
});
