import {StyleSheet} from 'react-native';
import {vh, vw, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH / 1,
    backgroundColor: '#E7EDF3',
  },
  header: {
    width: SCREEN_WIDTH / 1.0,
    height: vh(120),
    backgroundColor: '#E7EDF3',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  backArrow: {
    width: vw(48),
    height: vh(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchBox: {
    width: vw(297),
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
    height: SCREEN_HEIGHT / 1,
    backgroundColor: '#E7EDF3',
    paddingLeft: 14,
  },
  list: {
    width: SCREEN_WIDTH / 1.1 + 10,
    height: SCREEN_HEIGHT / 1.2,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  contactItem: {
    width: SCREEN_WIDTH / 1.2,
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  separator: {
    width: 100,
    height: 3,
    color: 'yellow',
  },
  contactName: {
    fontSize: 18,
  },
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  noResultText: {
    fontSize: 20,
    color: '#999',
  },
  noResult: {
    width: vw(166),
    height: vh(180),
    marginTop: vh(150),
  },
  startChat: {
    color: '#aaa',
  },
  initialsCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  initialsText: {
    color: '#000',
    fontSize: 18,
  },
});
