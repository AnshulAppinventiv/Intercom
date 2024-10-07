import {StyleSheet} from 'react-native';
import {vh, vw, SCREEN_WIDTH} from '../../utils/dimension';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: 40,
    // backgroundColor:'white'
  },
  header: {
    width: SCREEN_WIDTH / 1,
    height: vh(123),
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    paddingBottom: vh(20),
    borderBottomLeftRadius: 8,
    borderBottomEndRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 4,
  },
  backArrow: {
    width: vw(30),
    height: vh(30),
    tintColor: 'black',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  initialsCircle: {
    width: vw(40),
    height: vh(40),
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: vw(10),
  },
  initialsText: {
    color: '#000',
    fontSize: 18,
  },
  fullName: {
    color: '#000',
    fontSize: 18,
    marginLeft: 10,
  },
});
