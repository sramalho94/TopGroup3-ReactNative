import { View, Text, Button } from 'react-native'

type Props = {
  title: string;
  screen: any;
  color: string;
  vertical: boolean;
}

const ActionRow = ({ title, screen, color, vertical }: Props) => {
  return (
    <View className={`flex flex-1 justify-center items-center bg-green-900 hover:bg-green-300 m-10 S px-4 rounded-lg space-x-2 ${vertical ? "flex-col" : "flex-row"}`}>
      <Text className='font-bold m-3 justify-center bg-green-900 hover:bg-green-300 text-white rounded'>{title}</Text>
    </View>
  )
}

export default ActionRow