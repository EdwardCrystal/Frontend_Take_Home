import {Dimensions, Platform, StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  Image: {
    height: HEIGHT * 1.48,
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
    bottom: HEIGHT * 0.58,
  },
  BrandText: {
    fontSize: HEIGHT * 0.083,
    color: '#3AF1C2',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: HEIGHT * 0.71,
    shadowColor: '#3AF1C2',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  Textpassvalidation: {
    marginTop: HEIGHT * 0.015,
    fontSize: 8.5,
    color: '#000000',
    opacity: 0.3,
    textAlign: 'center',
  },
  SingupText: {
    fontSize: 23,
    textAlign: 'center',
    //marginTop: HEIGHT * 0.984,
    marginTop: HEIGHT * 0.95,
    color: '#000000',
  },
  GFicons: {
    height: 120,
    width: 82,
  },
  secoundtext: {
    bottom: 10,
    fontSize: 12.5,
    color: '#000000',
    opacity: 0.3,
    textAlign: 'center',
    marginTop: -HEIGHT * 0.025,
  },
  Textinputview: {
    flexDirection: 'row',
    height: HEIGHT * 0.078,
    width: WIDTH / 1.16,
    marginTop: HEIGHT * 0.01,
    margin: HEIGHT * 0.013,
    alignSelf: 'center',
    textAlign: 'left',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    color: 'black',
    shadowColor: '#D8D8D8',
    shadowOpacity: 2,
    shadowRadius: 5,
  },
  Textinputicons1: {
    padding: HEIGHT * 0.01,
    height: 20,
    width: 25,
    margin: HEIGHT * 0.028,
  },
  Loginbuttontext: {
    color: '#000000',
    fontSize: 13.5,
  },
  TouchableButton: {
    height: HEIGHT * 0.075,
    width: WIDTH / 1.16,
    margin: HEIGHT * 0.023,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3AF1C2',
    alignItems: 'center',
    marginTop: HEIGHT * 0.042,
    ...Platform.select({
      ios: {
        shadowColor: '#3AF1C2',
        shadowOffset: {width: 4, height: 6},
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        shadowColor: '#000',
        elevation: 4,
      },
    }),
  },
  footertext: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#000000',
    marginTop: HEIGHT * 0.015,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footertext1: {
    alignSelf: 'center',
    fontSize: 13,
    opacity: 0.3,
    textAlign: 'center',
  },
  footertext2: {
    fontSize: 13,
    color: '#000000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
