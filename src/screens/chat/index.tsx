/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../../routes/index.tsx';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './styles.tsx';

const Chat = ({route}:any) => {
  const {contact, messages: initialMessages, onSendMessage} = route.params;
  const [msgs, setMsgs] = useState<IMessage[]>(initialMessages);

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Chat'>>();

  useEffect(() => {
    setMsgs(initialMessages);
  }, [initialMessages]);

  const onSend = (newMessages: IMessage[]) => {
    setMsgs(prevMsgs => GiftedChat.append(prevMsgs, newMessages));
    onSendMessage(newMessages);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <View style={styles.initialsCircle}>
            <Text style={styles.initialsText}>
              {getInitials(contact.firstName, contact.lastName)}
            </Text>
          </View>
          <Text style={styles.fullName}>
            {contact.firstName} {contact.lastName}
          </Text>
        </View>
      </View>

      <GiftedChat
        messages={msgs}
        onSend={onSend}
        user={{_id: 1}}
        messagesContainerStyle={
          {
            backgroundColor: '#E7EDF3',
          }
        }
      />
    </SafeAreaProvider>
  );
};

export default Chat;
