import { data } from '@/constants/Products';
import React from 'react';
import { Image, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';

const CarouselProductImage = () => {
    const scrollOffsetValue = useSharedValue<number>(0);
    const ref = React.useRef<ICarouselInstance>(null);
    return (
        <View
            id="carousel-component"
            className='relative'
        >
            <Carousel
                ref={ref}
                loop
                width={430}
                height={280}
                data={data}
                onProgressChange={scrollOffsetValue}
                renderItem={({ index }) => <Image
                    source={{
                        uri: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1440960gsm/events/2020/12/23/c180cda5-ab32-43a6-b6d8-9f5ed529bb5d-1608719402352-2266cd82ee0adeb326ec1ce0bcdb158c.jpg'
                    }}
                    className='w-full h-[280]'
                    resizeMode='cover' />}
            />
            <View className='absolute bottom-0 left-0 right-0'>
                <Pagination.Basic<{ color: string }>
                    data={data.map((item) => ({ color: 'white' }))}
                    progress={scrollOffsetValue}
                    size={6}
                    dotStyle={{
                        borderRadius: 100,
                        backgroundColor: "#d1d5db",
                    }}
                    activeDotStyle={{
                        borderRadius: 100,
                        overflow: "hidden",
                        backgroundColor: "#f1f1f1",
                    }}
                    containerStyle={[
                        {
                            gap: 5,
                            marginBottom: 10,
                        },
                    ]}
                    horizontal
                />
            </View>
        </View>
    );
}

export default CarouselProductImage;
