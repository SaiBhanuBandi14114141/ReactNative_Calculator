import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '8%',
    marginHorizontal: '10%',
    padding: '4%',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderColor: 'magenta',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '8%',
    marginHorizontal: '10%',
    padding: '4%',
  },
  textContainer: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: '10%',
    marginHorizontal: '10%',
    padding: '4%',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  numberTextSize: {
    fontSize: 18,
  },
  headingView: {
    borderColor: 'grey',
    marginTop: '10%',
    marginHorizontal: '10%',
    padding: '4%',
    textAlign: 'center',
    fontSize: 30,
    color: 'blue',
  },
});
