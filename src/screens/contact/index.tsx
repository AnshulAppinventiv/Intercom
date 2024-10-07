/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Text,
} from 'react-native';
import {styles} from './styles';
import contactsData from '../../assets/data/contacts.json';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {RootStackParamList} from '../../routes';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  startChat?: string;
}
interface Messages {
  [key: number]: IMessage[];
}

const ContactScreen: React.FC = () => {
  const [contacts] = useState<Contact[]>(contactsData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredContacts, setFilteredContacts] =
    useState<Contact[]>(contactsData);
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadChats = async () => {
      const loadedMessages: Messages = {};
      for (const contact of contacts) {
        const storedMessages = await AsyncStorage.getItem(`chat_${contact.id}`);
        if (storedMessages) {
          loadedMessages[contact.id] = JSON.parse(storedMessages);
        }
      }
      setMessages(loadedMessages);
    };
    loadChats();
  }, [contacts]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = contacts.filter(contact =>
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [contacts, searchTerm]);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleContactPress = (contact: Contact) => {
    navigation.navigate('Chat', {
      contact,
      messages: messages[contact.id] || [],
      onSendMessage: async (newMessages: IMessage[]) => {
        const updatedMessages = GiftedChat.append(
          messages[contact.id] || [],
          newMessages,
        );
        setMessages(prev => ({
          ...prev,
          [contact.id]: updatedMessages,
        }));
        await AsyncStorage.setItem(
          `chat_${contact.id}`,
          JSON.stringify(updatedMessages),
        );
      },
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const userId = 1;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/back.png')} />
        </TouchableOpacity>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search here..."
            style={styles.searchInput}
            autoFocus={true}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.list}>
          <FlatList
            data={filteredContacts}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => (
              <Image
                source={require('/Users/user/Desktop/Tasks/InterCom/src/assets/icons/noResult.png')}
                style={styles.noResult}
              />
            )}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleContactPress(item)}>
                <View style={styles.contactItem}>
                  <View
                    style={[
                      styles.initialsCircle,
                      {backgroundColor: getRandomColor()},
                    ]}>
                    <Text style={styles.initialsText}>
                      {getInitials(item.firstName, item.lastName)}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.contactName}>
                      {item.firstName} {item.lastName}
                    </Text>
                    <Text style={styles.startChat}>
                      {messages[item.id]?.length > 0
                        ? messages[item.id][messages[item.id].length - 1].user
                            ._id === userId
                          ? `You: ${
                              messages[item.id][messages[item.id].length - 1]
                                .text
                            }`
                          : messages[item.id][messages[item.id].length - 1].text
                        : item.startChat}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
