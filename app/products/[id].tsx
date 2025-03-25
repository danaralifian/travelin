import ProductCarousel from '@/components/ProductCarousel';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const ProductDetail = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <ProductCarousel />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ProductDetail;
