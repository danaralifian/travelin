import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Card() {
    const router = useRouter()
    return (
        <Pressable
            onPress={() => router.push({
                pathname: '/products/[id]',
                params: { id: '1' }
            })}
        >
            <View className='bg-white rounded-md' style={styles.card}>
                <View className='flex-row rounded-t-md h-60 justify-between'>
                    <Image
                        source={{
                            uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1440960gsm/events/2020/12/23/c180cda5-ab32-43a6-b6d8-9f5ed529bb5d-1608719402352-2266cd82ee0adeb326ec1ce0bcdb158c.jpg'
                        }}
                        className='w-[79%] h-full rounded-tl-md'
                        resizeMode='cover' />
                    <Image
                        source={{
                            uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1440960gsm/events/2020/12/23/0a187d5c-34cf-4b67-91c3-5fa447c1cdcc-1608719405019-6bc9697a6e5aa95ab80738edad63eca9.jpg'
                        }}
                        className='w-[20%] h-full rounded-tr-md'
                        resizeMode='cover' />
                </View>
                <View className='p-2'>
                    <Text className='font-bold mb-2'>Open Trip Pulau Pari 2D/1N </Text>
                    <View className='flex-row gap-2 mb-2'>
                        <Text><Text className='font-bold'>4,3</Text>/5</Text>
                        <Text className='text-gray-500 text-sm'>(31 review)</Text>
                    </View>
                    <Text className='text-gray-500 text-sm'>Kepulauan Seribu</Text>
                    <View className='flex-row justify-end'>
                        <Text className='text-lg font-bold text-red-500'>Rp 1.500.000</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 4,
        // overflow: 'hidden',
        // Drop shadow styles for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        // Drop shadow styles for Android
        elevation: 3,
    },
})
