import {StyleSheet} from 'react-native';
import {vh, vw, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH / 1,
    backgroundColor: '#E7EDF3',
    alignItems: 'center',
  },
  header: {
    width: SCREEN_WIDTH / 1.0,
    backgroundColor: '#2A7BBB',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerText: {
    width: SCREEN_WIDTH / 1.5 - 6,
    height: SCREEN_HEIGHT / 8.0,
    justifyContent: 'flex-end',
    marginLeft: vw(16),
  },
  messages: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  listContainer: {
    marginTop: 50,
  },
  contacts: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    marginTop: vh(2),
  },
  bellButton: {
    width: vw(40),
    height: vh(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  bellIcon: {
    width: vw(20),
    height: vh(20),
  },
  searchBox: {
    width: vw(340),
    height: vh(48),
    backgroundColor: '#fff',
    marginTop: vh(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: vw(14),
  },
  searchInput: {
    height: vh(48),
    width: vw(280),
    marginLeft: vw(6),
    fontSize: 16,
  },

  body: {
    width: SCREEN_WIDTH / 1,
    height: SCREEN_HEIGHT / 1.5 - 20,
    backgroundColor: '#E7EDF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImg: {
    width: vw(166),
    height: vh(129.5),
  },
  noChats: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: vw(144),
    height: vh(49),
    backgroundColor: '#2A7BBB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(24),
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  recentChatItem: {
    width: SCREEN_WIDTH / 1.2,
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
