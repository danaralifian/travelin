import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const ProductDetail = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }} className='p-4'>
            <View>
                <Text>ProductDetail</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ProductDetail;
