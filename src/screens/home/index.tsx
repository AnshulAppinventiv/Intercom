import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import ReusableButton from '../../Components/ReusableButton';
import ReusableModal from '../../Components/ReusableModal';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import contactsData from '../../assets/data/contacts.json';
import {RootStackParamList} from '../../routes';
import {IMessage} from 'react-native-gifted-chat';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [showModal, setShowModal] = useState(false);
  const [recentChats, setRecentChats] = useState<any[]>([]);

  useEffect(() => {
    const loadRecentChats = async () => {
      const loadedChats = await Promise.all(
        contactsData.map(async contact => {
          const storedMessages = await AsyncStorage.getItem(
            `chat_${contact.id}`,
          );
          if (storedMessages) {
            const messages = JSON.parse(storedMessages);
            return {
              contact,
              lastMessage: messages[messages.length - 1],
              messages,
            };
          }
          return null;
        }),
      );
      setRecentChats(loadedChats.filter(chat => chat !== null));
    };
    loadRecentChats();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openContacts = () => {
    toggleModal();
    navigation.navigate('ContactScreen');
  };

  const renderRecentChat = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Chat', {
            contact: item.contact,
            messages: item.messages,
            onSendMessage: (newMessages: IMessage[]) => {
              console.log('New message sent:', newMessages);
            },
          })
        }>
        <View style={styles.recentChatItem}>
            <Text>
              {item.contact.firstName} {item.contact.lastName}
            </Text>
            <Text>you:{item.lastMessage.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.messages}>Messages</Text>
          <Text style={styles.contacts}>{recentChats.length} Contacts</Text>
        </View>
        <TouchableOpacity style={styles.bellButton} onPress={toggleModal}>
          <Image
            source={require('../../assets/icons/option1.png')}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/search.png')} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search Messages..."
          style={styles.searchInput}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.listContainer}>
          <FlatList
            data={recentChats}
            renderItem={renderRecentChat}
            keyExtractor={item => item.contact.id.toString()}
            ListEmptyComponent={
              <Text style={styles.noChats}>No chats, yet!</Text>
            }
          />
          </View>
          <ReusableButton
            text="Start Chat"
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={toggleModal}
          />
        </View>
      </ScrollView>

      {/* Reusable Modal */}
      <ReusableModal
        showModal={showModal}
        toggleModal={toggleModal}
        option1Text="New Chat"
        option2Text="New Group Chat"
        option3Text="New Announcement"
        option1Img={require('../../assets/icons/option1.png')}
        option2Img={require('../../assets/icons/option2.png')}
        option3Img={require('../../assets/icons/option3.png')}
        option1Action={openContacts}
      />
    </View>
  );
};

export default HomeScreen;
