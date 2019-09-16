import * as React from 'react';
import {Button, ScrollView, Image, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProductDetailsScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Produto',
    };
    render() {
        const { navigation } = this.props;
        const product = navigation.getParam('item');
        return (
            <ScrollView>
                <View style={styles.productImageContainer}>
                    <Image source={{uri: product.image}} resizeMode="cover" style={styles.productImage} />
                </View>
                <View style={styles.productInfo}>
                    <Text style={styles.productCondition}>Novo - 40 vendidos</Text>
                    <Text style={styles.productTitle}>{ product.description }</Text>
                    <Text style={styles.productPrice}>{ product.price }</Text>
                </View>
                <View style={styles.additionalContainer}>
                    <View style={styles.additionalItem}>
                        <Icon name="md-card" size={22} style={styles.additionalIcon} />
                        <View style={styles.additionalItemDesc}>
                            <Text style={styles.additionalTitle}>3x R$ 6,34</Text>
                            <Text style={styles.additionalSub}>Com seu MASTERCARD terminado em 1234</Text>
                        </View>
                    </View>
                    <View style={styles.additionalItem}>
                        <Icon name="md-stopwatch" size={22} style={styles.additionalIcon} />
                        <View style={styles.additionalItemDesc}>
                            <Text style={styles.additionalTitle}>Envio R$ 10,00</Text>
                            <Text style={styles.additionalSub}>Chegará entre os dias 18 e 20 de setembro</Text>
                        </View>
                    </View>
                    <View style={styles.additionalItem}>
                        <Icon name="md-return-left" size={22} style={[styles.additionalIcon, {color: '#00a650'}]} />
                        <View style={styles.additionalItemDesc}>
                            <Text style={[styles.additionalTitle, {color: '#00a650'}]}>Devolução grátis</Text>
                            <Text style={styles.additionalSub}>Você tem 30 dias a partir do recebimento</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    additionalItem: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'flex-start',
    },
    additionalItemDesc: {
        padding: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 5,
    },
    additionalIconContainer: {
        flex: 1,
    },
    additionalTitle: {
        fontSize: 16,
    },
    additionalSub: {
        fontSize: 14,
        color: '#666'
    },
    additionalIcon: {
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginLeft: 25,
        marginRight: 20,
        textAlign: 'center',
        width: 32,
        height: 32,
        textAlignVertical: "center",
        color: "#ccc",
    },
    additionalItemDesc: {
        flex: 4,
    },
    productImageContainer: {
        flexDirection: 'row'
    },
    productImage: {
        height: 250,
        flex: 1,
    },
    productCondition: {
        color: '#666',
        fontSize: 12,
    },
    productTitle: {
        fontSize: 22,
    },
    productPrice: {
        marginTop: 4,
        fontSize: 24,
    },
    productInfo: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});