import { Text, SafeAreaView, StatusBar, FlatList, View } from 'react-native';

import Card from '@/components/ui/Card';
import { data } from '@/constants/Products';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }} className='p-2'>
      <View className='p-2'>
        <Text className='text-sm text-gray-500'>Menampikan {data.length} hasil</Text>
      </View>
      < FlatList
        data={data}
        renderItem={({ item }) => (<Card />)
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView >
  );
}
