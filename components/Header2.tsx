import {View, TouchableOpacity, Text} from 'react-native';

export default function Header() {
  return (
    <View>
      <TouchableOpacity>
        <Text>메뉴</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>알림</Text>
      </TouchableOpacity>
    </View>
  );
}
