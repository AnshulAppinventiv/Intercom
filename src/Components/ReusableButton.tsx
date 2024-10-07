// import {Text, TouchableOpacity} from 'react-native';
// import React from 'react';

// const ReusableButton = ({text, style, textStyle, action}:any) => {
//   return (
//     <TouchableOpacity
//     style={style}
//     onPress={action}>
//       <Text style={textStyle}>{text}</Text>
//     </TouchableOpacity>
//   );
// };

// export default ReusableButton;

import {
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ReusableButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

const ReusableButton: React.FC<ReusableButtonProps> = ({
  text,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;
