import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

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
